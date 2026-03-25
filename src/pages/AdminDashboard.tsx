import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Mail, Phone, Calendar, Building2, DollarSign, Clock, Search, ChevronDown } from "lucide-react";
import { format } from "date-fns";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  project_type: string | null;
  budget_range: string | null;
  timeline: string | null;
  message: string;
  created_at: string;
}

const PROJECT_TYPES = ["residential", "commercial", "industrial", "consulting"];
const BUDGET_RANGES = ["under-500m", "500m-1b", "1b-5b", "above-5b"];

const budgetLabel = (v: string | null) => {
  const map: Record<string, string> = {
    "under-500m": "Under ₦500M",
    "500m-1b": "₦500M – ₦1B",
    "1b-5b": "₦1B – ₦5B",
    "above-5b": "Above ₦5B",
  };
  return v ? map[v] || v : "—";
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterBudget, setFilterBudget] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    checkAuth();
    fetchInquiries();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin");
      return;
    }
    const { data: isAdmin } = await supabase.rpc("has_role", {
      _user_id: session.user.id,
      _role: "admin",
    });
    if (!isAdmin) {
      await supabase.auth.signOut();
      navigate("/admin");
    }
  };

  const fetchInquiries = async () => {
    const { data, error } = await supabase
      .from("contact_inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setInquiries(data);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const filtered = inquiries.filter((i) => {
    const matchSearch = !search || i.name.toLowerCase().includes(search.toLowerCase()) || i.email.toLowerCase().includes(search.toLowerCase());
    const matchType = !filterType || i.project_type === filterType;
    const matchBudget = !filterBudget || i.budget_range === filterBudget;
    return matchSearch && matchType && matchBudget;
  });

  const selectClass = "px-3 py-2 border border-border bg-background text-foreground text-xs uppercase tracking-wide focus:border-navy outline-none";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-navy">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-display font-black text-white tracking-tight">Contact Inquiries</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-white/60 hover:text-white text-xs uppercase tracking-wide transition-colors">
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total", value: inquiries.length },
            { label: "Residential", value: inquiries.filter((i) => i.project_type === "residential").length },
            { label: "Commercial", value: inquiries.filter((i) => i.project_type === "commercial").length },
            { label: "This Month", value: inquiries.filter((i) => new Date(i.created_at).getMonth() === new Date().getMonth()).length },
          ].map((s) => (
            <div key={s.label} className="border border-border p-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">{s.label}</p>
              <p className="text-2xl font-display font-black text-foreground">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="relative flex-1 min-w-[200px]">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email..."
              className="w-full pl-9 pr-4 py-2 border border-border bg-background text-foreground text-sm focus:border-navy outline-none"
            />
          </div>
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className={selectClass}>
            <option value="">All Types</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
            ))}
          </select>
          <select value={filterBudget} onChange={(e) => setFilterBudget(e.target.value)} className={selectClass}>
            <option value="">All Budgets</option>
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>{budgetLabel(b)}</option>
            ))}
          </select>
        </div>

        {/* Table */}
        {loading ? (
          <p className="text-muted-foreground text-sm">Loading...</p>
        ) : filtered.length === 0 ? (
          <p className="text-muted-foreground text-sm">No inquiries found.</p>
        ) : (
          <div className="border border-border divide-y divide-border">
            {filtered.map((inquiry) => (
              <div key={inquiry.id}>
                <button
                  onClick={() => setExpanded(expanded === inquiry.id ? null : inquiry.id)}
                  className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">{inquiry.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{inquiry.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    {inquiry.project_type && (
                      <span className="hidden sm:inline text-[10px] font-semibold uppercase tracking-widest text-navy bg-navy/10 px-2 py-1">
                        {inquiry.project_type}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {format(new Date(inquiry.created_at), "MMM d, yyyy")}
                    </span>
                    <ChevronDown size={14} className={`text-muted-foreground transition-transform ${expanded === inquiry.id ? "rotate-180" : ""}`} />
                  </div>
                </button>

                {expanded === inquiry.id && (
                  <div className="px-4 py-4 bg-muted/20 border-t border-border space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {inquiry.phone && (
                        <div className="flex items-center gap-2 text-sm">
                          <Phone size={12} className="text-muted-foreground shrink-0" />
                          <span>{inquiry.phone}</span>
                        </div>
                      )}
                      {inquiry.project_type && (
                        <div className="flex items-center gap-2 text-sm">
                          <Building2 size={12} className="text-muted-foreground shrink-0" />
                          <span className="capitalize">{inquiry.project_type}</span>
                        </div>
                      )}
                      {inquiry.budget_range && (
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign size={12} className="text-muted-foreground shrink-0" />
                          <span>{budgetLabel(inquiry.budget_range)}</span>
                        </div>
                      )}
                      {inquiry.timeline && (
                        <div className="flex items-center gap-2 text-sm">
                          <Clock size={12} className="text-muted-foreground shrink-0" />
                          <span className="capitalize">{inquiry.timeline.replace("-", " ")}</span>
                        </div>
                      )}
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">Message</p>
                      <p className="text-sm text-foreground whitespace-pre-wrap">{inquiry.message}</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <a
                        href={`mailto:${inquiry.email}`}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide bg-navy text-white hover:bg-navy/90 transition-colors"
                      >
                        <Mail size={12} /> Reply
                      </a>
                      {inquiry.phone && (
                        <a
                          href={`tel:${inquiry.phone}`}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide border border-border text-foreground hover:bg-muted transition-colors"
                        >
                          <Phone size={12} /> Call
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <p className="text-xs text-muted-foreground mt-4">{filtered.length} of {inquiries.length} inquiries</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
