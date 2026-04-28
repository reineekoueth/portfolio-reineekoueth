import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
const certCategories = ["all", "Certification", "Attestation"];

const certifications = [
  {
    id: 1,
    title: "PYTHON essential",
    image: "/images/image.python.png",
    category: "Certification",
    date: "Avril 2025",
    url: "https://www.credly.com/badges/f0b01779-a784-47be-935e-2d725eeb35da/public_url", 

  },
  {
    id: 2,
    title: "Networking Basics",
    image: "/images/image.basic.png",
    category: "Certification",
    date: "Mars 2025",
    url: "https://www.credly.com/badges/cbd85e61-51bd-4409-bd74-54a62c4c665d/public_url",
  },
    {
    id: 3,
    title: " Google Analytics Certification",
    image: "/images/image.basic.png",
    category: "Certification",
    date: "Mars 2025",
    url: "https://skillshop.credential.net/11e688b7-13b1-4f09-a5fd-31054a1d3f1d#acc.9pUWwqJN   ",
  },
  {
    id: 4,
    title: "Certification PIX",
    image: "/images/image.pix.png",
    category: "Certification",
    date: "Fevrier 2026",
    url: "/doc/certification-pix-reine-ekoueth.pdf",
  },
  {
    id: 5,
    title: "Secunum",
    image: "/images/image.secunum.png",
    category: "Attestation",
    date: "Fevrier 2026",
    url: "/doc/attestation-suivie-de-cours-secunum.pdf",
  },
  { 
    id: 6,
    title: "AWS Academy Cloud Foundations",
    description: "EN COURS ",
    image: "/images/image.awscloud.png",
    category: "Attestation",
    date: "",
    url: "",
  },

];

export const CertificationsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCerts = certifications.filter(
    (cert) => activeCategory === "all" || cert.category === activeCategory
  );

  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Certifications /<span className="text-primary"> Attestation de cours</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {certCategories.map((category, key) => (
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
       

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {cert.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
                {/* Badge "En cours" */}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {cert.description}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  {cert.date}
                </p>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    download={cert.url}

                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <ExternalLink size={16} /> View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
