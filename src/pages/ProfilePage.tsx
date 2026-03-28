import { useAuth } from "@/contexts/AuthContext";
import { Mail, Shield, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const weeklyData = [
  { day: "Mon", hours: 7.5 },
  { day: "Tue", hours: 8.2 },
  { day: "Wed", hours: 6.8 },
  { day: "Thu", hours: 8.0 },
  { day: "Fri", hours: 7.1 },
];

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl p-6 card-shadow border border-border"
      >
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground">
            {user?.name?.charAt(0)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-card-foreground">{user?.name}</h3>
            <div className="flex items-center gap-4 mt-1">
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Mail className="w-3.5 h-3.5" /> {user?.email}
              </span>
              <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary capitalize">
                <Shield className="w-3 h-3" /> {user?.role}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Avg. Productivity", value: "82%", icon: TrendingUp, gradient: "gradient-primary" },
          { label: "Avg. Focus Time", value: "5.2h", icon: Clock, gradient: "gradient-success" },
          { label: "Tasks This Week", value: "24", icon: Shield, gradient: "gradient-warning" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-xl p-5 card-shadow border border-border flex items-center gap-4"
          >
            <div className={`w-10 h-10 rounded-lg ${stat.gradient} flex items-center justify-center`}>
              <stat.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="text-lg font-bold text-card-foreground">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card rounded-xl p-5 card-shadow border border-border"
      >
        <h3 className="text-sm font-semibold text-card-foreground mb-4">Work Hours This Week</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
            <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
            <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 100%)", border: "1px solid hsl(220, 13%, 91%)", borderRadius: "8px", fontSize: "12px" }} />
            <Bar dataKey="hours" fill="hsl(225, 73%, 57%)" radius={[6, 6, 0, 0]} barSize={32} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-card rounded-xl p-5 card-shadow border border-border"
      >
        <h3 className="text-sm font-semibold text-card-foreground mb-4">Settings</h3>
        <div className="space-y-3">
          {[
            { label: "Email Notifications", desc: "Receive daily productivity summary" },
            { label: "Weekly Report", desc: "Auto-generate weekly performance report" },
            { label: "AI Insights", desc: "Get AI-powered productivity suggestions" },
          ].map((setting) => (
            <div key={setting.label} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div>
                <p className="text-sm font-medium text-foreground">{setting.label}</p>
                <p className="text-xs text-muted-foreground">{setting.desc}</p>
              </div>
              <div className="w-10 h-6 rounded-full bg-primary relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-primary-foreground shadow-sm" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
