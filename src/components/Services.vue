<script setup>
import { ref } from 'vue';
import services from '@/data/services.js';

const activeIndex = ref(null);
const toggle = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
    <section id="servicios" class="scroll-mt-30 text-accent text-center m-10">
        <h2 class="text-3xl sm:text-4xl font-bold mb-10 text-center" data-aos="zoom-in">SERVICIOS</h2>

        <div class="text-lg sm:text-xl text-center">
            <p class="mb-5" data-aos="fade-up" data-aos-delay="200">
                Trabajamos con <strong>constructoras, industrias, estudios de arquitectura, comercios y
                    particulares</strong>.
            </p>
            <p class="mb-5" data-aos="fade-up" data-aos-delay="400">
                Operamos en <strong>Mar del Plata y zonas aledañas</strong>, y evaluamos
                proyectos fuera de esa área
                según
                alcance y disponibilidad.
            </p>
        </div>

        <div v-for="(item, index) in services" :key="item.title" class="border-b border-primary max-w-6xl mx-auto">
            <button @click="toggle(index)"
                class="w-full text-left py-5 text-xl font-semibold flex justify-between items-center cursor-pointer">
                {{ item.title }}
                <span class="text-2xl">
                    {{ activeIndex === index ? '-' : '+' }}
                </span>
            </button>

            <transition name="accordion">
                <div v-if="activeIndex === index" class="pb-5 text-justify text-lg">
                    {{ item.content }}
                </div>
            </transition>
        </div>
    </section>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
    transition: max-height .3s ease, opacity .3s ease;
    overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
    max-height: 0;
    opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
    max-height: 300px;
    opacity: 1;
}
</style>
