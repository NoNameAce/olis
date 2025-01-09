import Image from 'next/image'
import group100 from '@/app/img/Group 100.png';


const solutions = [
  {
    title: 'Зерноочистительные комплексы',
    image: group100
  },
  {
    title: 'Крупозаводы',
    image: group100
  },
  {
    title: 'Мельницы',
    image: group100
  },
  {
    title: 'Комплексы очистки подсолнечника',
    image: group100
  },
  {
    title: 'Производство комбикормов',
    image: group100
  },
  {
    title: 'Производство семян масличных',
    image: group100
  }
]

export default function ComplexSolutions() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">КОМПЛЕКСНЫЕ РЕШЕНИЯ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className=" "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-medium">{solution.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

