import { SearchX } from "lucide-react";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center py-16 px-6 ${className}`}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-[var(--radius-full)] bg-surface-alt mb-4">
        {icon ?? <SearchX className="w-5 h-5 text-text-tertiary" />}
      </div>
      <p className="heading-4 text-text-primary mb-2">{title}</p>
      {description && (
        <p className="body-sm text-text-secondary max-w-sm mb-6">
          {description}
        </p>
      )}
      {action}
    </div>
  );
}
