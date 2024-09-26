"use client";
import CardLibro from "@/components/CardLibro";
import { libros } from "@/store/libros";

export default function Home() {
  return (
    <>
      <div className="items-center justify-items-center min-h-screen p-8 pb-10 left-8 right-8 gap-16 sm:p-20">
        <div className="grid grid-cols-2 gap-5 py-3">
          <select className="select select-success w-full">
            <option disabled selected>
              Selecciona el género
            </option>
            {libros.library.map((libro) => (
              <option>{libro.book.genre}</option>
            ))}
          </select>
          <button className="btn btn-outline btn-accent">
            Libros agregados
          </button>
        </div>
        <div class="grid grid-cols-2 xl:grid-cols-4 gap-9 px-4 py-3">
          {libros.library.map((libro) => (
          <CardLibro libro={libro}/>
          ))}
        </div>
      </div>
    </>
  );
}
