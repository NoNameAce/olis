const advantages = [
    { label: 'Стран, в которых работает наше оборудование', value: 30 },
    { label: 'Лет опыта разработки и внедрения', value: 16 },
    { label: 'Наименований выпускаемого оборудования', value: 200 },
    { label: 'Реализованных проектов в год', value: 3000 },
  ]
  
  export default function Advantages() {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">ПРЕИМУЩЕСТВА</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#FFC107"
                      strokeWidth="2"
                      strokeDasharray={`${advantage.value}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">{advantage.value}</span>
                  </div>
                </div>
                <p className="text-sm">{advantage.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  