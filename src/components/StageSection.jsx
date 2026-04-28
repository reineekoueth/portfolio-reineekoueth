import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

// Deux catégories seulement
const stageCategories = ["rapport", "attestation"];

const Stage = [
     {
    id: 1,
    title: "Rapport Stage CGI",
    description: "Mission principale : Mise en place et configuration d’environnements de conteneurisation et de déploiement applicatif",
    image: "",
    category: "rapport",
    date: "12 Mai 2025 - 04 Juillet 2025",
    demoUrl: "/doc/Rapport de stage CGI.pdf",
  },
  {
    id: 2,
    title: "Attestation Stage CGI ",
    image: "/images/image.attestationcgi.png",
    category:"attestation",
    date: "04 JUILLET 2025 ",
    demoUrl: "/doc/attestation-stage-CGI.pdf",
  },
  {
    id: 3,
    title: "Rapport Stage MASEKA",
    description: "Mission Principale : Création et mise en ligne d’un site internet pour l’association Maseka afin d’améliorer sa visibilité en ligne et d’optimiser sa communication auprès de son public et de ses partenaires.",
    image: "",
    category: "rapport",
    date: "01 Decembre 2025 - 23 janvier 2026 ",
    demoUrl: "/doc/Attestation-Stage-maseka.pdf",
  },
  {
    id: 4,
    title: "Attestation Stage MASEKA ",
    image: "/images/image.attestationmaseka.png",
    category: "attestation",
    date: "23 JANVIER 2026 ",
    demoUrl: "/doc/Attestation-Stage-maseka.pdf",
  },

];

export const StageSection = () => {
  const [activeCategory, setActiveCategory] = useState("attestation");

  const filteredStage = Stage.filter(
    (stage) => stage.category === activeCategory
  );

  return (
    <section id="stage" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          RAPPORT de stage <span className="text-primary">et Attestation</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Retrouvez mes attestations et rapports de stage.
        </p>

        {/* Boutons catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {stageCategories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 capitalize ${
                activeCategory === category
                  ? "bg-pink-500 text-white shadow-lg scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-pink-400 hover:text-white hover:shadow-md hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStage.map((stage) => (
            <div
              key={stage.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
            >
              {stage.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{stage.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {stage.description}
                </p>
                <p className="text-xs text-muted-foreground mb-4">{stage.date}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={stage.demoUrl}
                      target="_blank"
                      download
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-pink-500 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 bg-pink-500 hover:bg-pink-600 text-white"
            target="_blank"
            href="https://github.com/reineekoueth"
          >
            Voir Mon Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};



