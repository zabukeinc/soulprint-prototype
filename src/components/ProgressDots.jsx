export default function ProgressDots({ total, current }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="h-[7px] rounded-full transition-all duration-300"
          style={{
            width: i === current ? '22px' : '7px',
            background: i === current 
              ? '#9D7BEA' 
              : 'rgba(31,33,48,0.16)'
          }}
        />
      ))}
    </div>
  );
}