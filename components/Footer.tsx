import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-gray-200 bg-gray-50 px-4 py-8 md:px-8">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div>
        <h2 className="mb-2 font-semibold">Ayuda</h2>
        <div className="space-y-1 text-sm text-gray-600">
          <Link
            href="/"
            className="block text-gray-600 hover:text-gray-900 hover:underline"
          >
            Inicio
          </Link>
          <p>Cancelaciones</p>
        </div>
      </div>

      <div>
        <h2 className="mb-2 font-semibold">Anfitriones</h2>
        <div className="space-y-1 text-sm text-gray-600">
          <Link
            href="/catalog"
            className="block text-gray-600 hover:text-gray-900 hover:underline"
          >
            Explorar alojamientos
          </Link>
          <p>Recursos</p>
        </div>
      </div>

      <div>
        <h2 className="mb-2 font-semibold">Empresa</h2>
        <div className="space-y-1 text-sm text-gray-600">
          <p>Sobre nosotros</p>
          <p>Novedades</p>
        </div>
      </div>
    </div>

    <hr className="my-6" />
    <p className="text-sm text-gray-600">© 2026 staybnb</p>
  </footer>
);

export default Footer;
