export default function LoadingSkeleton({ amount = 8 }) {
  return (
    <div className="grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {Array.from({ length: amount }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(20,20,28,0.96),rgba(8,8,12,0.98))] shadow-[0_18px_55px_rgba(0,0,0,0.28)]"
        >
          <div className="aspect-[1.06/1] bg-white/10 sm:aspect-square" />
          <div className="space-y-4 p-4 sm:p-5">
            <div className="h-3 w-20 rounded bg-blood/25" />
            <div className="h-5 w-4/5 rounded bg-white/10" />
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-2/3 rounded bg-white/10" />
            <div className="h-px bg-white/10" />
            <div className="h-11 rounded-md bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  )
}
