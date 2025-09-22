import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string;
    type: "increase" | "decrease" | "neutral";
  };
  icon: LucideIcon;
  gradient?: "primary" | "secondary" | "accent";
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  gradient = "primary",
  className,
}: MetricCardProps) {
  const gradientClasses = {
    primary: "bg-gradient-primary",
    secondary: "bg-gradient-secondary", 
    accent: "bg-gradient-accent",
  };

  const changeColors = {
    increase: "text-success",
    decrease: "text-destructive",
    neutral: "text-muted-foreground",
  };

  return (
    <div className={cn("metric-card animate-fade-in", className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {title}
          </p>
          <p className="text-2xl font-bold text-foreground mb-2">
            {value}
          </p>
          {change && (
            <p className={cn("text-sm font-medium", changeColors[change.type])}>
              {change.type === "increase" ? "↗" : change.type === "decrease" ? "↘" : "→"} {change.value}
            </p>
          )}
        </div>
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", gradientClasses[gradient])}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}