import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";
const projects = [
  {
    id: 1,
    title: "Festify",
    description: "Secure Event Management",
    image: "/projects/project1.jpg",
    tags: ["React", "Tailwindcss"],
    live: "#",
    Github: "#",
  },
  {
    id: 1,
    title: "Festify",
    description: "Secure Event Management",
    image: "/projects/project2.jpg",
    tags: ["React", "Tailwindcss"],
    live: "#",
    Github: "#",
  },

  {
    id: 1,
    title: "Festify",
    description: "Secure Event Management",
    image: "/projects/project3.jpg",
    tags: ["React", "Tailwindcss"],
    live: "#",
    Github: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Featured <span className="text-primary">Projects</span>
      </h2>
      <div className="mt-2 conatainer mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transtion-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                    <a  href={project.live} className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink/></a>
                    <a href={project.Github} className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github/></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="">
            Check My Github <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
