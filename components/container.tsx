export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`container mx-auto px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
