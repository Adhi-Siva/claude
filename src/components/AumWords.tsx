const G = ({ children }: { children: string }) => (
  <span className="text-gradient-gold font-bold">{children}</span>
);

/** "A Unite for Multiple Solutions" with A, U, M highlighted in gold. */
export function AumTagline({ className }: { className?: string }) {
  return (
    <span className={className}>
      <G>A</G>
      {" "}
      <G>U</G>nite for <G>M</G>ultiple Solutions
    </span>
  );
}

/** "Achieve Ur Mission with AUM IT" with A, U, M highlighted in gold. */
export function AumMission({ className }: { className?: string }) {
  return (
    <span className={className}>
      <G>A</G>chieve <G>U</G>r <G>M</G>ission with AUM IT
    </span>
  );
}
