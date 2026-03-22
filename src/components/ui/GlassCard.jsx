import { clsx } from 'clsx';

export default function GlassCard({ children, className = '', hover = true, onClick }) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'glass',
        hover && 'glass-hover cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
