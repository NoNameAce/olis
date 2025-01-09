import Image from 'next/image'
import logo32 from '@/app/img/logo 33.png';


const partners = [
  { name: 'Partner 1', logo: logo32 },
  { name: 'Partner 2', logo: logo32 },
  { name: 'Partner 3', logo: logo32 },
  { name: 'Partner 4', logo: logo32 },
  { name: 'Partner 5', logo: logo32 },
  { name: 'Partner 6', logo: logo32 }
]

export default function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">НАШИ ПАРТНЕРЫ</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="grayscale "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

