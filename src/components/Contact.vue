<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

// Load EmailJS configuration from environment variables
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Form input states
const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');

// Form status flags
const sending = ref(false);
const success = ref(false);
const error = ref(false);

// Handles the form submission and sends an email via EmailJS
function sendEmail(e) {
    e.preventDefault();

    // Reset status flags
    success.value = false;
    error.value = false;
    sending.value = true;

    // Basic input validation
    if (!name.value || !email.value || !phone.value || !message.value) {
        error.value = true;
        sending.value = false;
        return;
    }

    // EmailJS template parameters
    const templateParams = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
    };

    // Send the email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then(() => {
            // On success: show confirmation and clear form inputs
            success.value = true;
            name.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
        })
        .catch(() => {
            // On failure: show error message
            error.value = true;
        })
        .finally(() => {
            // Reset sending flag
            sending.value = false;
        });
}
</script>

<template>
    <section id="contacto" class="scroll-mt-30 text-accent text-center m-10">
        <h1 class="text-3xl sm:text-4xl font-bold mb-10" data-aos="zoom-in">
            CONTACTO
        </h1>

        <!-- WhatsApp contact button -->
        <div class="mb-10" data-aos="fade-up" data-aos-delay="200">
            <p class="text-lg sm:text-xl mb-10">
                Podés enviarnos un mensaje directo por WhatsApp haciendo clic en el botón.
            </p>
            <a href="https://wa.me/5492235130838" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center justify-center bg-green-500 text-light text-lg px-6 py-3 rounded-full hover:bg-green-800 transition duration-300 ease-in-out"
                aria-label="Abrir conversación de WhatsApp en nueva pestaña">
                <i class="fab fa-whatsapp text-2xl mr-2" aria-hidden="true"></i>
                Escribir por WhatsApp
            </a>
        </div>

        <!-- Contact form -->
        <p class="text-lg sm:text-xl mb-10" data-aos="fade-up" data-aos-delay="300">
            También podés completar el siguiente formulario y nos pondremos en contacto a la mayor brevedad.
        </p>

        <div class="max-w-xl mx-auto text-left" data-aos="fade-up" data-aos-delay="400">
            <form @submit="sendEmail" class="space-y-5" aria-describedby="form-feedback">
                <div>
                    <label for="name" class="block mb-1">Nombre</label>
                    <input type="text" id="name" name="name" v-model="name" required autocomplete="name"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>

                <div>
                    <label for="email" class="block mb-1">Correo electrónico</label>
                    <input type="email" id="email" name="email" v-model="email" required autocomplete="email"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>

                <div>
                    <label for="phone" class="block mb-1">Teléfono</label>
                    <input type="tel" id="phone" name="phone" v-model="phone" required autocomplete="tel"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>

                <div>
                    <label for="message" class="block mb-1">Mensaje</label>
                    <textarea id="message" name="message" rows="5" v-model="message" required
                        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                </div>

                <div class="flex justify-center">
                    <button type="submit"
                        class="bg-primary text-light text-lg px-6 py-3 rounded-full hover:bg-accent transition duration-300 ease-in-out cursor-pointer"
                        :disabled="sending" :aria-busy="sending">
                        {{ sending ? 'Enviando...' : 'Enviar Mensaje' }}
                    </button>
                </div>

                <!-- Feedback messages -->
                <p v-if="success" id="form-feedback" class="text-green-500 text-center mt-2" role="status"
                    aria-live="polite">
                    ¡Mensaje enviado con éxito!
                </p>
                <p v-if="error" id="form-feedback" class="text-red-500 text-center mt-2" role="alert"
                    aria-live="assertive">
                    Ocurrió un error. Intentalo más tarde.
                </p>
            </form>
        </div>
    </section>
</template>
