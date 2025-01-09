import Image from 'next/image'
import maskGroup7 from '@/app/img/Mask Group (7).png';


const services = [
  { title: 'Монтаж', image: maskGroup7 },
  { title: 'Сервис', image: maskGroup7 },
  { title: 'Гарантийное обслуживание', image: maskGroup7 },
  { title: 'Инжиниринг', image: maskGroup7 },
  { title: 'Реконструкция', image: maskGroup7 },
  { title: 'Автоматизация', image: maskGroup7 }
]

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">УСЛУГИ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative h-48 rounded-lg overflow-hidden group">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-white text-xl font-medium text-center px-4">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

