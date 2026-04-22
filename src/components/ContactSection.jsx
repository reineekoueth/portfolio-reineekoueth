import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import { useRef,useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    
  emailjs
    .sendForm(
      "service_3h1ndkb",   // mon Service ID EmailJS
      "template_plf09ed",  // mon Template ID EmailJS
      form.current,       // Référence au formulaire
      "6CvXjDor-km3_Zs4X"     // Public Key EmailJS
    )
   .then(
      () => {
        toast({
          title: "Message envoyé !",
          description: "Merci pour votre message. Je vous réponds bientôt.",
        });
        setIsSubmitting(false);
      },
      (error) => {
        console.log(error);
        toast({
          title: "Erreur",
          description: "Le message n'a pas pu être envoyé.",
        });
        setIsSubmitting(false);
      }
   );
  };
  
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Me <span className="text-primary"> Contacter</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="reineekoueth@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    yvaekouethinfo@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    PARIS , FRANCE 
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Echanger avec moi </h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/reineekouethzwtvdwv0acbyzwluzq  " target="_blank">
                  <Linkedin />
                </a>
                 <a href="https://github.com/reineekoueth " target="_blank">
                  <Github/>
                </a>

              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
          >
            <h3 className="text-2xl font-semibold mb-6"> envoyer le message </h3>

            <form 
             ref={form}
             onSubmit={handleSubmit}
             className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Ton Nom 
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="yaya..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Ton Email 
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="yaya@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Ton Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="sujet"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Envoyer..." : "envoyer le message"}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};