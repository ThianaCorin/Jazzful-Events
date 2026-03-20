import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const ZoneSection = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <MapPin className="w-8 h-8 text-primary mx-auto mb-6" strokeWidth={1.5} />
          <p className="text-label text-primary mb-4">Zone d'Intervention</p>
          <h2 className="text-heading font-serif font-light text-primary-foreground mb-6">
            De la Provence au monde entier
          </h2>
          <p className="font-sans text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Basés en région PACA — Marseille, Aix-en-Provence, Nice, Cannes, Saint-Tropez, Avignon — 
            nous nous déplaçons partout en France et à l'international pour vos événements les plus prestigieux.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {["Marseille", "Aix-en-Provence", "Nice", "Cannes", "Monaco", "Saint-Tropez", "Avignon", "Lyon", "Paris", "International"].map((city) => (
              <span
                key={city}
                className="bg-primary-foreground/10 text-primary-foreground/80 px-4 py-2 rounded-full text-sm font-sans font-medium border border-primary-foreground/10"
              >
                {city}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ZoneSection;
