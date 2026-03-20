import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const testimonials = [
  {
    quote: "Jazz Riviera a transformé notre mariage en un moment inoubliable. Chaque invité nous en parle encore. L'élégance et l'énergie étaient parfaites.",
    name: "Sophie & Antoine",
    role: "Mariage — Château de la Tour, Cannes",
    stars: 5,
  },
  {
    quote: "Nous faisons appel à Jazz Riviera pour tous nos événements corporate. Professionnalisme irréprochable, répertoire impeccable, et une capacité rare à s'adapter à l'ambiance.",
    name: "Marc Dupont",
    role: "Directeur événementiel — Hôtel Martinez",
    stars: 5,
  },
  {
    quote: "Une prestation haut de gamme du début à la fin. Les musiciens sont arrivés en avance, ont joué avec passion, et nos invités étaient enchantés. Je recommande à 200%.",
    name: "Claire Moreau",
    role: "Soirée privée — Villa Saint-Tropez",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <p className="text-label text-secondary mb-4">Témoignages</p>
          <h2 className="text-heading font-serif font-light text-foreground">
            Ils nous ont fait confiance
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className="bg-muted rounded-2xl p-8 shadow-card"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <blockquote className="font-sans text-foreground text-sm leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-sans font-semibold text-sm text-foreground">{t.name}</p>
                <p className="font-sans text-xs text-muted-foreground mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
