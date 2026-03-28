import { useState } from "react";
import { Mail, Lock, Brain, ChevronDown } from "lucide-react";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [email, setEmail] = useState("demo@workpulse.ai");
  const [password, setPassword] = useState("password");
  const [role, setRole] = useState<UserRole>("employee");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password, role);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Brain className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">WorkPulse AI</h1>
          <p className="text-sm text-muted-foreground mt-1">AI-Driven Work Efficiency Evaluation</p>
        </div>

        <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
          <h2 className="text-lg font-semibold text-card-foreground mb-6">Sign in to your account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 rounded-lg border border-input bg-background pl-10 pr-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 rounded-lg border border-input bg-background pl-10 pr-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Role</label>
              <div className="relative">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as UserRole)}
                  className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-all"
                >
                  <option value="employee">Employee</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold shadow-md hover:opacity-90 transition-opacity mt-2"
            >
              Sign In
            </button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Demo mode — select a role and click Sign In
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
