import { Home, Users, Plus, User, Info } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/workers", icon: Users, label: "Workers" },
    { path: "/post-job", icon: Plus, label: "Post Job" },
    { path: "/profile", icon: User, label: "Profile" },
    { path: "/about", icon: Info, label: "About" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-card">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map(({ path, icon: Icon, label }) => (
          <NavLink
            key={path}
            to={path}
            end
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center flex-1 py-2 px-1 rounded-lg transition-all duration-200",
                isActive
                  ? "text-primary bg-agricultural-light/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )
            }
          >
            <Icon className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;