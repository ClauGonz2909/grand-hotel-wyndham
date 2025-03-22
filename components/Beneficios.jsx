import React from "react";
import { FaHotel, FaConciergeBell, FaUtensils, FaMapMarkerAlt, FaMobileAlt, FaSpa, FaUsers, FaCheckCircle } from "react-icons/fa";

const Beneficios = () => {
  return (
    <section className="bg-[#F8F5F0] py-16 flex flex-col items-center">
      {/* Contenedor del título */}
      <div className="container mx-auto text-center mb-12">
        <h5 className="text-xs text-gray-500 tracking-wide uppercase">Disfruta de todos</h5>
        <h2 className="text-3xl font-semibold text-black-grand">Nuestros Beneficios</h2>
      </div>

      {/* Contenedor principal que abarca toda la sección */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Beneficio 1 */}
          <div className="flex flex-col items-center text-center text-black-grand">
            <FaHotel className="text-3xl text-olive-grand mb-3" />
            <h4 className="font-bold text-lg">249 habitaciones</h4>
            <p className="text-sm text-gray-700">Superiores, Suite y Suite Premium con un servicio de talla mundial.</p>
          </div>

          {/* Beneficio 2 */}
          <div className="flex flex-col items-center text-center text-black-grand">
            <FaConciergeBell className="text-3xl text-olive-grand mb-3" />
            <h4 className="font-bold text-lg">Room service 24 hrs</h4>
            <p className="text-sm text-gray-700">Disponible para ti en cualquier momento del día.</p>
          </div>

          {/* Beneficio 3 */}
          <div className="flex flex-col items-center text-center text-black-grand">
            <FaUtensils className="text-3xl text-olive-grand mb-3" />
            <h4 className="font-bold text-lg">Restaurantes y bares</h4>
            <p className="text-sm text-gray-700">Disfruta de la mejor gastronomía en Páprika, Saria Bar y Paraka Gourmet.</p>
          </div>

          {/* Beneficio 4 */}
          <div className="flex flex-col items-center text-center text-black-grand">
            <FaMapMarkerAlt className="text-3xl text-olive-grand mb-3" />
            <h4 className="font-bold text-lg">Ubicación estratégica</h4>
            <p className="text-sm text-gray-700">Relájate con impresionantes vistas a la pista aérea del aeropuerto.</p>
          </div>

          {/* Beneficio 5 */}
          <div className="flex flex-col items-center text-center text-black-grand">
            <FaSpa className="text-3xl text-olive-grand mb-3" />
            <h4 className="font-bold text-lg">Wellness</h4>
            <p className="text-sm text-gray-700">Renueva tu energía en nuestro spa, piscina y sauna.</p>
          </div>

          {/* Beneficio 6 */}
          <div className="flex flex-col items-center text-center text-black-grand">
            <FaMobileAlt className="text-3xl text-olive-grand mb-3" />
            <h4 className="font-bold text-lg">Self check-in</h4>
            <p className="text-sm text-gray-700">Registro rápido sin colas, sin esperas.</p>
          </div>

          {/* Beneficio 7 */}
          <div className="flex flex-col items-center text-center text-black-grand">
            <FaCheckCircle className="text-3xl text-olive-grand mb-3" />
            <h4 className="font-bold text-lg">Habitación inteligente</h4>
            <p className="text-sm text-gray-700">Automatiza iluminación, climatización y otros servicios.</p>
          </div>

          {/* Beneficio 8 */}
          <div className="flex flex-col items-center text-center text-black-grand">
            <FaUsers className="text-3xl text-olive-grand mb-3" />
            <h4 className="font-bold text-lg">Eventos</h4>
            <p className="text-sm text-gray-700">Cinco salas para eventos de clase mundial.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
