import { useState } from 'react';
import services from '@/data/services';

export default function Services() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    function toggle(index: number) {
        setActiveIndex(current => current === index ? null : index);
    }

    return (
        <section id="servicios" className="scroll-mt-30 text-accent text-center m-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center" data-aos="zoom-in">SERVICIOS</h2>

            <div className="text-lg sm:text-xl text-center">
                <p className="mb-5" data-aos="fade-up" data-aos-delay="200">
                    Trabajamos con <strong>constructoras, industrias, estudios de arquitectura, comercios y
                        particulares</strong>.
                </p>
                <p className="mb-5" data-aos="fade-up" data-aos-delay="400">
                    Operamos en <strong>Mar del Plata y zonas aledañas</strong>, y evaluamos
                    proyectos fuera de esa área
                    según
                    alcance y disponibilidad.
                </p>
            </div>

            {services.map((item, index) => {
                const isOpen = activeIndex === index;
                const panelId = `service-panel-${index}`;

                return (
                    <div key={item.title} className="border-b border-accent max-w-6xl mx-auto">
                        <button onClick={() => toggle(index)} aria-expanded={isOpen} aria-controls={panelId}
                            className="w-full text-left py-5 text-xl font-semibold flex justify-between items-center cursor-pointer">
                            {item.title}
                            <span className="text-2xl">
                                {isOpen ? '-' : '+'}
                            </span>
                        </button>

                        {/* Accordion panel: animates its height by transitioning the grid row from 0fr to 1fr */}
                        <div id={panelId} inert={!isOpen} className={[
                            'grid transition-[grid-template-rows,opacity] duration-300 ease-in-out',
                            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        ].join(' ')}>
                            <div className="overflow-hidden">
                                <div className="pb-5 text-justify text-lg">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
