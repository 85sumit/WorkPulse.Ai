import { Download, FileText, Users } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { motion } from "framer-motion";

const teamData = [
  { name: "John", score: 82, tasks: 24 },
  { name: "Sarah", score: 91, tasks: 30 },
  { name: "Mike", score: 75, tasks: 18 },
  { name: "Emily", score: 88, tasks: 27 },
  { name: "Alex", score: 69, tasks: 15 },
];

const monthlyTrend = [
  { month: "Jan", team: 72, individual: 68 },
  { month: "Feb", team: 76, individual: 74 },
  { month: "Mar", team: 80, individual: 79 },
  { month: "Apr", team: 78, individual: 82 },
  { month: "May", team: 85, individual: 86 },
  { month: "Jun", team: 83, individual: 88 },
];

const ReportsPage = () => {
  return (
    <div className="space-y-6 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-3"
      >
        <button className="h-10 px-5 rounded-lg gradient-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-md">
          <Download className="w-4 h-4" /> Export PDF
        </button>
        <button className="h-10 px-5 rounded-lg border border-input bg-card text-sm text-foreground font-medium flex items-center gap-2 hover:bg-secondary transition-colors">
          <FileText className="w-4 h-4" /> Export CSV
        </button>
        <button className="h-10 px-5 rounded-lg border border-input bg-card text-sm text-foreground font-medium flex items-center gap-2 hover:bg-secondary transition-colors">
          <Users className="w-4 h-4" /> Team Report
        </button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl p-5 card-shadow border border-border"
        >
          <h3 className="text-sm font-semibold text-card-foreground mb-4">Team Performance</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={teamData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
              <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 100%)", border: "1px solid hsl(220, 13%, 91%)", borderRadius: "8px", fontSize: "12px" }} />
              <Legend wrapperStyle={{ fontSize: "11px" }} />
              <Bar dataKey="score" name="Productivity Score" fill="hsl(225, 73%, 57%)" radius={[4, 4, 0, 0]} barSize={24} />
              <Bar dataKey="tasks" name="Tasks Completed" fill="hsl(262, 60%, 58%)" radius={[4, 4, 0, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl p-5 card-shadow border border-border"
        >
          <h3 className="text-sm font-semibold text-card-foreground mb-4">Monthly Performance Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
              <Tooltip contentStyle={{ backgroundColor: "hsl(0, 0%, 100%)", border: "1px solid hsl(220, 13%, 91%)", borderRadius: "8px", fontSize: "12px" }} />
              <Legend wrapperStyle={{ fontSize: "11px" }} />
              <Line type="monotone" dataKey="team" name="Team Avg" stroke="hsl(225, 73%, 57%)" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="individual" name="Individual" stroke="hsl(262, 60%, 58%)" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-card rounded-xl p-5 card-shadow border border-border"
      >
        <h3 className="text-sm font-semibold text-card-foreground mb-4">Individual Performance Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Employee</th>
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Score</th>
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Tasks</th>
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Focus Time</th>
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">False Prod.</th>
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Rating</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Sarah Chen", score: 91, tasks: 30, focus: "6.5h", falseProd: "5%", rating: "Excellent" },
                { name: "Emily Davis", score: 88, tasks: 27, focus: "6.0h", falseProd: "8%", rating: "Very Good" },
                { name: "John Doe", score: 82, tasks: 24, focus: "5.2h", falseProd: "12%", rating: "Good" },
                { name: "Mike Johnson", score: 75, tasks: 18, focus: "4.5h", falseProd: "18%", rating: "Average" },
                { name: "Alex Brown", score: 69, tasks: 15, focus: "3.8h", falseProd: "25%", rating: "Needs Improvement" },
              ].map((emp) => (
                <tr key={emp.name} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-3 text-sm font-medium text-foreground">{emp.name}</td>
                  <td className="px-5 py-3 text-sm font-semibold text-foreground">{emp.score}%</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground">{emp.tasks}</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground">{emp.focus}</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground">{emp.falseProd}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      emp.score >= 85 ? "bg-success/10 text-success" : emp.score >= 75 ? "bg-warning/10 text-warning" : "bg-destructive/10 text-destructive"
                    }`}>
                      {emp.rating}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default ReportsPage;
