import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  budgetRange?: string;
  timeline?: string;
  message: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: ContactForm = await req.json();

    if (!body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Store in database
    const { error: dbError } = await supabaseAdmin
      .from("contact_inquiries")
      .insert({
        name: body.name.slice(0, 200),
        email: body.email.slice(0, 255),
        phone: body.phone?.slice(0, 50) || null,
        project_type: body.projectType?.slice(0, 100) || null,
        budget_range: body.budgetRange?.slice(0, 100) || null,
        timeline: body.timeline?.slice(0, 100) || null,
        message: body.message.slice(0, 5000),
      });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save inquiry" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Build notification email HTML
    const emailHtml = `
<!DOCTYPE html>
<html><body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f4f4f5;">
<div style="max-width:600px;margin:0 auto;padding:32px 16px;">
  <div style="background:#0a1628;padding:24px 32px;border-radius:8px 8px 0 0;">
    <h1 style="margin:0;color:#c9a96e;font-size:20px;font-weight:700;">New Contact Inquiry</h1>
    <p style="margin:4px 0 0;color:#ffffff99;font-size:13px;">Kodai Construction Website</p>
  </div>
  <div style="background:#ffffff;padding:24px 32px;border-radius:0 0 8px 8px;">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:10px 0;font-weight:600;color:#333;border-bottom:1px solid #eee;width:140px;">Name</td><td style="padding:10px 0;color:#555;border-bottom:1px solid #eee;">${body.name}</td></tr>
      <tr><td style="padding:10px 0;font-weight:600;color:#333;border-bottom:1px solid #eee;">Email</td><td style="padding:10px 0;color:#555;border-bottom:1px solid #eee;"><a href="mailto:${body.email}" style="color:#0a1628;">${body.email}</a></td></tr>
      ${body.phone ? `<tr><td style="padding:10px 0;font-weight:600;color:#333;border-bottom:1px solid #eee;">Phone</td><td style="padding:10px 0;color:#555;border-bottom:1px solid #eee;">${body.phone}</td></tr>` : ""}
      ${body.projectType ? `<tr><td style="padding:10px 0;font-weight:600;color:#333;border-bottom:1px solid #eee;">Project Type</td><td style="padding:10px 0;color:#555;border-bottom:1px solid #eee;">${body.projectType}</td></tr>` : ""}
      ${body.budgetRange ? `<tr><td style="padding:10px 0;font-weight:600;color:#333;border-bottom:1px solid #eee;">Budget Range</td><td style="padding:10px 0;color:#555;border-bottom:1px solid #eee;">${body.budgetRange}</td></tr>` : ""}
      ${body.timeline ? `<tr><td style="padding:10px 0;font-weight:600;color:#333;border-bottom:1px solid #eee;">Timeline</td><td style="padding:10px 0;color:#555;border-bottom:1px solid #eee;">${body.timeline}</td></tr>` : ""}
      <tr><td style="padding:10px 0;font-weight:600;color:#333;vertical-align:top;">Message</td><td style="padding:10px 0;color:#555;white-space:pre-wrap;">${body.message}</td></tr>
    </table>
  </div>
</div>
</body></html>`;

    // Build plain-text version
    const textParts = [
      `New Contact Inquiry - Kodai Construction Website`,
      ``,
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      body.phone ? `Phone: ${body.phone}` : null,
      body.projectType ? `Project Type: ${body.projectType}` : null,
      body.budgetRange ? `Budget Range: ${body.budgetRange}` : null,
      body.timeline ? `Timeline: ${body.timeline}` : null,
      ``,
      `Message:`,
      body.message,
    ].filter(Boolean).join('\n');

    // Enqueue notification email via the email queue
    const messageId = `contact-inquiry-${crypto.randomUUID()}`;
    const unsubscribeToken = crypto.randomUUID();

    // Create unsubscribe token for the recipient
    await supabaseAdmin.from("email_unsubscribe_tokens").insert({
      email: "info@kodaiconstruction.com",
      token: unsubscribeToken,
    });

    // Log as pending
    await supabaseAdmin.from("email_send_log").insert({
      message_id: messageId,
      template_name: "contact-inquiry-notification",
      recipient_email: "info@kodaiconstruction.com",
      status: "pending",
      metadata: { name: body.name, email: body.email },
    });

    // Enqueue to transactional queue
    await supabaseAdmin.rpc("enqueue_email", {
      queue_name: "transactional_emails",
      payload: {
        message_id: messageId,
        to: "info@kodaiconstruction.com",
        from: "Kodai Website <noreply@notify.kodaiconstruction.com>",
        subject: `New Inquiry from ${body.name}`,
        html: emailHtml,
        text: textParts,
        reply_to: body.email,
        purpose: "transactional",
        label: "contact-inquiry-notification",
        sender_domain: "notify.kodaiconstruction.com",
        queued_at: new Date().toISOString(),
        idempotency_key: messageId,
        unsubscribe_token: unsubscribeToken,
      },
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
