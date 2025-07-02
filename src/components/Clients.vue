<script setup>
import clientsLogos from '@/data/clientsLogos.js';
</script>

<template>
    <section class="bg-gradient-to-b from-light to-primary text-accent text-center p-10 overflow-hidden">
        <h2 class="text-3xl sm:text-4xl font-bold mb-10 text-center" data-aos="zoom-in">NUESTROS CLIENTES</h2>

        <p class="mb-10" data-aos="fade-up" data-aos-delay="200">
            A lo largo de nuestra trayectoria, hemos trabajado junto a desarrolladores,
            constructoras, estudios de arquitectura, industrias y clientes particulares que valoran la
            eficiencia, el compromiso y la calidad en cada detalle. Estas son algunas de las <strong>empresas y
                profesionales
                que confiaron en Pintores MDP</strong> para llevar adelante sus
            proyectos con resultados de alto nivel.
        </p>

        <div class="whitespace-nowrap animate-scroll flex items-center gap-10">
            <template v-for="(logo, index) in clientsLogos" :key="`logo1-${index}`">
                <img :src="logo" alt="Logo cliente" class="h-12 w-auto object-contain p-2" />
            </template>
            <template v-for="(logo, index) in clientsLogos" :key="`logo2-${index}`">
                <img :src="logo" alt="Logo cliente" class="h-12 w-auto object-contain p-2" />
            </template>
        </div>

    </section>
</template>

<style scoped>
@keyframes scroll {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}

.animate-scroll {
    animation: scroll 15s linear infinite;
}
</style>
