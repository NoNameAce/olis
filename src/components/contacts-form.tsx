'use client'

import { useState } from 'react'
import Image from 'next/image'
import olisLogo from '@/app/img/Слой 0 2.png';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="py-16 bg-[url('/images/wheat-bg.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-md mx-auto bg-white rounded-lg p-8">
          <div className="mb-6">
            <Image
              src={olisLogo}
              alt="OLIS Logo"
              width={150}
              height={50}
              className="mx-auto"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-center">
            ФОРМА ОБРАТНОЙ СВЯЗИ
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Заполните форму и мы свяжемся с вами
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Имя"
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg font-medium hover:bg-yellow-600 transition"
            >
              Оставить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

