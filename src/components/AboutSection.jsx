import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          À propos de <span className="text-primary"> Moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Actuellement étudiante en BTS SIO option SLAM 
            </h3>

            <p className="text-muted-foreground">
             je me spécialise dans le développement d’applications et de solutions web. J’ai choisi cette formation par passion pour l’informatique et la programmation. 
            </p>

            <p className="text-muted-foreground">
             Mon objectif est de travailler dans un milieu informatique et de continuer à approfondir mes compétences dans la conception d’applications performantes et innovantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
               Me Contacter
              </a>

              <a
                href="doc/YVADORE-EKOUETH-CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Télécharger le CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Développement</h4>
                  <p className="text-muted-foreground">
                    Compétences en JavaScript , Html/Css , PhP , Python et React 
                    pour créer des applications web et desktop interactives et performantes.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Compétences Techniques</h4>
                  <p className="text-muted-foreground">
                    Expérience avec les réseaux, 
                    la virtualisation et les outils de sécurité tels que VirtualBox.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Experience</h4>
                  <p className="text-muted-foreground">
                   Stages pratiques en support informatique,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};