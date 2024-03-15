import { cn } from '../utils/ui';

export function Button({ children, onClick, className }) {
  return (
    <button
      className={cn(
        'px-2 py-1 bg-slate-800 text-slate-50 rounded-sm',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
