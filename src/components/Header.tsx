import { useEffect, useState } from 'react';
import navLinks from '@/data/navLinks';
import NavLink from '@/components/NavLink';
import logo from '@/assets/logo.jpg';

const sectionIds = navLinks.map(link => link.label.toLowerCase());

export default function Header() {
    // Menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function toggleMenu() {
        setIsMenuOpen(open => !open);
    }

    // Active section
    const [activeSection, setActiveSection] = useState('');
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header className="bg-primary text-light fixed top-0 left-0 w-full h-30 z-50 px-10">
            <div className="w-full h-full flex items-center justify-between">
                {/* Logo */}
                <a href="#inicio" className="shrink-0 hover:scale-110 transition-all duration-500 ease-in-out">
                    <img src={logo} alt="Logo de Pintores MDP" className="h-24" />
                </a>

                {/* Hamburger icon */}
                <button onClick={toggleMenu} className="text-2xl sm:hidden" aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}>
                    <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true" />
                </button>

                {/* Navigation Menu */}
                <nav className={[
                    'bg-primary absolute top-full left-0 w-full sm:static sm:block sm:w-auto',
                    isMenuOpen ? 'block' : 'hidden'
                ].join(' ')} role="navigation" aria-label="Main menu">
                    <ul className="flex flex-col items-center text-center sm:flex-row gap-5 sm:gap-10 p-5 sm:p-0">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <NavLink href={link.href} label={link.label}
                                    active={activeSection === link.label.toLowerCase()}
                                    onNavigate={() => setIsMenuOpen(false)} />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
