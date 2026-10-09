import navLinks from '@/data/navLinks';
import socialLinks from '@/data/socialLinks';

const Footer = () => {
    return (
        <footer className="bg-primary text-light grid grid-cols-1 sm:grid-cols-3 gap-5 p-10">
            {/* Navigation Links */}
            <nav aria-label="Enlaces del sitio" className="flex flex-col gap-5 text-center sm:text-start">
                {navLinks.map(link => (
                    <a key={link.href} href={link.href}
                        className="hover:text-accent transition-all duration-500 ease-in-out">
                        {link.label}
                    </a>
                ))}
            </nav>

            {/* Social Media Links */}
            <nav aria-label="Redes sociales" className="flex flex-col gap-5 text-center">
                <h2 className="text-xl">SEGUINOS EN NUESTRAS REDES</h2>
                <ul className="flex justify-center gap-5">
                    {socialLinks.map(link => (
                        <li key={link.name}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer"
                                className="hover:text-accent transition-all duration-500 ease-in-out" aria-label={link.name}>
                                <i className={`${link.iconClass} text-2xl`} aria-hidden="true" />
                                <span className="sr-only">{link.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Copyright Notice */}
            <div className="flex flex-col gap-5 text-center sm:text-end">
                <p>© 2025 PINTORES MDP</p>
            </div>
        </footer>
    );
};

export default Footer;
