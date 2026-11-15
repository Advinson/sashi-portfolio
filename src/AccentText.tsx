export function AccentText({ children }: { children: string }) {
  return (
    <span className="accent-pill">
      {children}
      <span className="accent-lines" aria-hidden="true"><i /><i /><i /></span>
    </span>
  )
}
