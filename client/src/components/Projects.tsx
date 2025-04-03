import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Import project images
import corrugatedFenceImg from "@assets/photo_2025-04-03_14-35-55.jpg";
import euroWalletFenceImg from "@assets/photo_2025-04-03_14-36-06.jpg";
import fence3dSectionsImg from "@assets/photo_2025-04-03_14-36-15.jpg";
import sectionalFenceImg from "@assets/photo_2025-04-03_14-36-34.jpg";
import polycarbonateCanopyImg from "@assets/photo_2025-04-03_15-05-02.jpg";
import slidingGateImg from "@assets/photo_2025-04-03_15-06-09.jpg";
import swingGateImg from "@assets/photo_2025-04-03_14-36-45.jpg";
import decorativeGateImg from "@assets/photo_2025-04-03_15-05-51.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  type: string;
  imageUrl: string;
  tags: string[];
}

const projectsData: Project[] = [
  // Заборы
  {
    id: 1,
    title: "Забор из профнастила",
    description: "Установка забора из профнастила на металлическом каркасе.",
    location: "г. Клин",
    type: "fence",
    imageUrl: corrugatedFenceImg,
    tags: ["Профнастил", "Металлический каркас", "Двухсторонний"]
  },
  {
    id: 2,
    title: "Забор из евроштакетника",
    description: "Установка забора из евроштакетника на металлическом каркасе.",
    location: "д. Бельяниново",
    type: "fence",
    imageUrl: euroWalletFenceImg,
    tags: ["Евроштакетник", "Шахматная установка", "Забор с фундаментом"]
  },
  {
    id: 3,
    title: "Забор из 3D секций ",
    description: "Установка 3D забора из сварной сетки с полимерным покрытием.",
    location: "г. Броницы",
    type: "fence",
    imageUrl: fence3dSectionsImg,
    tags: ["3D сетка", "Полимерное покрытие", "Современный дизайн"]
  },
  {
    id: 4,
    title: "Секционный забор",
    description: "Монтаж секционного забора в городской стилистике.",
    location: "Метро Белорусская",
    type: "fence",
    imageUrl: sectionalFenceImg,
    tags: ["Секционный", "Металлический", "Современный дизайн"]
  },
  
  // Навесы
  {
    id: 5,
    title: "Навес из поликарбоната",
    description: "Установка навеса из поликарбоната для автомобиля с каркасом из металла.",
    location: "г. Люберцы",
    type: "canopy",
    imageUrl: polycarbonateCanopyImg,
    tags: ["Поликарбонат", "Навес для автомобиля", "Арочная конструкция"]
  },
  
  // Ворота
  {
    id: 6,
    title: "Откатные ворота с автоматикой",
    description: "Установка откатных ворот с автоматическим приводом и дистанционным управлением.",
    location: "г. Королев",
    type: "gate",
    imageUrl: slidingGateImg,
    tags: ["Откатные", "Автоматика", "Дистанционное управление"]
  },
  {
    id: 7,
    title: "Распашные ворота",
    description: "Изготовление и установка распашных ворот с калиткой для загородного участка.",
    location: "г. Чехов",
    type: "gate",
    imageUrl: swingGateImg,
    tags: ["Распашные", "С калиткой", "Для частного дома"]
  },
  {
    id: 8,
    title: "Декоративные кованые ворота",
    description: "Разработка и установка кованых ворот с элементами художественной ковки.",
    location: "г. Истра",
    type: "gate",
    imageUrl: decorativeGateImg,
    tags: ["Кованые", "Художественная ковка", "Премиум-класс"]
  }
];

const Projects = () => {
  const [selectedType, setSelectedType] = useState<string>("all");
  
  const filteredProjects = selectedType === "all" 
    ? projectsData 
    : projectsData.filter(project => project.type === selectedType);
  
  return (
    <section id="projects" className="py-20 bg-[#F8F7F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#3C4D34] mb-4">Наши проекты</h2>
          <div className="h-1 w-20 bg-[#A1B189] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Примеры выполненных нами работ по установке заборов, навесов и ворот в Москве и Московской области</p>
        </div>
        
        <Tabs defaultValue="all" className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-[#E8EDE2] p-1 rounded-lg">
              <TabsTrigger 
                value="all" 
                className="py-2 px-6 text-base rounded-md data-[state=active]:bg-[#3C4D34] data-[state=active]:text-white"
                onClick={() => setSelectedType("all")}
              >
                Все проекты
              </TabsTrigger>
              <TabsTrigger 
                value="fence" 
                className="py-2 px-6 text-base rounded-md data-[state=active]:bg-[#3C4D34] data-[state=active]:text-white"
                onClick={() => setSelectedType("fence")}
              >
                Заборы
              </TabsTrigger>
              <TabsTrigger 
                value="canopy" 
                className="py-2 px-6 text-base rounded-md data-[state=active]:bg-[#3C4D34] data-[state=active]:text-white"
                onClick={() => setSelectedType("canopy")}
              >
                Навесы
              </TabsTrigger>
              <TabsTrigger 
                value="gate" 
                className="py-2 px-6 text-base rounded-md data-[state=active]:bg-[#3C4D34] data-[state=active]:text-white"
                onClick={() => setSelectedType("gate")}
              >
                Ворота
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="fence" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="canopy" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="gate" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-[#3C4D34] hover:bg-[#3C4D34]/90">
            {project.type === "fence" ? "Забор" : project.type === "canopy" ? "Навес" : "Ворота"}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#3C4D34] mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {project.location}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-[#E8EDE2] text-[#3C4D34] text-xs py-1 px-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;