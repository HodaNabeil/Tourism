import { Lightbulb, Pencil, Star, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <Lightbulb className="w-12 h-12 text-orange-500" />,
      title: "Color it all",
      text: "Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Etiam fermentum.",
    },
    {
      icon: <Pencil className="w-12 h-12 text-orange-500" />,
      title: "Branding projects",
      text: "Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Etiam fermentum.",
    },
    {
      icon: <Star className="w-12 h-12 text-orange-500" />,
      title: "Promotion & event",
      text: "Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Etiam fermentum.",
    },
    {
      icon: <Megaphone className="w-12 h-12 text-orange-500" />,
      title: "Advertising",
      text: "Lorem ipsum dolor sit amet, consectetur lorem adipiscing elit. Etiam fermentum.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* العنوان */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Our <span className="text-orange-500">Services</span>
        </motion.h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-3"
            >
              <div className="flex justify-center mb-4 transform group-hover:scale-110 transition duration-300">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
