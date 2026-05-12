export default function Badge({ children, color = 'lavender' }) {
  const colors = {
    sage: 'bg-sage text-ink',
    lavender: 'bg-lavender text-ink',
    peach: 'bg-peach text-ink',
    rose: 'bg-rose text-ink',
    mint: 'bg-mint text-ink',
    'sun-yellow': 'bg-sun-yellow text-ink',
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colors[color]}`}>
      {children}
    </span>
  );
}