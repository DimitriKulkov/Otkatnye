// Import attached assets for fences
import rabitsaFence from "@assets/рабица 1.png";
import profFence from "@assets/Как сделать забор из профнастила_ пошаговая инструкция 1.png";
import euroFence from "@assets/загрузка 1.png";
import fence3D from "@assets/3d 1.png";
import sectionFence from "@assets/секционный забор 1.png";
import polycarbonateFence from "@assets/поликарбонат 1.png";

// Import attached assets for canopies
import metalTileCanopy from "@assets/металл 1.png";
import softRoofCanopy from "@assets/мя 1.png";
import polycarbonateCanopy from "@assets/мягкая 1.png";

// Import attached assets for gates
import slidingGate from "@assets/откатные 1.png";
import swingGate from "@assets/Welding Fabs 1.png";
import wicket from "@assets/калитка 1.png";
import gateAutomation from "@assets/DACE Ultima gate automation 1.png";

// Import attached assets for reviews
import reviewPhoto1 from "@assets/photo_2025-04-03_14-35-55.jpg";
import reviewPhoto2 from "@assets/photo_2025-04-03_14-37-06.jpg";
import reviewPhoto3 from "@assets/photo_2025-04-03_14-36-45.jpg";

// Data for Services Section
export const fenceTypes = [
  {
    title: "Сетка-рабица",
    description: "Экономичный вариант с быстрой установкой. Идеально подходит для дачных участков.",
    price: "от 900 руб/пог.м",
    image: rabitsaFence
  },
  {
    title: "Профнастил",
    description: "Долговечный забор с защитой от ветра. Широкий выбор цветов и фактур.",
    price: "от 2 000 руб/пог.м",
    image: profFence
  },
  {
    title: "Евроштакетник",
    description: "Эстетичный забор с антикоррозийным покрытием. Стильный и современный вид.",
    price: "от 2 500 руб/пог.м",
    image: euroFence
  },
  {
    title: "3D сетка",
    description: "Современный дизайн с высокой прочностью. Отличная видимость и безопасность.",
    price: "от 1 900 руб/пог.м",
    image: fence3D
  },
  {
    title: "Секционный забор",
    description: "Модульная конструкция с простой установкой. Высокая надежность и долговечность.",
    price: "от 3 500 руб/пог.м",
    image: sectionFence
  },
  {
    title: "Поликарбонатный забор",
    description: "Светопропускающий материал с УФ-защитой. Современный и стильный внешний вид.",
    price: "от 2 300 руб/пог.м",
    image: polycarbonateFence
  }
];

export const canopyTypes = [
  {
    title: "Навес из металлочерепицы",
    description: "Надежность и стильный внешний вид. Идеально сочетается с кровлей дома.",
    price: "от 6 500 руб/м²",
    image: metalTileCanopy
  },
  {
    title: "Навес из мягкой кровли",
    description: "Гибкость конструкции и шумопоглощение. Разнообразие форм и цветовых решений.",
    price: "от 6 500 руб/м²",
    image: softRoofCanopy
  },
  {
    title: "Навес из поликарбоната",
    description: "Легкий вес и устойчивость к погодным условиям. Пропускает естественный свет.",
    price: "от 6 500 руб/м²",
    image: polycarbonateCanopy
  }
];

export const gateTypes = [
  {
    title: "Откатные ворота",
    description: "Экономия пространства и совместимость с автоматикой.",
    price: "от 70 000 руб",
    image: slidingGate
  },
  {
    title: "Распашные ворота",
    description: "Классический дизайн и простота использования.",
    price: "от 20 000 руб",
    image: swingGate
  },
  {
    title: "Калитки",
    description: "Индивидуальный дизайн под стиль забора. Надежность и долговечность.",
    price: "от 8 000 руб",
    image: wicket
  },
  {
    title: "Автоматика для ворот",
    description: "Дистанционное управление и повышенная безопасность.",
    price: "от 35 000 руб",
    image: gateAutomation
  }
];

// Data for Pricing Section
export const priceList = [
  { service: "Сетка-рабица", price: "от 900 руб/пог.м" },
  { service: "Профнастил", price: "от 2 000 руб/пог.м" },
  { service: "Евроштакетник", price: "от 2 500 руб/пог.м" },
  { service: "3D сетка", price: "от 1 900 руб/пог.м" },
  { service: "Навесы", price: "от 6 500 руб/м²" },
  { service: "Откатные ворота", price: "от 70 000 руб" },
  { service: "Распашные ворота", price: "от 20 000 руб" },
  { service: "Калитки", price: "от 8 000 руб" },
  { service: "Автоматика", price: "от 35 000 руб" },
  { service: "Секционный забор", price: "от 3 500 руб/пог.м" },
  { service: "Поликарбонатный забор", price: "от 2 300 руб/пог.м" }
];

// Data for Reviews Section
export const reviews = [
  {
    rating: 5.0,
    image: reviewPhoto1,
    text: "\"Отличная работа! Установили забор из профнастила за 2 дня. Качество на высоте, цена соответствует заявленной. Рекомендую!\"",
    author: "Андрей В.",
    location: "г. Клин",
  },
  {
    rating: 5.0,
    image: reviewPhoto2,
    text: "\"Заказывали навес из поликарбоната для автомобиля. Работу выполнили в срок, материалы качественные. Навес получился красивым и функциональным.\"",
    author: "Елена М.",
    location: "г. Люберцы",
  },
  {
    rating: 4.8,
    image: reviewPhoto3,
    text: "\"Установили распашные ворота. Процесс занял чуть больше времени, чем планировали, но результат превзошел ожидания. Ворота работают безупречно.\"",
    author: "Михаил С.",
    location: "г. Чехов",
  }
];

// Data for FAQ Section
export const faqItems = [
  {
    question: "Сколько времени занимает установка?",
    answer: "Время установки зависит от типа ограждения и объема работ. В среднем, установка забора длиной 100 метров занимает 2-3 дня, навеса — 1-2 дня, ворот — 1 день. При заказе мы сообщим точные сроки выполнения вашего проекта."
  },
  {
    question: "Какие гарантии вы предоставляете?",
    answer: "Мы предоставляем гарантию 1 год на все выполненные работы и до 10 лет на используемые материалы (в зависимости от производителя). Гарантия распространяется на целостность конструкции, качество монтажа и сохранение внешнего вида при нормальной эксплуатации."
  },
  {
    question: "Как оформить заказ?",
    answer: "Заказ можно оформить несколькими способами: позвонить по указанным на сайте телефонам, заполнить форму заявки или отправить запрос на электронную почту. После этого наш менеджер свяжется с вами для уточнения деталей и согласования даты бесплатного выезда специалиста на замер."
  },
  {
    question: "Какие формы оплаты вы принимаете?",
    answer: "Мы принимаем наличный и безналичный расчет. Работаем как с физическими, так и с юридическими лицами. Оплата производится в два этапа: предоплата 50% при заключении договора и окончательный расчет по завершении работ."
  },
  {
    question: "Работаете ли вы в области?",
    answer: "Да, мы выполняем заказы не только в Москве, но и по всей Московской области. Выезд на замер в пределах 50 км от МКАД — бесплатно. При заказах в более отдаленные районы стоимость выезда рассчитывается индивидуально."
  }
];