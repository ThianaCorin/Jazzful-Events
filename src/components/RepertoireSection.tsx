import { motion } from "framer-motion";

const ease = [0.2, 0, 0, 1] as const;

const categories = [
  {
    title: "Standard Jazz",
    songs: ["Fly Me to the Moon", "Autumn Leaves", "Take Five", "All of Me", "Blue Bossa", "Summertime"],
  },
  {
    title: "Bossa Nova",
    songs: ["The Girl from Ipanema", "Corcovado", "Desafinado", "Águas de Março", "Wave", "So Nice"],
  },
  {
    title: "Swing & Manouche",
    songs: ["Minor Swing", "Les Yeux Noirs", "Nuages", "All of Me (Swing)", "C'est Si Bon", "La Vie en Rose"],
  },
  {
    title: "French Touch & Lounge",
    songs: ["La Mer", "Que Reste-t-il", "Les Feuilles Mortes", "J'ai Deux Amours", "Sous le Ciel de Paris", "Mon Amant de Saint-Jean"],
  },
];

const RepertoireSection = () => {
  return (
    <section id="repertoire" className="py-24 md:py-32 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <p className="text-label text-secondary mb-4">Répertoire</p>
          <h2 className="text-heading font-serif font-light text-foreground">
            Plus de 200 standards
          </h2>
          <p className="font-sans text-muted-foreground mt-4 max-w-xl mx-auto">
            Un répertoire riche et adaptable, du jazz classique aux reprises modernes en version jazz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: ci * 0.05 }}
              className="bg-background rounded-2xl p-8 shadow-card"
            >
              <h3 className="font-serif text-xl font-medium text-foreground mb-6">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.songs.map((song) => (
                  <li
                    key={song}
                    className="flex items-center gap-3 py-2 border-b border-foreground/5 last:border-0 font-sans text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 -mx-2 px-2 rounded-lg transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {song}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepertoireSection;
