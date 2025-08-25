import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { value: "1982", label: "Cups of coffee & tea" },
    { value: "28+", label: "Years of experience" },
    { value: "219k", label: "Hours on projects" },
    { value: "121", label: "National awards" },
    { value: "556", label: "Professional services" },
  ];

  return (
    <div className=" grid grid-cols-2  md:grid-cols-3   lg:grid-cols-5 gap-8  bg-[#f4a261]  text-white  p-10">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="text-center"
        >
          <span className="block text-2xl font-bold  ">{stat.value}</span>
          <span className="block text-sm">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
