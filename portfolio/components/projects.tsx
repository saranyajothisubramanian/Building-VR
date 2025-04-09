import { Card } from "@/components/ui/card"

export function Projects() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#3A5199]">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <ProjectCard
          title="Hopeful Sign"
          description="Provides people in war zones to find nearby shelter, hospital and food"
          techStack={["CSS", "HTML", "React.js", "Node.js", "MongoDB"]}
          imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/login_bg_image-z9vBvilYnXsJLSdrJ2BD4qbSedISpE.jpeg"
        />
        <ProjectCard
          title="Headcount Management Tool"
          description="Helps Managers and Recruiters in Apple to recruit and manage the resources accordingly for each quarter"
          techStack={["Java 8", "REST API", "MongoDB", "SpringBoot"]}
          imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HCM.jpeg-2YS84tVQMNml6EV86U0MTUOXkGTOFD.png"
        />
        <ProjectCard
          title="Content Management System"
          description="Manages the content from multiple channels in ViacomCBS to store and retrieve"
          techStack={["Java 8", "REST API", "MongoDB", "SpringBoot"]}
          imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CMS.jpeg-1wExsedlkLCHBNeXhXEEEdyA1snVnt.webp"
        />
      </div>
    </section>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  imageUrl: string
}

function ProjectCard({ title, description, techStack, imageUrl }: ProjectCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover mb-6 rounded" />
      <h3 className="text-2xl font-semibold mb-3 text-[#3A5199]">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mt-4">
        <h4 className="font-medium text-sm text-gray-700 mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}
