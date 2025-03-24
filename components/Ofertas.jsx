import React from "react";
import Image from "next/image";

const Ofertas = () => {
  return (
    <section className="container mx-auto py-10">
     <div className="container flex flex-col md:flex-row gap-8">

        {/* Texto vertical "Ofertas" centrado */}
        <div className="container flex justify-center basis-1/4 md:justify-end items-center">
          <h2 className="text-8xl font-serif font-medium text-olive-grand tracking-wider transform -rotate-90 origin-center">
            Ofertas
          </h2>
        </div>

        {/* Card de oferta */}
        <div className="container max-w-md bg-white rounded-lg shadow-md overflow-hidden">
          {/* Imagen */}
          <div className="relative w-full h-70">
            <Image
              src="https://picsum.photos/id/1050/600/300"
              alt="Oferta"
              fill
              className="object-cover"
            />
          </div>

          {/* Contenido */}
          <div className="p-4 text-black-grand">
              <button className="bg-olive-grand text-white px-6 py-3 text-xs rounded-md flex items-center gap-2">
                <a href="#">TARIFA DE APERTURA </a>
              </button>
            <p className="text-parrafos text-sm">
              Reserva tus vacaciones para el próximo año con anticipación y
              aprovecha hasta un 30% de descuento + 10% adicional al unirte a
              nuestro programa Grupo Cancún Rewards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ofertas;
