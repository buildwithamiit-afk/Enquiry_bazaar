export function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.16),_transparent_38%)]" />
      <div className="absolute right-[-10%] top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(22,163,74,0.12),_transparent_68%)] blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(248,250,252,0)_0%,rgba(248,250,252,1)_100%)]" />
    </div>
  );
}
