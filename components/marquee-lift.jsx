export const Marquee = ({ children }) => {
  return (
    <div className="w-full overflow-hidden z-10">
      <div className="relative flex max-w-[90vw] overflow-hidden pb-20">
        <div className="flex w-max animate-marquee [--duration:18s]">
          {children}
          {children}
        </div>
      </div>
    </div>
  )
}