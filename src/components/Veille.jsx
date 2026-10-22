import { ArrowRight } from "lucide-react";

function Veille() {
  const sources = [
    // Kubernetes
    {
      title: "Tendances Kubernetes 2026 : outils, alternatives et évolutions",
      description:
        "Panorama des grandes évolutions de l'écosystème Kubernetes en 2026 : intégration de l'IA, plateformes internes pour les développeurs, GitOps et sécurité renforcée.",
      source: "SFEIR Institute",
      link: "https://institute.sfeir.com/fr/formation-kubernetes/comparatifs-et-alternatives-kubernetes/tendances-kubernetes-2026-outils-alternatives-evolutions/",
    },
    {
      title: "Tutoriel Kubernetes 2026 : déployer une application complète de zéro à la production",
      description:
        "Guide pas à pas qui couvre tout le cycle de vie d'une application sur Kubernetes, du déploiement à la mise en production, avec la gestion des accès (RBAC).",
      source: "Tech-Insider",
      link: "https://tech-insider.org/fr/tutoriel-kubernetes-deployer-application-2026/",
    },
    {
      title: "Kubernetes 2026 : le guide stratégique",
      description:
        "Un eBook destiné aux équipes DevOps qui abordent les difficultés de passage à l'échelle, de complexité et d'efficacité opérationnelle liées à Kubernetes.",
      source: "mogenius",
      link: "https://mogenius.com/blog-post/announcing-the-new-kubernetes-2026-ebook",
    },

    // Ansible
    {
      title: "Bilan 2025 de Red Hat Ansible Automation Platform",
      description:
        "Retour sur les nouveautés de la plateforme Ansible de Red Hat, dont la version 2.6, publié par l'éditeur lui-même.",
      source: "Red Hat",
      link: "https://www.redhat.com/fr/blog/2025-red-hat-ansible-automation-platform-year-review",
    },
    {
      title: "Automatiser son infrastructure avec Ansible : tutoriel complet 2026",
      description:
        "Tutoriel qui construit un projet d'automatisation d'infrastructure de bout en bout, de l'installation d'Ansible jusqu'à une structure de projet utilisable en production.",
      source: "Tech-Insider",
      link: "https://tech-insider.org/ansible-tutorial-automate-infrastructure-2026/",
    },
    {
      title: "Meilleurs outils d'Infrastructure as Code et d'automatisation cloud en 2026",
      description:
        "Comparatif des outils d'automatisation d'infrastructure. Ansible y est présenté comme le complément naturel de Terraform ou OpenTofu : l'un crée l'infrastructure, l'autre la configure.",
      source: "ComputingForGeeks",
      link: "https://computingforgeeks.com/?p=153589",
    },
  ];

  return (
    <section id="veille" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Ma Veille <span className="text-primary">Informatique</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comment Kubernetes et Ansible permettent-ils d'automatiser le
          déploiement et la gestion des infrastructures modernes en DevOps ?
        </p>

        <div className="cards">
          {sources.map((item, index) => (
            <div key={index} className="card">
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="mb-4">{item.description}</p>
              <p className="mb-4 text-sm text-muted-foreground">{item.source}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                Consulter
              </a>
            </div>
          ))}
        </div>

        <div className="text-blue-500 hover:underline mt-8">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.pearltrees.com/reine_ekoueth/langage-dev/id97621847"
          >
            Voir les autres liens <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Veille;
