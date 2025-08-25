import { Camera, Globe, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export const Team = () => {
  const teamMembers = [
    {
      src: "/IMgTeam/h4-team-member-1-550x550.jpg",
      alt: "Allison Hampton",
      name: "Allison Hampton",
      role: "Travel Consultant",
      icons: [Camera, Globe, Twitter],
    },
    {
      src: "/IMgTeam/h4-team-member-2-550x550.jpg",
      alt: "James Carter",
      name: "James Carter",
      role: "Tour Guide",
      icons: [Camera, Globe, Twitter],
    },
    {
      src: "/IMgTeam/h4-team-member-3-550x550.jpg",
      alt: "Sophia Turner",
      name: "Sophia Turner",
      role: "Flight Manager",
      icons: [Camera, Globe, Twitter],
    },
    {
      src: "/IMgTeam/h4-team-member-4-550x550.jpg",
      alt: "Liam Anderson",
      name: "Liam Anderson",
      role: "Hotel Specialist",
      icons: [Camera, Globe, Twitter],
    },
  ];

  return (
    <section className="py-12">
      {/* العنوان مع أنيميشن أسرع */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-bold text-center mb-12 text-gray-800"
      >
        Our <span className="text-orange-500">Team</span>
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-6 p-4">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5, // أسرع
              delay: idx * 0.1, // تقليل التأخير
              ease: "easeOut",
            }}
            className="relative group w-72 h-72 overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={member.src}
              alt={member.alt}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#1c1f24c2] flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-sm text-gray-200 mb-3">{member.role}</p>
              <div className="flex space-x-3 text-orange-400">
                {member.icons.map((Icon, index) => (
                  <Icon
                    key={index}
                    className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
