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

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Store in database
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

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

    // Send email notification using Supabase's built-in email
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (RESEND_API_KEY) {
      const emailHtml = `
        <h2>New Contact Inquiry from Kodai Website</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.email}</td></tr>
          ${body.phone ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.phone}</td></tr>` : ""}
          ${body.projectType ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Project Type</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.projectType}</td></tr>` : ""}
          ${body.budgetRange ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Budget Range</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.budgetRange}</td></tr>` : ""}
          ${body.timeline ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Timeline</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.timeline}</td></tr>` : ""}
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.message}</td></tr>
        </table>
      `;

      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Kodai Website <noreply@kodaiconstruction.com>",
          to: ["info@kodaiconstruction.com"],
          subject: `New Inquiry from ${body.name}`,
          html: emailHtml,
        }),
      });

      if (!emailRes.ok) {
        console.error("Email send failed:", await emailRes.text());
      }
    } else {
      console.log("RESEND_API_KEY not set — inquiry saved to database only");
    }

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
