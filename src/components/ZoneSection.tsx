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
          <p className="text-label text-primary mb-4">Sur scène, partout</p>
          <h2 className="text-heading font-serif font-light text-primary-foreground mb-6">
            Basés en Provence, présents là où vous recevez
          </h2>
          <p className="font-sans text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Basés dans le Sud — Marseille, Aix-en-Provence, Nice, Cannes, Monaco,
            Saint-Tropez, Avignon — nous accompagnons vos événements privés et professionnels
            partout en France et à l’international.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ZoneSection;
