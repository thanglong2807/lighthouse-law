interface LoadingStateProps {
  text?: string;
  className?: string;
}

export function LoadingState({ text, className = "" }: LoadingStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-16 ${className}`}
      role="status"
    >
      <div className="w-8 h-8 border-2 border-gold/20 border-t-gold rounded-[var(--radius-full)] animate-spin mb-4" />
      {text && (
        <p className="body-sm text-text-secondary">{text}</p>
      )}
      <span className="sr-only">Loading</span>
    </div>
  );
}
