import { HeartIcon, StarIcon, TrophyIcon } from "@/components/icons";

const TrustSection = () => (
  <section className="px-4 py-8 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <StarIcon className="mb-3 h-6 w-6" />
      <h2 className="font-bold mb-1">Reserva con confianza</h2>
      <p className="text-gray-500 text-sm">
        Recibe asistencia las 24/7 y consulta las reseñas de la comunidad de
        huéspedes.
      </p>
    </div>

    <div>
      <HeartIcon className="mb-3 h-6 w-6" />
      <h2 className="font-bold mb-1">Descubre más comodidades</h2>
      <p className="text-gray-500 text-sm">
        Explora los alojamientos en función del confort que buscas para una
        escapada perfecta y de ensueño.
      </p>
    </div>

    <div>
      <TrophyIcon className="mb-3 h-6 w-6" />
      <h2 className="font-bold mb-1">Aprovecha la flexibilidad</h2>
      <p className="text-gray-500 text-sm">
        Gracias a las estadías con cancelación flexible, será más fácil que
        hagas una nueva reservación si cambias de planes.
      </p>
    </div>
  </section>
);

export default TrustSection;