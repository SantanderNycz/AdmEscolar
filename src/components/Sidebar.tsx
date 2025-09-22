import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Users,
  UserCheck,
  BookOpen,
  Calendar,
  BarChart3,
  Settings,
  Home,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Alunos", url: "/students", icon: Users },
  { title: "Professores", url: "/teachers", icon: UserCheck },
  { title: "Turmas", url: "/classes", icon: BookOpen },
  { title: "Notas", url: "/grades", icon: GraduationCap },
  { title: "Calendário", url: "/calendar", icon: Calendar },
  { title: "Relatórios", url: "/reports", icon: BarChart3 },
  { title: "Configurações", url: "/settings", icon: Settings },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-sidebar-foreground">
              EduAdmin
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1">
        {navigationItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className={cn(
              "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
              isActive(item.url)
                ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-soft"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <item.icon
              className={cn(
                "w-5 h-5 transition-colors",
                isActive(item.url)
                  ? "text-sidebar-primary-foreground"
                  : "text-sidebar-foreground group-hover:text-sidebar-accent-foreground"
              )}
            />
            {!collapsed && (
              <span className="font-medium">{item.title}</span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User info at bottom */}
      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-sidebar-accent rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-white">AD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">
                  Administrador
                </p>
                <p className="text-xs text-sidebar-foreground/60 truncate">
                  admin@escola.com
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}