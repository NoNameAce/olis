import Image from 'next/image'
import group104 from '@/app/img/Group 104.png';


export default function WorldMap() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">В КАКИХ СТРАНАХ МЫ РАБОТАЕМ</h2>
        <div className="relative aspect-[2/1] max-w-5xl mx-auto">
          <Image
            src={group104}
            alt="World Map showing OLIS presence"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

