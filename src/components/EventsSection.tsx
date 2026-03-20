import { motion } from "framer-motion";
import { Heart, Wine, Building2, Hotel, Music, PartyPopper } from "lucide-react";

const ease = [0.2, 0, 0, 1] as const;

const events = [
  { icon: Heart, title: "Mariages", desc: "Cérémonie, vin d'honneur, soirée dansante" },
  { icon: Wine, title: "Cocktails", desc: "Inaugurations, vernissages, lancements" },
  { icon: Building2, title: "Corporate", desc: "Séminaires, galas, soirées d'entreprise" },
  { icon: Hotel, title: "Hôtellerie", desc: "Lobbys, restaurants, bars d'hôtels" },
  { icon: Music, title: "Festivals", desc: "Jazz festivals, fêtes de village, concerts" },
  { icon: PartyPopper, title: "Soirées Privées", desc: "Anniversaires, garden-parties, fêtes" },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 md:py-32 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <p className="text-label text-secondary mb-4">Nos Événements</p>
          <h2 className="text-heading font-serif font-light text-foreground">
            Pour chaque occasion, la note juste
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className="bg-background rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-500"
            >
              <e.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">{e.title}</h3>
              <p className="text-sm font-sans text-muted-foreground">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
