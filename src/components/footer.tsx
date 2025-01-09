import Image from 'next/image'
import { Mail, Phone, Clock } from 'lucide-react'
import olisLogo from '@/app/img/Слой 0 2.png';

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Image
              src={olisLogo}
              alt="OLIS Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <div className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="E-mail"
                className="flex-1 px-4 py-2 border rounded"
              />
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                →
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Наша компания</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-yellow-500">О нас</a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-500">Новости</a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-500">Статьи</a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-500">Проекты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Пресс-центр</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-yellow-500">Новости</a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-500">Статьи</a></li>
              <li><a href="#" className="text-gray-600 hover:text-yellow-500">Видео</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <p>Звонок по СНГ</p>
                  <a href="tel:+380672822688" className="text-yellow-500 font-bold">
                    +38 (067) 282-26-88
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <a href="mailto:info@olis.com" className="text-gray-600 hover:text-yellow-500">
                    info@olis.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <p className="text-gray-600">Время работы:</p>
                  <p className="text-gray-600">8:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2023 ОЛИС. Все права защищены
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-yellow-500">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-500">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

