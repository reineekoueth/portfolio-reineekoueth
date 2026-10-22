import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Angular", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PHP-Laravel", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "JWT", category: "backend" },
  { name: "XAMPP", category: "backend" },

  // DevOps & Cloud
  { name: "Git/GitHub", category: "devops" },
  { name: "GitLab CI/CD", category: "devops" },
  { name: "Docker", category: "devops" },
  { name: "Azure", category: "devops" },
  { name: "Bash", category: "devops" },
  { name: "VirtualBox", category: "devops" },

  // Tools
  { name: "VS Code", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Canva", category: "tools" },
];

const categories = ["all", "frontend", "backend", "devops", "tools"];

const categoryLabels = {
  all: "Tout",
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps & Cloud",
  tools: "Outils",
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary">Compétences</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-card p-6 rounded-lg shadow-sm
                         hover:bg-pink-100
                         hover:shadow-lg
                         transition-all duration-300
                         cursor-pointer"
            >
              <h3
                className="font-semibold text-lg text-center
                           group-hover:text-pink-600
                           transition-colors duration-300"
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
