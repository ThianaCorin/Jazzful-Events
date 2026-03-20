import { motion } from "framer-motion";
import duoImg from "@/assets/formation-duo.jpg";
import trioImg from "@/assets/formation-trio.jpg";
import quartetImg from "@/assets/formation-quartet.jpg";
import quintetImg from "@/assets/formation-quintet.jpg";

const ease = [0.2, 0, 0, 1] as const;

const formations = [
  {
    label: "DUO INTIMISTE",
    title: "L'Essence",
    description: "Piano-voix ou guitare-contrebasse, idéal pour vos cocktails intimes et dîners raffinés.",
    ideal: "Cocktails & Dîners",
    image: duoImg,
  },
  {
    label: "TRIO SWING",
    title: "L'Équilibre Parfait",
    description: "Piano, contrebasse et saxophone — la formule classique pour une ambiance jazzy élégante et vivante.",
    ideal: "Réceptions & Mariages",
    image: trioImg,
  },
  {
    label: "QUARTET",
    title: "La Signature",
    description: "Notre formation phare. Saxophone, piano, contrebasse et batterie pour une expérience live complète.",
    ideal: "Mariages & Galas",
    image: quartetImg,
  },
  {
    label: "QUINTET & PLUS",
    title: "Le Grand Format",
    description: "Ajout de trompette, chant ou percussions pour les événements d'envergure et les festivals.",
    ideal: "Festivals & Corporate",
    image: quintetImg,
  },
];

const FormationsSection = () => {
  return (
    <section id="formations" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <p className="text-label text-secondary mb-4">Nos Formations</p>
          <h2 className="text-heading font-serif font-light text-foreground">
            Une formation pour chaque moment
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formations.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-500 bg-background"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  style={{ transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
                />
              </div>
              <div className="p-6">
                <p className="text-label text-secondary mb-2">{f.label}</p>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">{f.title}</h3>
                <p className="text-sm font-sans text-muted-foreground mb-4">{f.description}</p>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="text-xs font-sans font-semibold text-secondary">Idéal : {f.ideal}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationsSection;
