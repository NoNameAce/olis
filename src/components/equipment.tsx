import Image from 'next/image'
import img_0_9 from '@/app/img/0_9 1.png';
import om1 from '@/app/img/ОМП-1 1.png';
import hz1 from '@/app/img/НЗ 1.png';



const equipment = [
  {
    title: 'Зерноочистительное оборудование',
    image: img_0_9,
  },
  {
    title: 'Оборудование для производства круп',
    image: om1
  },
  {
    title: 'Лабораторное оборудование',
    image: img_0_9
  },
  {
    title: 'Оборудование для производства муки',
    image: om1
  },
  {
    title: 'Транспортное и аспирационное оборудование',
    image: hz1
  },
  {
    title: 'Силосное оборудование',
    image: hz1
  }
]

export default function Equipment() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">НАШЕ ОБОРУДОВАНИЕ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, index) => (
            <div 
              key={index}
              className="bg-black/10 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

