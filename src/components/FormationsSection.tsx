import { motion } from "framer-motion";
import duoImg from "@/assets/formation-duo.webp";
import trioImg from "@/assets/formation-trio.webp";
import quartetImg from "@/assets/formation-quartet.webp";
import quintetImg from "@/assets/formation-quintet.jpg";

const ease = [0.2, 0, 0, 1] as const;

const formations = [
  {
    label: "DUO",
    title: "L’ambiance intimiste",
    description:
      "Une présence musicale délicate et élégante, idéale pour accompagner un vin d’honneur, un cocktail ou un dîner.",
    ideal: "Cocktails, cérémonies, dîners",
    image: duoImg,
  },
  {
    label: "TRIO",
    title: "L’équilibre jazz",
    description:
      "Une formation vivante et raffinée qui crée une atmosphère chaleureuse sans dominer les échanges.",
    ideal: "Réceptions, mariages, événements privés",
    image: trioImg,
  },
  {
    label: "QUARTET",
    title: "L’expérience live",
    description:
      "Une énergie musicale plus présente pour installer une véritable ambiance de concert chic et dansant.",
    ideal: "Soirées de mariage, galas, cocktails premium",
    image: quartetImg,
  },
  {
    label: "QUINTET & PLUS",
    title: "Le groupe signature",
    description:
      "Une formation sur mesure avec chanteuse ou cuivres pour les événements d’envergure et les ambiances festives.",
    ideal: "Grandes réceptions, festivals, événements d’entreprise",
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
            Du duo intimiste au groupe sur mesure
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
                  <span className="text-xs font-sans font-semibold text-secondary">Idéal pour: {f.ideal}</span>
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
