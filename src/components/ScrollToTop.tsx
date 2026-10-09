import { useEffect, useState } from 'react';

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

export default function ScrollToTop() {
    // Button visibility
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        function handleScroll() {
            setShowButton(window.scrollY > 200);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button onClick={scrollToTop} style={showButton ? undefined : { display: 'none' }}
            className="bg-primary text-light fixed bottom-5 right-5 border-2 px-4 py-3 rounded-full hover:bg-accent transition duration-300 ease-in-out cursor-pointer"
            title="Ir arriba" aria-label="Scroll to top" aria-hidden={!showButton}>
            <i className="fas fa-arrow-up" aria-hidden="true" />
        </button>
    );
}
