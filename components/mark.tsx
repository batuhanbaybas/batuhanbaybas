export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
      fill="none"
    >
      <path
        d="M16 4.5 26.5 11v10L16 27.5 5.5 21V11L16 4.5Z"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path
        d="M16 12.5 21 15.4v5.8L16 24.1l-5-2.9v-5.8L16 12.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  );
}
