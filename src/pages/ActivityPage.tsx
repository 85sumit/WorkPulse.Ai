import { useState } from "react";
import { Search, Filter, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const activityLogs = [
  { id: 1, user: "John Doe", task: "Code Review", app: "VS Code", duration: "45m", status: "productive", time: "9:00 AM" },
  { id: 2, user: "John Doe", task: "Email Check", app: "Gmail", duration: "22m", status: "neutral", time: "9:45 AM" },
  { id: 3, user: "Sarah Chen", task: "Social Media", app: "Twitter", duration: "35m", status: "unproductive", time: "10:07 AM" },
  { id: 4, user: "Mike Johnson", task: "Sprint Planning", app: "Jira", duration: "1h 10m", status: "productive", time: "10:30 AM" },
  { id: 5, user: "Sarah Chen", task: "Design Work", app: "Figma", duration: "2h 15m", status: "productive", time: "11:00 AM" },
  { id: 6, user: "John Doe", task: "YouTube", app: "Chrome", duration: "28m", status: "unproductive", time: "12:00 PM" },
  { id: 7, user: "Mike Johnson", task: "Documentation", app: "Notion", duration: "55m", status: "productive", time: "1:00 PM" },
  { id: 8, user: "Sarah Chen", task: "Client Call", app: "Zoom", duration: "40m", status: "productive", time: "2:00 PM" },
  { id: 9, user: "John Doe", task: "Bug Fixing", app: "VS Code", duration: "1h 30m", status: "productive", time: "2:40 PM" },
  { id: 10, user: "Mike Johnson", task: "Idle", app: "—", duration: "15m", status: "unproductive", time: "4:10 PM" },
];

const statusColors: Record<string, string> = {
  productive: "bg-success/10 text-success",
  neutral: "bg-warning/10 text-warning",
  unproductive: "bg-destructive/10 text-destructive",
};

const ActivityPage = () => {
  const [filter, setFilter] = useState("");

  const filtered = activityLogs.filter(
    (log) =>
      log.user.toLowerCase().includes(filter.toLowerCase()) ||
      log.task.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            placeholder="Search by user or task..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full h-10 rounded-lg border border-input bg-card pl-10 pr-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20"
          />
        </div>
        <button className="h-10 px-4 rounded-lg border border-input bg-card text-sm text-foreground flex items-center gap-2 hover:bg-secondary transition-colors">
          <Filter className="w-4 h-4" /> Filter
        </button>
        <button className="h-10 px-4 rounded-lg border border-input bg-card text-sm text-foreground flex items-center gap-2 hover:bg-secondary transition-colors">
          <Calendar className="w-4 h-4" /> Date Range
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-xl card-shadow border border-border overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Time</th>
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">User</th>
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Task</th>
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Application</th>
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Duration</th>
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((log) => (
                <tr key={log.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-3 text-sm text-muted-foreground">{log.time}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-[10px] text-primary-foreground font-semibold">
                        {log.user.charAt(0)}
                      </div>
                      <span className="text-sm text-foreground font-medium">{log.user}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-foreground">{log.task}</td>
                  <td className="px-5 py-3 text-sm text-muted-foreground">{log.app}</td>
                  <td className="px-5 py-3 text-sm text-foreground font-medium">{log.duration}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${statusColors[log.status]}`}>
                      {log.status}
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

export default ActivityPage;
