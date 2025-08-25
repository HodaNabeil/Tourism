import { motion } from "framer-motion";

const AdventureSection = () => {
  const cards = [
    {
      image:
        "https://images.pexels.com/photos/33516862/pexels-photo-33516862.jpeg",
      title: "Spring Hiking",
      subtitle: "Just Beautiful",
    },
    {
      image:
        "https://images.pexels.com/photos/33543277/pexels-photo-33543277.jpeg",
      title: "Mont Blanc",
      subtitle: "Just Beautiful",
    },
    {
      image:
        "https://images.pexels.com/photos/33351534/pexels-photo-33351534.jpeg",
      title: "Forest Adventure",
      subtitle: "Just Beautiful",
    },
  ];

  return (
    <section className="w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.3,
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
          >
            <AdventureCard
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AdventureSection;

const AdventureCard = ({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-2xl group">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition duration-500 group-hover:bg-black/60"></div>

      {/* Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/70 rounded-2xl transition-all duration-500"></div>

      {/* Text */}
      <div className="relative text-center z-10 transition duration-500 opacity-80 group-hover:opacity-100">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="italic mt-2 text-gray-200">{subtitle}</p>
      </div>
    </div>
  );
};
