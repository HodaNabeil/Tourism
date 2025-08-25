import { motion } from "framer-motion";

const galleryImages = [
  "/IMgGallery/gallery-img-2.jpg",
  "/IMgGallery/gallery-img-3.jpg",
  "/IMgGallery/gallery-img-4-300x300.jpg",
  "/IMgGallery/gallery-img-5-300x300.jpg",
];

export default function TravelGallery() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* الصورة الكبيرة على اليسار */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full relative group overflow-hidden m-0 p-0"
          >
            <img
              src="/IMgGallery/gallery-img-1.jpg"
              className="w-full h-full object-cover block m-0 p-0 transition-transform duration-300 group-hover:scale-105"
              alt="Explore the World"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Explore More</p>
            </div>
          </motion.div>

          {/* الصور الصغيرة على اليمين */}
          <div className="columns-2 gap-0 space-y-0">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative group overflow-hidden break-inside-avoid m-0 p-0"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full block m-0 p-0 transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">View Image</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
