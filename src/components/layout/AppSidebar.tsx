import { LayoutDashboard, Activity, FileBarChart, Shield, User, LogOut, Brain } from "lucide-react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard, roles: ["admin", "manager", "employee"] },
  { label: "Activity", path: "/activity", icon: Activity, roles: ["admin", "manager", "employee"] },
  { label: "Reports", path: "/reports", icon: FileBarChart, roles: ["admin", "manager", "employee"] },
  { label: "Admin", path: "/admin", icon: Shield, roles: ["admin"] },
  { label: "Profile", path: "/profile", icon: User, roles: ["admin", "manager", "employee"] },
];

const AppSidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const filteredItems = navItems.filter((item) => user && item.roles.includes(user.role));

  return (
    <aside className="w-64 min-h-screen bg-sidebar flex flex-col border-r border-sidebar-border shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
          <Brain className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-sm font-bold text-sidebar-primary-foreground tracking-tight">WorkPulse AI</h1>
          <p className="text-[10px] text-sidebar-foreground/60 uppercase tracking-widest">Efficiency System</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {filteredItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <RouterNavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </RouterNavLink>
          );
        })}
      </nav>

      <div className="p-3 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-3 py-2 mb-2">
          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-xs font-semibold text-primary-foreground">
            {user?.name?.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-sidebar-primary-foreground truncate">{user?.name}</p>
            <p className="text-[10px] text-sidebar-foreground/60 capitalize">{user?.role}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent w-full transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
