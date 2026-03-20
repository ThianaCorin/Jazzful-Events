import { motion } from "framer-motion";
import heroImage from "@/assets/hero-jazz.jpg";

const ease = [0.2, 0, 0, 1] as const;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jazz quartet performing at an elegant outdoor Provence reception"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-6 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="text-label text-primary-foreground/80 mb-6"
        >
          Des musiciens d’exception pour vos événements privés et professionnels
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="text-display font-serif font-light text-primary-foreground leading-[1.1] max-w-4xl mx-auto mb-8"
        >
          L'âme du Jazz, l'élégance du Live
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.6 }}
          className="font-sans text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
        >
          Basé en Provence, notre collectif crée une ambiance musicale
          raffinée et sur mesure pour accompagner vos plus beaux moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#formations"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-sans font-semibold text-base shadow-elevated hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300"
          >
            Découvrir nos formules
          </a>
          <a
            href="#contact"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-sans font-semibold text-base hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            Demander un devis
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-md border-t border-foreground/5"
      >
        <div className="container py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "150+", label: "Événements par an" },
            { number: "200+", label: "Titres au répertoire" },
            { number: "15+", label: "Années d'expérience" },
            { number: "50+", label: "Musiciens référencés" },
          ].map((s, i) => (
            <div key={i}>
              <p className="font-serif text-2xl md:text-3xl font-medium text-foreground">{s.number}</p>
              <p className="text-sm font-sans text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
