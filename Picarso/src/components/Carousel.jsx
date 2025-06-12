import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const images = [
  "https://via.placeholder.com/800x400?text=Work+1",
  "https://via.placeholder.com/800x400?text=Work+2",
  "https://via.placeholder.com/800x400?text=Work+3",
];

export default function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-12 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl mb-8">Our Work</h2>
      <Card className="w-4/5 max-w-3xl overflow-hidden rounded-2xl shadow-lg">
        <motion.img
          key={images[currentImageIndex]}
          src={images[currentImageIndex]}
          alt="Painting Work"
          className="w-full h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </Card>
    </section>
  );
}
