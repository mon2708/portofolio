export default function GlassSurface({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        shadow-lg
        rounded-2xl
      "
    >
      {children}
    </div>
  )
}