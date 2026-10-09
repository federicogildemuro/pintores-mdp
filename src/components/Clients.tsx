import clientsLogos from '@/data/clientsLogos';

export default function Clients() {
    return (
        <section className="bg-gradient-to-b from-light to-primary text-accent text-center p-10 overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center" data-aos="zoom-in">NUESTROS CLIENTES</h2>

            <p className="mb-10" data-aos="fade-up" data-aos-delay="200">
                A lo largo de nuestra trayectoria, hemos trabajado junto a desarrolladores,
                constructoras, estudios de arquitectura, industrias y clientes particulares que valoran la
                eficiencia, el compromiso y la calidad en cada detalle. Estas son algunas de las <strong>empresas y
                    profesionales
                    que confiaron en Pintores MDP</strong> para llevar adelante sus
                proyectos con resultados de alto nivel.
            </p>

            {/* Logos rendered twice so the scrolling strip loops seamlessly */}
            <div className="whitespace-nowrap animate-scroll flex items-center gap-10">
                {clientsLogos.map((logo, index) => (
                    <img key={`logo1-${index}`} src={logo} alt="Logo cliente" className="h-12 w-auto object-contain p-2" />
                ))}
                {clientsLogos.map((logo, index) => (
                    <img key={`logo2-${index}`} src={logo} alt="Logo cliente" className="h-12 w-auto object-contain p-2" />
                ))}
            </div>
        </section>
    );
}
