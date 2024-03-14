export function Button({ children, onClick, className }) {
  return (
    <button
      className={
        className
          ? `px-2 py-1 bg-slate-800 text-slate-50 rounded-sm ${className}`
          : 'px-2 py-1 bg-slate-800 text-slate-50 rounded-sm'
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
