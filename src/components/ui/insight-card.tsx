import { AlertTriangle, CheckCircle, Info, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  type: "success" | "warning" | "info";
  message: string;
}

const icons = {
  success: CheckCircle,
  warning: AlertTriangle,
  info: Info,
};

const InsightCard = ({ type, message }: InsightCardProps) => {
  const Icon = icons[type];
  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 rounded-lg border",
        type === "success" && "bg-success/5 border-success/20",
        type === "warning" && "bg-warning/5 border-warning/20",
        type === "info" && "bg-primary/5 border-primary/20"
      )}
    >
      <Icon
        className={cn(
          "w-4 h-4 mt-0.5 shrink-0",
          type === "success" && "text-success",
          type === "warning" && "text-warning",
          type === "info" && "text-primary"
        )}
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-card-foreground">{message}</p>
      </div>
      <Brain className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
    </div>
  );
};

export default InsightCard;
