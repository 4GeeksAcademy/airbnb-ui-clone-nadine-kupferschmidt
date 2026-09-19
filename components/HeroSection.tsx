const HeroSection = () => (
  <section className="px-4 py-8 md:px-8 md:py-12">
    <img
      src="https://picsum.photos/seed/costa-rica-hero/800/500"
      alt="Paisaje de Costa Rica"
      className="w-full h-64 md:h-80 object-cover rounded-2xl mb-6"
    />
    <h1 className="text-3xl md:text-4xl font-bold mb-3">
      Encuentra hoteles y alojamientos en Costa Rica
    </h1>
    <p className="text-gray-500 text-base">
      ¿Buscas un alojamiento para ti o para todo tu grupo? Seguro que en Airbnb
      encuentras lo que necesitas para tu próxima escapada.
    </p>
  </section>
);

export default HeroSection;