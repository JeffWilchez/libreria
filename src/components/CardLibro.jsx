"use client";
import { motion } from "framer-motion";

const CardLibro = (libro) => {
  return (
    <motion.div
      className="w-auto h-80 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-full">
        <motion.img
          src={libro.libro.book.cover}
          alt="Placeholder"
          className="w-full h-full border border-green-500"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0.2 }}
        />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 bg-black/80"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-extrbold text-white">
            {libro.libro.book.title}
          </h3>
          <p className="text-sm text-white">{libro.libro.book.synopsis}</p>
          <button className="btn bg-green-500 text-white border-none hover:bg-green-700 mt-4">
            Agregar al listado
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardLibro;
