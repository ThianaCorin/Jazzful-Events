import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [wantsCallback, setWantsCallback] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <p className="text-label text-secondary mb-4">Contact</p>
          <h2 className="text-heading font-serif font-light text-foreground">
            Parlons de votre événement
          </h2>
          <p className="font-sans text-muted-foreground mt-4">
            Décrivez-nous votre événement, vos envies et l’atmosphère recherchée.
            Nous vous répondrons avec une proposition personnalisée.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="bg-background rounded-2xl p-8 md:p-12 shadow-elevated"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                Merci pour votre demande !
              </h3>
              <p className="font-sans text-muted-foreground">
                Nous reviendrons vers vous très prochainement avec une réponse adaptée à votre événement.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Nom + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-label text-muted-foreground block mb-3">Nom complet</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-foreground/20 focus:border-primary transition-colors duration-300 py-3 font-sans text-foreground outline-none placeholder:text-muted-foreground/50"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="text-label text-muted-foreground block mb-3">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-foreground/20 focus:border-primary transition-colors duration-300 py-3 font-sans text-foreground outline-none placeholder:text-muted-foreground/50"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              {/* Date + Lieu */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-label text-muted-foreground block mb-3">Date de l'événement</label>
                  <input
                    type="date"
                    required
                    className="w-full bg-transparent border-b border-foreground/20 focus:border-primary transition-colors duration-300 py-3 font-sans text-foreground outline-none"
                  />
                </div>
                <div>
                  <label className="text-label text-muted-foreground block mb-3">Lieu</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-foreground/20 focus:border-primary transition-colors duration-300 py-3 font-sans text-foreground outline-none placeholder:text-muted-foreground/50"
                    placeholder="Ville ou lieu"
                  />
                </div>
              </div>

              {/* Nombre d'invités */}
              <div>
                <label className="text-label text-muted-foreground block mb-3">Nombre d'invités</label>
                <input
                  type="number"
                  className="w-full bg-transparent border-b border-foreground/20 focus:border-primary transition-colors duration-300 py-3 font-sans text-foreground outline-none placeholder:text-muted-foreground/50"
                  placeholder="Estimation"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-label text-muted-foreground block mb-3">Votre événement</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-foreground/20 focus:border-primary transition-colors duration-300 py-3 font-sans text-foreground outline-none resize-none placeholder:text-muted-foreground/50"
                  placeholder="Décrivez-nous votre événement : type d'occasion, ambiance souhaitée, genre musical, questions particulières..."
                />
              </div>

              {/* Rappel téléphonique */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setWantsCallback(!wantsCallback)}
                    className={`w-5 h-5 rounded border flex items-center justify-center transition-colors duration-200 shrink-0 ${wantsCallback
                      ? "bg-primary border-primary"
                      : "border-foreground/30 bg-transparent"
                      }`}
                  >
                    {wantsCallback && <Check className="w-3 h-3 text-primary-foreground" />}
                  </button>
                  <span className="font-sans text-sm text-foreground">
                    Je préfère être contacté(e) par téléphone
                  </span>
                </div>

                {wantsCallback && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="text-label text-muted-foreground block mb-3">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-b border-foreground/20 focus:border-primary transition-colors duration-300 py-3 font-sans text-foreground outline-none placeholder:text-muted-foreground/50"
                      placeholder="+33 6 XX XX XX XX"
                    />
                  </motion.div>
                )}
              </div>
              <p className="font-sans text-xs text-muted-foreground text-center">
                Les informations collectées sont utilisées uniquement pour répondre à votre demande.{" "}
                <a href="/confidentialite" className="underline hover:text-foreground transition-colors">
                  Politique de confidentialité
                </a>
              </p>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-full font-sans font-semibold text-base shadow-elevated hover:scale-[1.01] active:scale-[0.99] transition-transform duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Envoyer ma demande
              </button>

            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;