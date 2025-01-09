import Image from 'next/image'
import workerTechnologicalProcess from '@/app/img/bearded-worker-controlling-technological-process-GB3JE9D 1.png';


const news = [
  {
    date: '01.07.2023',
    title: 'Компания ОЛИС запустила в Турции новое производство',
    image: workerTechnologicalProcess
  },
  {
    date: '15.06.2023',
    title: 'Участие в международной выставке сельскохозяйственной техники',
    image: workerTechnologicalProcess
  },
  {
    date: '01.06.2023',
    title: 'Новая линия оборудования для переработки зерна',
    image: workerTechnologicalProcess
  }
]

export default function LatestNews() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">ПОСЛЕДНИЕ НОВОСТИ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <time className="text-sm text-gray-500">{item.date}</time>
                <h3 className="text-lg font-medium mt-2">{item.title}</h3>
                <a 
                  href="#" 
                  className="text-yellow-500 hover:text-yellow-600 mt-4 inline-block"
                >
                  Читать далее
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

