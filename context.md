# Context — Airbnb UI Clone 
## Usuario y objetivo 
[usuario que busca alojamiento, quiere explorar opciones, filtrar por categoría/precio, ver detalles de un alojamiento específico y simular una reserva]

## Home (/)

### Qué muestra
Vista principal de exploración de alojamientos. Navbar de utilidad, filtro rápido por categorías y una grilla de tarjetas de alojamientos disponibles, cargados de forma simulada al montar la página.

### Estilo visual (basado en capturas de airbnb.com, 375px y 768px)

**Tipografía**
- Familia: sans-serif redondeada (tipo Circular/Inter/system-ui como fallback en Tailwind).
- Títulos de sección: `text-3xl` a `text-4xl`, `font-bold`, color `text-gray-900` (casi negro, no negro puro).
- Subtítulos/descripciones bajo el título: `text-base`, `font-normal`, color `text-gray-500`.
- Título de tarjeta (nombre de alojamiento): `text-base`, `font-semibold`, `text-gray-900`, con truncado (`truncate` + `...`).
- Subtítulo de tarjeta (detalle del alojamiento): `text-sm`, `font-normal`, `text-gray-500`.
- Precio: `font-bold` para el número, `font-normal text-gray-500` para "por X noches".
- Precio tachado (si hay descuento): `line-through text-gray-400`, al lado del precio final en negro.

**Colores**
- Fondo general: blanco (`bg-white`).
- Texto principal: `text-gray-900` (no negro puro, ligeramente suavizado).
- Texto secundario: `text-gray-500`.
- Líneas divisorias (bajo la navbar, entre preguntas del FAQ): `border-gray-200`, `border-b`, muy sutiles, 1px.
- Acento / CTA principal: gradiente rosa-magenta (`from-rose-500 to-pink-600` aprox.), texto blanco, usado en el botón "Buscar".
- Logo: rojo/coral (`text-rose-500` aprox.).
- Bordes de inputs y tarjetas: `border-gray-200`, `rounded-xl` a `rounded-2xl` (bastante redondeados, no cuadrados).

**Espaciado**
- Padding lateral de página: `px-4` en mobile, `px-8` a `px-12` en desktop.
- Separación entre secciones (navbar → hero, sección → sección): generoso, `py-8` a `py-12` en mobile, más aún en desktop (`py-16`+).
- Separación entre título de sección y contenido: `mb-2` (título → descripción, pegados) y `mb-6` (descripción → grilla, más aire).
- Gap entre tarjetas en la grilla: `gap-4` a `gap-6`.
- Padding interno de tarjeta de búsqueda/inputs: `p-4`.

**Bordes y sombras**
- Imágenes de tarjetas: `rounded-xl`, sin sombra visible, bordes limpios.
- Botones secundarios ("Descubre más"): `border border-gray-300 rounded-full`, fondo blanco, sin sombra.
- Botón primario ("Buscar"): `rounded-xl` a `rounded-full`, sin borde, con el gradiente de fondo.
- Badge sobre imagen ("Favorito entre huéspedes"): fondo blanco sólido, `rounded-full`, `px-3 py-1`, `shadow-sm` sutil, con ícono de trofeo + texto en `font-semibold text-sm`.

### Componentes principales
- Navbar: logo (ícono simple) + campo de búsqueda de texto + ícono de menú/usuario. Borde inferior sutil (`border-b border-gray-200`). En desktop gana más espacio horizontal.
- CategoryFilter: fila horizontal de categorías (ícono + etiqueta), categoría activa resaltada (por ejemplo con `border-b-2 border-gray-900` o cambio de color de texto).
- ListingCard: imagen (`rounded-xl`), badge opcional ("Favorito entre huéspedes"), título (`font-semibold`, truncado), rating con estrella + cantidad de reseñas entre paréntesis (o "Novedad" si no tiene reseñas), subtítulo en gris, precio por noche (con variante de descuento: precio tachado + precio final).
- ListingGrid: contenedor en grilla — 1 columna en mobile, 3 columnas en desktop (`grid grid-cols-1 md:grid-cols-3 gap-6`).

### Especificación de visión (Copilot)
Basado en capturas de airbnb.com en 375px y 768px: la landing pública muestra hero y buscador extenso no aplicables al alcance funcional del proyecto (se simplifican en la implementación según el brief), pero se documenta su estilo visual como guía de diseño general. Se extrajo el patrón de tarjeta de alojamiento (ListingCard) de las secciones de carrusel/grid repetidas en la página, incluyendo sus variantes condicionales (rating vs. "Novedad", precio con o sin descuento). El contenedor pasa de 1 columna en mobile a 3 en desktop sin cambios en la tarjeta. Tipografía bold para títulos y precios, texto secundario en gris suave, bordes muy redondeados, espaciado generoso entre secciones, y acento rosa-magenta como único color fuerte de marca.


## Catalog (/catalog)

### Qué muestra
Resultados de búsqueda para un destino. Lista de tarjetas de alojamiento con filtros rápidos por categoría/amenidad y control de orden por precio. Incluye un área de mapa de referencia (placeholder en la versión base del proyecto).

### Componentes principales
- SearchSummaryHeader: en mobile, flecha de volver + resumen de búsqueda (destino, fechas, huéspedes) + ícono de filtros con contador. En desktop, el buscador compacto vive integrado en la navbar (destino · fechas · huéspedes · botón de búsqueda circular).
- FilterChips: fila horizontal scrolleable de pills — "Filtros" (con contador de filtros activos) + atajos comunes (Alojamiento entero, Jacuzzi, Wifi, Cocina, etc.)
- ResultsHeader: texto con cantidad de resultados ("Más de 1000 alojamientos") + control de orden por precio (ascendente/descendente, pendiente de confirmar variante visual exacta)
- ListingCard (reutilizado de Home): imagen con galería (dots), ícono de favorito (corazón), badge opcional "Favorito entre huéspedes", tag opcional "Cancelación gratuita", título, rating o "Novedad", subtítulo, detalles (habitaciones/camas/baños), precio con posible descuento
- ListingGrid: 1 columna en mobile, 2 columnas en desktop (`grid-cols-1 md:grid-cols-2`)
- MapArea: en el proyecto, placeholder con estilo — a la derecha de la lista en desktop, debajo en mobile, visible simultáneamente (decisión de diseño que sigue el brief, distinta al patrón real de Airbnb que alterna mapa/lista con un botón flotante)
- PaginationControls: números de página + flechas anterior/siguiente, al final de la lista

### Especificación de visión (Copilot)
Se identificó que Airbnb no muestra mapa y lista simultáneos ni en mobile ni en desktop — usa un patrón de alternancia con botón flotante "Mostrar/Ocultar mapa". Se decide no replicar ese patrón: el proyecto sigue el brief, que pide mapa y lista visibles a la vez. Se documentó además un panel de filtro de precio con histograma (PriceRangeFilter) como reto avanzado, no requerido por el brief.

### Componentes adicionales identificados (no requeridos por el brief, solo referencia)
- FiltersModal: modal centrado (desktop) con filtros seleccionados como chips removibles, sección "Recomendado para ti" con tarjetas de amenidades (ícono + etiqueta), rango de precio con histograma, botón "Limpiar filtros" y CTA "Mostrar X alojamientos"
- No se encontró un control nativo de orden por precio (asc/desc) en la interfaz real — se implementa como decisión de diseño propia, siguiendo el estilo general documentado (dropdown o par de botones, bordes redondeados, acento en negro/gris para el estado activo)

## Room Detail (/rooms/[id])

### Qué muestra
Vista de detalle de un alojamiento específico. Incluye galería de fotos, información general, datos del anfitrión, servicios ofrecidos y tarjeta de reserva con precio y selector de huéspedes.

### Componentes principales
- PhotoGallery: imagen actual + botones anterior/siguiente (`useState` para índice), navegando un array de fotos
- RoomHeader: título, subtítulo (tipo de alojamiento + ubicación), detalles (huéspedes/habitaciones/camas/baños), rating con estrella + cantidad de reseñas
- HostInfo: avatar (placeholder), nombre del anfitrión, años como anfitrión
- AmenitiesGrid: grilla de ícono + etiqueta (servicios como Wifi, Cocina, Estacionamiento, etc.)
- BookingCard: precio por noche, contador de huéspedes (`useState`, min/max), botón CTA "Reserva"

### Especificación de visión (Copilot)
Basado en capturas de airbnb.com en 375px: la vista real incluye muchas más secciones que las requeridas por el brief (reseñas detalladas, mapa de ubicación, coanfitriones, reglas de la casa, footer extenso). Se documentan como referencia pero no se implementan — el proyecto se limita a las 5 secciones pedidas: galería, header, info de anfitrión, amenities y tarjeta de reserva. La tarjeta de reserva en la referencia real aparece como barra flotante fija al hacer scroll (precio + botón "Reserva" siempre visible); se puede replicar ese comportamiento con `position: sticky` o mantenerla como sección normal dentro del flujo, según preferencia de implementación.

### No implementado (referencia visual únicamente)
- Sección de reseñas destacadas con chips temáticos + reseñas individuales
- Descripción larga expandible ("Mostrar más")
- Mapa de ubicación interactivo
- Card expandida de coanfitriones / mensajería con anfitrión
- Reglas de la casa, seguridad y propiedad, denuncia de anuncio
- Footer extenso + breadcrumb + sección "Descubre otras opciones"

### Layout desktop (768px+)
- Grid de 2 columnas: contenido principal (galería, descripción, anfitrión, amenities, mapa) a la izquierda; BookingCard a la derecha, en columna más angosta.
- Galería: 1 foto grande + grid 2x2 de fotos chicas, con botón "Mostrar todas las fotos" superpuesto.
- Nav secundaria opcional (no requerida por el brief): tabs "Fotos · Servicios · Reseñas · Ubicación" con anchor scroll, sticky debajo de la navbar.
- BookingCard: sticky en su columna mientras hay contenido al lado (comportamiento avanzado opcional — en la referencia real colapsa a una barra horizontal compacta durante la sección de mapa; se simplifica a un `sticky` normal en la implementación del proyecto).

---

## Evolución del proyecto después del cumplimiento del brief

Todo lo documentado arriba fue la especificación de partida, construida antes de escribir código, siguiendo el flujo de vision-prompt pedido por la consigna. Una vez que las tres vistas cumplían el brief al 100% (setup, tipos, componentes reutilizables, `useState`/`useEffect` en los casos pedidos, navegación con `Link`, mobile-first), quedó tiempo disponible y se usó para pulir la experiencia y agregar funcionalidades propias, no exigidas por la consigna. Estas son las mejoras, con el motivo de cada una:

**Identidad visual consistente.** El logo usa color rosa (`rose-500`). Se llevó ese mismo color a todos los estados interactivos de la app (foco del buscador, categorías activas, filtros activos, botones de orden activos, hover de tarjetas y botones), para que la marca se sienta coherente en toda la interfaz en vez de mezclar rosa con negro/gris.

**Categorías funcionales de verdad.** En la especificación original, `CategoryFilter` solo resaltaba visualmente la categoría elegida, sin filtrar nada (así lo pedía el brief). Se decidió ir un paso más allá y hacer que las categorías (Playa, Cabañas, Piscina, Vistas) filtren realmente la grilla de alojamientos, agregando un campo `category` a los datos de cada alojamiento. También se le agregaron íconos propios más representativos de cada categoría (ola de mar, casita, gota de agua, árbol) en vez de reutilizar íconos genéricos sin relación visual con el nombre.

**Catálogo completo con página de detalle para cada alojamiento.** Originalmente solo se habían creado datos de ejemplo (`mockRooms`) para 3 de los 6 alojamientos. Se completaron los 3 restantes para que **todas** las tarjetas del catálogo lleven a una página de Room Detail real, sin excepciones.

**Menú de navegación funcional.** El ícono de menú en el Navbar, que en la versión base era solo decorativo, ahora despliega un menú simple con accesos directos a "Inicio" y "Catálogo". El logo también se hizo clickeable hacia el inicio en ambas variantes de navbar (la de Home/Catalog y la simplificada de Room Detail).

**Secciones nuevas en la Home, inspiradas en la landing real de Airbnb pero adaptadas al alcance del proyecto:**
- *TrustSection*: tres bloques cortos ("Reserva con confianza", "Descubre más comodidades", "Aprovecha la flexibilidad"), para darle a la página una sensación más completa y menos "vacía" después de la grilla de alojamientos.
- *FaqSection*: un acordeón de preguntas frecuentes inventadas sobre la plataforma, para practicar otro caso de `useState` (qué pregunta está abierta) y sumar contenido de cierre a la página.
- Se probó también agregar una sección de bienvenida tipo hero (foto + título + texto), pero finalmente se descartó de la Home: se priorizó mantener la página más limpia y con el Navbar funcional (buscador + categorías) como lo primero que ve el usuario, en línea con lo que pide el brief para esta vista.

**Ajustes de experiencia en Home:** la Home ahora muestra solo 3 alojamientos como vista previa, con un botón "Descubre más" que lleva al catálogo completo — así la página de inicio no se siente sobrecargada, y el catálogo cumple su función de mostrar todo el listado.

**Fotos curadas manualmente.** Las fotos de ejemplo empezaron siendo completamente aleatorias (`picsum.photos`), sin relación con el texto de cada alojamiento. Se pasó luego a un servicio con fotos por temática (`loremflickr`, filtrando por etiquetas como "cabin" o "beach"), y finalmente se reemplazaron por fotos específicas elegidas a mano en Unsplash para que cada alojamiento tenga una imagen realmente coherente con su descripción (por ejemplo, que "Cabaña acogedora en el bosque" muestre efectivamente una cabaña). También se ajustó la calidad y el tamaño de las imágenes (parámetros `q` y `w` en la URL) para que la página cargue más rápido sin perder calidad visual perceptible.

**Detalle de datos más legible.** Los datos de habitaciones/camas/baños en las tarjetas pasaron de mostrarse como números sueltos ("4 · 5 · 3") a incluir la etiqueta de cada uno ("4 cuartos · 5 camas · 3 baños"), para que la información se entienda sin necesidad de adivinar qué representa cada número.

**Ajustes de responsive en Catalog.** Se corrigió el tamaño del mapa placeholder en pantallas grandes (se veía desproporcionadamente alto) y se aseguró que los botones de orden por precio queden en una sola fila incluso en pantallas de 375px.