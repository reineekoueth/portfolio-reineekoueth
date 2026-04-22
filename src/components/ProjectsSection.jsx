import { useState } from "react";
import { Github, ArrowRight } from "lucide-react";

const projectCategories = ["tous", "Academique", "Personnel"];

const projects = [
  {
    id: 1,
    title: "CLUB DE SPORT",
    description: "Projet en cours de développement.",
    image: "",
    tags: [],
    category: "Academique",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Mwuna Vacances",
    description:
      "Mwuna Vacances est un site destiné aux adolescents pour présenter des activités et séjours adaptés.",
    image: "src/images/image.mwuna.jpg",
    tags: ["HTML/CSS", "JavaScript"],
    category: "Academique",
    demoUrl: "https://mwuna-vacances.netlify.app/",
  },
  {
    id: 3,
    title: "Jeu de Nombre",
    description:
      "Application interactive permettant de deviner un nombre aléatoire avec un système de tentatives.",
    image: "src/images/image.jeu.png",
    tags: ["Python", "HTML/CSS"],
    category: "Academique",
    demoUrl: "https://reineekoueth.github.io/number_g/",
    githubUrl: "https://github.com/reineekoueth/number_g",
  },
  {
    id: 4,
    title: "Mwuna Afrique",
    description: "Ce site a été créé pour préserver, partager et faire découvrir la richesse des contes africains racontés par nos grands-parents. En mémoire de Malacoco.",
    image: "src/images/image.afriweb.png",
    tags: ["JavaScript", "HTML/CSS"],
    category: "Personnel",
    demoUrl: "https://africanstory.vercel.app/",
    githubUrl: "",
  },
   {
    id: 4,
    title: "Memo Game ",
    description: "",
    image: "src/images/image.memogam.png",
    tags: ["JavaScript", "HTML/CSS"],
    category: "Personnel",
    demoUrl: "https://reineekoueth.github.io/memo-game/",
    githubUrl: "https://github.com/reineekoueth/memo-game",
  },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("tous");

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "tous" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Mes différents <span className="text-primary">Projets</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Au cours de mon BTS SIO, j’ai effectué plusieurs projets en développement
          et en gestion de solutions informatiques, me permettant de consolider mes
          compétences techniques, ma rigueur et ma capacité à travailler sur des
          projets concrets.
        </p>

        {/* Catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        Voir le projet
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton GitHub */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/reineekoueth"
          >
            Voir mon GitHub <ArrowRight size={16} />
          </a>
        </div>

        {/* Bouton Tableau de compétences */}
        <div className="text-center mt-6">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="doc/montableaudecompetence.pdf"
          >
            Tableau de compétences <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};