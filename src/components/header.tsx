'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Search, Menu } from 'lucide-react'
import { useState } from 'react'

import img_0_9 from '@/app/img/0_9 1.png';
import workerTechnologicalProcess from '@/app/img/bearded-worker-controlling-technological-process-GB3JE9D 1.png';
import group100 from '@/app/img/Group 100.png';
import group101 from '@/app/img/Group 101.png';
import group104 from '@/app/img/Group 104.png';
import group134 from '@/app/img/Group 134.png';
import image20 from '@/app/img/image 20.png';
import logo31 from '@/app/img/logo 31.png';
import logo32 from '@/app/img/logo 32.png';
import logo33 from '@/app/img/logo 33.png';
import logo34 from '@/app/img/logo 34 (1).png';
import logo35 from '@/app/img/logo 35.png';
import maskGroup1 from '@/app/img/Mask Group (1).png';
import maskGroup2 from '@/app/img/Mask Group (2).png';
import maskGroup3 from '@/app/img/Mask Group (3).png';
import maskGroup4 from '@/app/img/Mask Group (4).png';
import maskGroup6 from '@/app/img/Mask Group (6).png';
import maskGroup7 from '@/app/img/Mask Group (7).png';
import maskGroup8 from '@/app/img/Mask Group (8).png';
import maskGroup9 from '@/app/img/Mask Group (9).png';
import maskGroup10 from '@/app/img/Mask Group (10).png';
import maskGroup11 from '@/app/img/Mask Group (11).png';
import maskGroup12 from '@/app/img/Mask Group (12).png';
import bcm1000 from '@/app/img/BCM-1000 1.png';
import hz1 from '@/app/img/НЗ 1.png';
import om1 from '@/app/img/ОМП-1 1.png';
import olisTextLogo from '@/app/img/Слой 0 1.png';
import olisLogo from '@/app/img/Слой 0 2.png';



export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="py-4 flex justify-between items-center">
          <Link href="/" className="z-10">
            <Image src={olisLogo} alt="OLIS Logo" width={120} height={40} />
          </Link>
          
          <button 
            className="lg:hidden z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          <nav className={`
            fixed lg:static inset-0 bg-white lg:bg-transparent
            ${isMobileMenuOpen ? 'flex' : 'hidden lg:flex'}
            flex-col lg:flex-row items-center justify-center
            space-y-4 lg:space-y-0 lg:space-x-6
          `}>
            <div className="relative group">
              <Link href="#" className="text-gray-600 hover:text-yellow-500 flex items-center">
                О компании <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="relative group">
              <Link href="#" className="text-gray-600 hover:text-yellow-500 flex items-center">
                Объекты <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="relative group">
              <Link href="#" className="text-gray-600 hover:text-yellow-500 flex items-center">
                Пресс-центр <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <Link href="#" className="text-gray-600 hover:text-yellow-500">
              Видео
            </Link>
            <div className="relative group">
              <Link href="#" className="text-gray-600 hover:text-yellow-500 flex items-center">
                Контакты <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-yellow-500">
              <Search className="w-5 h-5" />
            </button>
            <select className="bg-gray-100 rounded px-2 py-1 text-sm">
              <option>RU</option>
              <option>EN</option>
            </select>
            <a href="tel:+380672822688" className="text-yellow-500 font-bold text-sm whitespace-nowrap">
              +38 (067) 282-26-88
            </a>
          </div>
        </div>

        <nav className="hidden lg:flex py-2 space-x-6 border-t">
          <div className="relative group">
            <Link href="#" className="text-gray-600 hover:text-yellow-500 flex items-center">
              Комплексные решения <ChevronDown className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="relative group">
            <Link href="#" className="text-gray-600 hover:text-yellow-500 flex items-center">
              Наше оборудование <ChevronDown className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="relative group">
            <Link href="#" className="text-gray-600 hover:text-yellow-500 flex items-center">
              Оснащение лабораторий <ChevronDown className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="relative group">
            <Link href="#" className="text-gray-600 hover:text-yellow-500 flex items-center">
              Услуги компании <ChevronDown className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

