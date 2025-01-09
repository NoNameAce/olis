import Image from 'next/image'
import image20 from '@/app/img/image 20.png';


export default function AboutUs() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">О НАС</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="mb-4">
              Лидер зерноперерабатывающего оборудования в Украине. Наша компания специализируется на производстве и комплексных поставках оборудования для переработки зерна, очистки зерна и производства круп.
            </p>
            <p>
              Сегодня мы обладаем собственным конструкторским отделом, производственными мощностями более чем 20 га и штатом квалифицированных специалистов. ООО «ОЛИС» выпускает более 200 наименований оборудования и располагает возможностями для реализации проектов любой сложности.
            </p>
            <button className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-full">
              Скачать каталог
            </button>
          </div>
          <div className="md:w-1/2">
            <Image src={image20} alt="About Us" width={500} height={300} className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

