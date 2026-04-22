/*import "./Veille.css";*/
import { ArrowRight } from "lucide-react";

function Veille() {
  const sources = [
    {
      title: "Boosting Web Performance: How WebAssembly Transforms UI Experiences",
      description: "Comment WebAssembly améliore largement les performances des applications web modernes grâce à une exécution quasi-native dans le navigateur.",
      source: "MoldStud",
      link: "https://moldstud.com/articles/p-boosting-web-performance-how-webassembly-transforms-ui-experiences-for-modern-applications"
    },
    {
      title: "Rust WebAssembly Performance: 8-10x Faster (2025 Benchmarks)",
      description: "Analyse de benchmarks récents montrant que Rust compilé en WebAssembly est 8 à 10 fois plus rapide que JavaScript pour les tâches intensives.",
      source: "byteiota",
      link: "https://byteiota.com/rust-webassembly-performance-8-10x-faster-2025-benchmarks/"
    },
    {
      title: "Pourquoi apprendre TypeScript en 2026 : un choix incontournable",
      description: "Apprendre TypeScript permet d’améliorer la qualité du code grâce au typage statique, qui aide à détecter les erreurs plus tôt et à mieux structurer les projets. Il s’intègre facilement avec JavaScript et est largement utilisé dans les frameworks modernes, ce qui en fait une compétence recherchée pour les développeurs web.",
      source: " Dyma",
      link: "https://dyma.fr/blog/pourquoi-apprendre-typescript/"
    },
    {
      title: "Les 5 avantages de TypeScript face à JavaScript",
      description: "Cet article présente les avantages de TypeScript par rapport à JavaScript, notamment le typage statique qui permet de détecter les erreurs plus tôt, d’améliorer la lisibilité du code et de faciliter la maintenance des projets.",
      source: "lemon-interactive",
      link: "https://www.lemon-interactive.fr/actualites/developpement/5-avantages-typescript-face-javascript/"
    },
    {
      title: "WASI 1.0: WebAssembly Is Everywhere in 2026",
      description: "La sortie de WASI 1.0 et du Component Model marque un tournant : WebAssembly peut désormais remplacer les containers dans certains cas d'usage cloud.",
      source: "The New Stack",
      link: "https://thenewstack.io/wasi-1-0-you-wont-know-when-webassembly-is-everywhere-in-2026/"
    },
    {
      title: "TypeScript + Rust: All You Need in 2025",
      description: "Pourquoi combiner TypeScript et Rust est devenu la stratégie dominante pour construire des applications web fiables et performantes en 2025.",
      source: "DEV Community",
      link: "https://dev.to/criscmd/typescript-rust-all-you-need-in-2025-3dic"
    },

  ];

  return (
    <section id="veille" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Ma Veille <span className="text-primary">Informatique</span>
      </h1>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Comment TypeScript, Rust et WebAssembly révolutionnent-ils la performance et la fiabilité des applications web modernes ?
      </p>

      <div className="cards">
        {sources.map((item, index) => (
          <div key={index} className="card">
            <h2 className="font-semibold text-xl mb-2">{item.title}</h2>
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