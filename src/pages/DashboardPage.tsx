import { TrendingUp, AlertTriangle, Clock, CheckCircle } from "lucide-react";
import StatCard from "@/components/ui/stat-card";
import InsightCard from "@/components/ui/insight-card";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart
} from "recharts";
import { motion } from "framer-motion";

const weeklyData = [
  { day: "Mon", productivity: 82, falseProductivity: 12 },
  { day: "Tue", productivity: 78, falseProductivity: 18 },
  { day: "Wed", productivity: 91, falseProductivity: 6 },
  { day: "Thu", productivity: 85, falseProductivity: 10 },
  { day: "Fri", productivity: 73, falseProductivity: 22 },
  { day: "Sat", productivity: 45, falseProductivity: 8 },
  { day: "Sun", productivity: 30, falseProductivity: 5 },
];

const activityVsOutput = [
  { hour: "9AM", activity: 85, output: 70 },
  { hour: "10AM", activity: 90, output: 88 },
  { hour: "11AM", activity: 78, output: 75 },
  { hour: "12PM", activity: 45, output: 30 },
  { hour: "1PM", activity: 60, output: 55 },
  { hour: "2PM", activity: 92, output: 85 },
  { hour: "3PM", activity: 88, output: 60 },
  { hour: "4PM", activity: 70, output: 65 },
  { hour: "5PM", activity: 55, output: 50 },
];

const pieData = [
  { name: "Productive", value: 72, color: "hsl(142, 71%, 45%)" },
  { name: "False Productive", value: 18, color: "hsl(0, 72%, 51%)" },
  { name: "Idle", value: 10, color: "hsl(220, 9%, 46%)" },
];

const insights = [
  { type: "warning" as const, message: "You are switching tasks too frequently — 23 context switches detected today." },
  { type: "warning" as const, message: "High activity but low output detected between 2PM–4PM. Consider deep work blocks." },
  { type: "success" as const, message: "Focus time improved by 15% compared to last week. Great progress!" },
  { type: "info" as const, message: "Your most productive hours are 10AM–12PM. Schedule important tasks then." },
];

const DashboardPage = () => {
  return (
    <div className="space-y-6 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Productivity Score"
          value="82%"
          change="↑ 5% from last week"
          changeType="positive"
          icon={<TrendingUp className="w-5 h-5 text-primary-foreground" />}
          gradient="gradient-primary"
        />
        <StatCard
          title="False Productivity"
          value="12%"
          change="↓ 3% from last week"
          changeType="positive"
          icon={<AlertTriangle className="w-5 h-5 text-warning-foreground" />}
          gradient="gradient-warning"
        />
        <StatCard
          title="Focus Time"
          value="5.2h"
          change="↑ 0.8h from last week"
          changeType="positive"
          icon={<Clock className="w-5 h-5 text-primary-foreground" />}
          gradient="gradient-success"
        />
        <StatCard
          title="Task Completion"
          value="91%"
          change="↑ 2% from last week"
          changeType="positive"
          icon={<CheckCircle className="w-5 h-5 text-primary-foreground" />}
          gradient="gradient-primary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 bg-card rounded-xl p-5 card-shadow border border-border"
        >
          <h3 className="text-sm font-semibold text-card-foreground mb-4">Weekly Productivity Trend</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={weeklyData}>
              <defs>
                <linearGradient id="prodGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(225, 73%, 57%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(225, 73%, 57%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(220, 13%, 91%)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Area type="monotone" dataKey="productivity" stroke="hsl(225, 73%, 57%)" fill="url(#prodGrad)" strokeWidth={2} />
              <Line type="monotone" dataKey="falseProductivity" stroke="hsl(0, 72%, 51%)" strokeWidth={2} dot={{ r: 3 }} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl p-5 card-shadow border border-border"
        >
          <h3 className="text-sm font-semibold text-card-foreground mb-4">Productivity Breakdown</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" strokeWidth={0}>
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-2">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-[10px] text-muted-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-card rounded-xl p-5 card-shadow border border-border"
        >
          <h3 className="text-sm font-semibold text-card-foreground mb-4">Activity vs Output</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={activityVsOutput}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="hour" tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(220, 13%, 91%)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "11px" }} />
              <Bar dataKey="activity" fill="hsl(225, 73%, 57%)" radius={[4, 4, 0, 0]} barSize={16} />
              <Bar dataKey="output" fill="hsl(262, 60%, 58%)" radius={[4, 4, 0, 0]} barSize={16} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card rounded-xl p-5 card-shadow border border-border"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-md gradient-primary flex items-center justify-center">
              <span className="text-[10px] text-primary-foreground font-bold">AI</span>
            </div>
            <h3 className="text-sm font-semibold text-card-foreground">AI Insights</h3>
          </div>
          <div className="space-y-3">
            {insights.map((insight, i) => (
              <InsightCard key={i} type={insight.type} message={insight.message} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
