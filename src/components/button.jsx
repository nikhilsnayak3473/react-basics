export function Button({ children, onClick }) {
  return (
    <button
      className='px-1 py-0.5 bg-slate-800 text-slate-50 text-[8px] rounded-sm'
      onClick={onClick}
    >
      {children}
    </button>
  );
}
