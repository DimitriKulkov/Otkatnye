import { fenceTypes, canopyTypes, gateTypes } from "@/data";
import { Tab, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const InstallationSteps = () => {
  const fenceSteps = [
    {
      number: 1,
      title: "Консультация и оценка",
      description: "Бесплатная консультация по телефону или на объекте. Обсуждение ваших потребностей, выбор типа забора, материалов и дизайна."
    },
    {
      number: 2,
      title: "Замер участка",
      description: "Выезд специалиста на объект для точных замеров периметра, оценки особенностей грунта и рельефа местности."
    },
    {
      number: 3,
      title: "Составление сметы",
      description: "Подготовка детальной сметы с указанием стоимости материалов, работ и сроков выполнения. Обсуждение и утверждение бюджета."
    },
    {
      number: 4,
      title: "Заключение договора",
      description: "Подписание договора с четким описанием работ, материалов, сроков и гарантийных обязательств."
    },
    {
      number: 5,
      title: "Подготовительные работы",
      description: "Разметка участка, расчистка территории и подготовка к установке опорных столбов."
    },
    {
      number: 6,
      title: "Установка опорных столбов",
      description: "Бурение ям, заливка бетонного фундамента и установка опорных столбов с соблюдением необходимых технологических требований."
    },
    {
      number: 7,
      title: "Монтаж заборных секций",
      description: "Установка и крепление заборных секций к опорным столбам согласно выбранной технологии и дизайну."
    },
    {
      number: 8,
      title: "Финальная отделка",
      description: "Установка декоративных элементов, покраска (при необходимости) и финальная отделка забора."
    },
    {
      number: 9,
      title: "Уборка территории",
      description: "Полная очистка территории от строительного мусора и материалов после завершения работ."
    },
    {
      number: 10,
      title: "Приемка работ и гарантия",
      description: "Проверка качества установки, подписание акта приема-передачи работ и предоставление гарантии на выполненные работы."
    }
  ];

  const canopySteps = [
    {
      number: 1,
      title: "Консультация и проектирование",
      description: "Бесплатная консультация, определение ваших потребностей и выбор типа навеса. Предварительная разработка дизайна и конструкции."
    },
    {
      number: 2,
      title: "Выезд на объект и замеры",
      description: "Профессиональный замер площади для установки навеса с учетом особенностей местности и требований к конструкции."
    },
    {
      number: 3,
      title: "Разработка проекта",
      description: "Создание детального проекта навеса с учетом нагрузок, материалов и дизайна. Согласование проекта с заказчиком."
    },
    {
      number: 4,
      title: "Расчет стоимости и заключение договора",
      description: "Составление детальной сметы и подписание договора с указанием сроков, материалов и гарантийных обязательств."
    },
    {
      number: 5,
      title: "Подготовка фундамента",
      description: "Разметка площадки, земляные работы и заливка фундамента для опорных конструкций навеса."
    },
    {
      number: 6,
      title: "Изготовление металлоконструкций",
      description: "Производство металлического каркаса навеса согласно проекту с применением антикоррозийной обработки."
    },
    {
      number: 7,
      title: "Монтаж опорных конструкций",
      description: "Установка и закрепление опорных стоек и балок навеса на подготовленный фундамент."
    },
    {
      number: 8,
      title: "Установка кровельного материала",
      description: "Монтаж выбранного кровельного материала (поликарбонат, профнастил, металлочерепица) на каркас навеса."
    },
    {
      number: 9,
      title: "Монтаж водостоков и дополнительных элементов",
      description: "Установка системы водоотведения и дополнительных элементов (освещение, желоба и т.д.)."
    },
    {
      number: 10,
      title: "Финальная проверка и сдача объекта",
      description: "Проверка качества установки, устранение недочетов, уборка территории и подписание акта выполненных работ."
    }
  ];

  const gateSteps = [
    {
      number: 1,
      title: "Консультация и подбор решения",
      description: "Определение типа ворот и калитки, их размеров, материалов, способа открывания и дополнительных функций."
    },
    {
      number: 2,
      title: "Выезд на объект",
      description: "Замеры проема для установки ворот и калитки, оценка особенностей местности и существующего ограждения."
    },
    {
      number: 3,
      title: "Разработка дизайна",
      description: "Создание эскиза ворот и калитки с учетом общего стиля забора и пожеланий заказчика."
    },
    {
      number: 4,
      title: "Составление сметы и заключение договора",
      description: "Расчет стоимости работ и материалов, подписание договора с указанием сроков и гарантий."
    },
    {
      number: 5,
      title: "Изготовление конструкций",
      description: "Производство металлического каркаса ворот и калитки по индивидуальному проекту."
    },
    {
      number: 6,
      title: "Подготовка основания",
      description: "Усиление опорных столбов или установка новых, подготовка фундамента под откатные или распашные ворота."
    },
    {
      number: 7,
      title: "Монтаж ворот и калитки",
      description: "Установка каркаса, навешивание створок, монтаж механизмов открывания и закрывания."
    },
    {
      number: 8,
      title: "Установка автоматики (опционально)",
      description: "Монтаж и настройка автоматических приводов, систем контроля доступа, видеодомофонов и других электронных компонентов."
    },
    {
      number: 9,
      title: "Финальная отделка",
      description: "Установка декоративных элементов, покраска, настройка и проверка работоспособности всех механизмов."
    },
    {
      number: 10,
      title: "Сдача работ и инструктаж",
      description: "Проверка качества установки, инструктаж по эксплуатации, предоставление гарантии на выполненные работы."
    }
  ];

  return (
    <section id="installation" className="py-16 bg-[#F9F7F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#556B2F] mb-4">Этапы выполнения работ</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Мы обеспечиваем прозрачный и структурированный подход к каждому проекту. Ознакомьтесь с основными этапами нашей работы для разных типов конструкций.
          </p>
        </div>

        <Tabs defaultValue="fence" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="fence" className="text-base md:text-lg">Заборы</TabsTrigger>
            <TabsTrigger value="canopy" className="text-base md:text-lg">Навесы</TabsTrigger>
            <TabsTrigger value="gate" className="text-base md:text-lg">Ворота и калитки</TabsTrigger>
          </TabsList>
          
          <TabsContent value="fence">
            <div className="grid gap-6 md:gap-8">
              {fenceSteps.map((step) => (
                <div key={step.number} className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-4 items-start transition-all hover:shadow-lg">
                  <div className="flex-shrink-0">
                    <div className="bg-[#556B2F] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#556B2F] mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="canopy">
            <div className="grid gap-6 md:gap-8">
              {canopySteps.map((step) => (
                <div key={step.number} className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-4 items-start transition-all hover:shadow-lg">
                  <div className="flex-shrink-0">
                    <div className="bg-[#556B2F] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#556B2F] mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="gate">
            <div className="grid gap-6 md:gap-8">
              {gateSteps.map((step) => (
                <div key={step.number} className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-4 items-start transition-all hover:shadow-lg">
                  <div className="flex-shrink-0">
                    <div className="bg-[#556B2F] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#556B2F] mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-[#556B2F] mb-6 text-center">Наши преимущества</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Check className="text-[#556B2F] h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Соблюдение сроков</h4>
                <p className="text-gray-700">Мы строго придерживаемся согласованных сроков выполнения каждого этапа работ.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Check className="text-[#556B2F] h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Прозрачное ценообразование</h4>
                <p className="text-gray-700">Стоимость работ фиксируется в договоре и не меняется в процессе.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Check className="text-[#556B2F] h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Профессиональные мастера</h4>
                <p className="text-gray-700">Все работы выполняются опытными специалистами с многолетним стажем.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Check className="text-[#556B2F] h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-2">Гарантия качества</h4>
                <p className="text-gray-700">Мы предоставляем гарантию на все виды работ и используемые материалы.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationSteps;