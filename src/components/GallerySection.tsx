import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const ease = [0.2, 0, 0, 1] as const;

const images = [
  { src: gallery1, alt: "Musiciens jazz interagissant avec les invités", className: "col-span-2 row-span-1" },
  { src: gallery2, alt: "Saxophoniste en gros plan lors d'un cocktail", className: "col-span-1 row-span-2" },
  { src: gallery3, alt: "Dîner élégant en Provence avec musiciens", className: "col-span-1 row-span-1" },
  { src: gallery4, alt: "Jazz en bord de mer au coucher du soleil", className: "col-span-2 row-span-1" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <p className="text-label text-secondary mb-4">Galerie</p>
          <h2 className="text-heading font-serif font-light text-foreground">
            L'émotion en images
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[240px] md:auto-rows-[280px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className={`${img.className} rounded-2xl overflow-hidden group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                style={{ transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
