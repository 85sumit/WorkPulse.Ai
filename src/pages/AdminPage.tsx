import { useState } from "react";
import { Plus, Trash2, Edit, Shield } from "lucide-react";
import { motion } from "framer-motion";

const initialUsers = [
  { id: 1, name: "John Doe", email: "john@company.com", role: "employee", status: "active" },
  { id: 2, name: "Sarah Chen", email: "sarah@company.com", role: "manager", status: "active" },
  { id: 3, name: "Mike Johnson", email: "mike@company.com", role: "employee", status: "active" },
  { id: 4, name: "Emily Davis", email: "emily@company.com", role: "employee", status: "inactive" },
  { id: 5, name: "Alex Brown", email: "alex@company.com", role: "employee", status: "active" },
];

const AdminPage = () => {
  const [users] = useState(initialUsers);
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-6 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h3 className="text-base font-semibold text-foreground">User Management</h3>
          <p className="text-xs text-muted-foreground">{users.length} total users</p>
        </div>
        <button
          onClick={() => setShowAddModal(!showAddModal)}
          className="h-10 px-5 rounded-lg gradient-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-md"
        >
          <Plus className="w-4 h-4" /> Add User
        </button>
      </motion.div>

      {showAddModal && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl p-5 card-shadow border border-border"
        >
          <h4 className="text-sm font-semibold text-card-foreground mb-4">Add New User</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input placeholder="Full Name" className="h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20" />
            <input placeholder="Email" className="h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20" />
            <select className="h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20">
              <option>Employee</option>
              <option>Manager</option>
              <option>Admin</option>
            </select>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="h-9 px-4 rounded-lg gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">Save</button>
            <button onClick={() => setShowAddModal(false)} className="h-9 px-4 rounded-lg border border-input text-sm text-foreground hover:bg-secondary transition-colors">Cancel</button>
          </div>
        </motion.div>
      )}

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
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">User</th>
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Email</th>
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Role</th>
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full gradient-primary flex items-center justify-center text-[10px] text-primary-foreground font-semibold">
                        {u.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-foreground">{u.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-muted-foreground">{u.email}</td>
                  <td className="px-5 py-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary capitalize flex items-center gap-1 w-fit">
                      <Shield className="w-3 h-3" /> {u.role}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${u.status === "active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex gap-1">
                      <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground">
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-destructive/10 transition-colors text-destructive">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card rounded-xl p-5 card-shadow border border-border"
      >
        <h3 className="text-sm font-semibold text-card-foreground mb-4">System Configuration</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "False Productivity Threshold", value: "15%" },
            { label: "Session Timeout (min)", value: "30" },
            { label: "AI Analysis Frequency", value: "Hourly" },
            { label: "Data Retention (days)", value: "90" },
          ].map((setting) => (
            <div key={setting.label} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <span className="text-sm text-foreground">{setting.label}</span>
              <span className="text-sm font-medium text-primary">{setting.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AdminPage;
