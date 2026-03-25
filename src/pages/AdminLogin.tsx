import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Lock } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      // Check admin role
      const { data: roles, error: roleError } = await supabase.rpc("has_role", {
        _user_id: data.user.id,
        _role: "admin",
      });

      if (roleError || !roles) {
        await supabase.auth.signOut();
        toast({ title: "Access Denied", description: "You do not have admin privileges.", variant: "destructive" });
        return;
      }

      navigate("/admin/dashboard");
    } catch (err: any) {
      toast({ title: "Login Failed", description: err.message || "Invalid credentials.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:border-navy focus:ring-0 outline-none transition-all duration-300";

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Lock size={20} className="text-navy" />
          <h1 className="text-2xl font-display font-black text-foreground tracking-tight">Admin Login</h1>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-foreground mb-2">Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="admin@kodaiconstruction.com" />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-foreground mb-2">Password</label>
            <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass} placeholder="••••••••" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wide bg-navy text-white hover:bg-navy/90 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? <><Loader2 size={14} className="animate-spin" /> Signing in...</> : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
