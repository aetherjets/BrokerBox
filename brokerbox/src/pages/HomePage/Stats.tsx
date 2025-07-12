export default function Stats() {
  const stats = [
    { number: "100+", label: "Alternative Lenders" },
    { number: "1 Year", label: "Successfully Operating" },
    { number: "Only", label: "Approved Platform" },
    { number: "£10M+", label: "Deals Processed" }
  ]

  return (
    <section className="bg-stone-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                {stat.number}
              </div>
              <div className="text-black/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
