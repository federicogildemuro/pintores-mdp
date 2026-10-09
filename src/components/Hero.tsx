import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
    return (
        <section id="inicio"
            className="relative min-h-screen flex items-center justify-center text-light bg-cover bg-top pb-10 pt-30 px-5"
            style={{ backgroundImage: `url(${heroBg})` }}>
            {/* Overlay to improve readability */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-10" data-aos="fade-up">
                    Eficiencia, tecnología y precisión en cada etapa
                </h1>

                <p className="text-xl sm:text-2xl mb-10" data-aos="fade-up" data-aos-delay="250">
                    Somos expertos en aplicaciones mecanizadas de pintura, masilla y texturado a gran escala.
                </p>

                <div data-aos="fade-up" data-aos-delay="500">
                    <a href="#contacto"
                        className="bg-primary text-light text-lg sm:text-xl px-6 py-4 rounded-full hover:bg-accent transition duration-300 ease-in-out">
                        CONTACTANOS
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
