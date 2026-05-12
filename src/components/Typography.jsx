import { motion } from 'framer-motion';

export function Eyebrow({ children, className = '' }) {
  return (
    <p 
      className={`text-[11px] tracking-[0.14em] text-[#8B72CF] uppercase font-extrabold mb-3 ${className}`}
      style={{ fontWeight: 800 }}
    >
      {children}
    </p>
  );
}

export function Heading({ children, className = '' }) {
  return (
    <h1 
      className={`font-serif font-medium tracking-[-0.045em] text-ink leading-[1.02] ${className}`}
      style={{ fontSize: '34px' }}
    >
      {children}
    </h1>
  );
}

export function H3({ children, className = '' }) {
  return (
    <h3 
      className={`font-serif font-medium tracking-[-0.045em] text-ink leading-[1.12] ${className}`}
      style={{ fontSize: '24px' }}
    >
      {children}
    </h3>
  );
}

export function Body({ children, className = '' }) {
  return (
    <p className={`text-sm leading-[1.55] text-muted-text ${className}`}>
      {children}
    </p>
  );
}

export function SmallText({ children, className = '' }) {
  return (
    <p className={`text-[12px] leading-[1.45] text-soft-muted ${className}`}>
      {children}
    </p>
  );
}

export function SerifText({ children, className = '' }) {
  return (
    <span className={`font-serif text-ink ${className}`}>
      {children}
    </span>
  );
}