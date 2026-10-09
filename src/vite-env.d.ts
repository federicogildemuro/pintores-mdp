/// <reference types="vite/client" />

// EmailJS configuration, see .env.example
interface ImportMetaEnv {
    readonly VITE_EMAILJS_SERVICE_ID: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
