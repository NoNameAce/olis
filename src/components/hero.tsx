import Image from 'next/image'
import { Facebook, Linkedin, Youtube } from 'lucide-react'
import maskGroup1 from '@/app/img/Mask Group (1).png';


export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <div className=" flex absolute inset-0">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-500 mb-6">
            ТЕХНОЛОГИИ<br />И ОБОРУДОВАНИЕ
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            для очистки, переработки и контроля качества зерна
          </p>
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-yellow-600 transition w-fit">
            Оставить заявку
          </button>
        </div>
        <Image
          src="/olis-logo-dark.svg"
          alt="OLIS"
          width={200}
          height={80}
          className="mx-auto"
        />
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <div className="bg-white/90 p-3 rounded-r-lg flex flex-col gap-4">

          <a href="#" className="text-gray-600 hover:text-yellow-500 transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-yellow-500 transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-yellow-500 transition">
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

