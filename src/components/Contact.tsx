import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

// Load EmailJS configuration from environment variables
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
    // Form input states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // Form status flags
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    // Handles the form submission and sends an email via EmailJS
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Reset status flags
        setSuccess(false);
        setError(false);
        setSending(true);

        // Basic input validation
        if (!name || !email || !phone || !message) {
            setError(true);
            setSending(false);
            return;
        }

        // EmailJS template parameters
        const templateParams = {
            name,
            email,
            phone,
            message,
        };

        // Send the email using EmailJS
        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then(() => {
                // On success: show confirmation and clear form inputs
                setSuccess(true);
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            })
            .catch(() => {
                // On failure: show error message
                setError(true);
            })
            .finally(() => {
                // Reset sending flag
                setSending(false);
            });
    };

    return (
        <section id="contacto" className="scroll-mt-30 text-accent text-center m-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-10" data-aos="zoom-in">
                CONTACTO
            </h1>

            {/* WhatsApp contact button */}
            <div className="mb-10" data-aos="fade-up" data-aos-delay="200">
                <p className="text-lg sm:text-xl mb-10">
                    Podés enviarnos un mensaje directo por WhatsApp haciendo clic en el botón.
                </p>
                <a href="https://wa.me/5492235130838" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green-500 text-light text-lg px-6 py-3 rounded-full hover:bg-green-800 transition duration-300 ease-in-out"
                    aria-label="Abrir conversación de WhatsApp en nueva pestaña">
                    <i className="fab fa-whatsapp text-2xl mr-2" aria-hidden="true"></i>
                    Escribir por WhatsApp
                </a>
            </div>

            {/* Contact form */}
            <p className="text-lg sm:text-xl mb-10" data-aos="fade-up" data-aos-delay="300">
                También podés completar el siguiente formulario y nos pondremos en contacto a la mayor brevedad.
            </p>

            <div className="max-w-xl mx-auto text-left" data-aos="fade-up" data-aos-delay="400">
                <form onSubmit={sendEmail} className="space-y-5" aria-describedby="form-feedback">
                    <div>
                        <label htmlFor="name" className="block mb-1">Nombre</label>
                        <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)}
                            required autoComplete="name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1">Correo electrónico</label>
                        <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)}
                            required autoComplete="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block mb-1">Teléfono</label>
                        <input type="tel" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)}
                            required autoComplete="tel"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-1">Mensaje</label>
                        <textarea id="message" name="message" rows={5} value={message}
                            onChange={e => setMessage(e.target.value)} required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                    </div>

                    <div className="flex justify-center">
                        <button type="submit"
                            className="bg-primary text-light text-lg px-6 py-3 rounded-full hover:bg-accent transition duration-300 ease-in-out cursor-pointer"
                            disabled={sending} aria-busy={sending}>
                            {sending ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </div>

                    {/* Feedback messages */}
                    {success && (
                        <p id="form-feedback" className="text-green-500 text-center mt-2" role="status"
                            aria-live="polite">
                            ¡Mensaje enviado con éxito!
                        </p>
                    )}
                    {error && (
                        <p id="form-feedback" className="text-red-500 text-center mt-2" role="alert"
                            aria-live="assertive">
                            Ocurrió un error. Intentalo más tarde.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
