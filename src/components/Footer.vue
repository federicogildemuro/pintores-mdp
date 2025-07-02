<script setup>
import navLinks from '@/data/navLinks.js';
import socialLinks from '@/data/socialLinks.js';
</script>

<template>
    <footer class="bg-primary text-light grid grid-cols-1 sm:grid-cols-3 gap-5 p-10">
        <!-- Navigation Links -->
        <nav aria-label="Enlaces del sitio" class="flex flex-col gap-5 text-center sm:text-start">
            <a v-for="(link, index) in navLinks" :key="index" :href="link.href"
                class="hover:text-accent transition-all duration-500 ease-in-out">
                {{ link.label }}
            </a>
        </nav>

        <!-- Social Media Links -->
        <nav aria-label="Redes sociales" class="flex flex-col gap-5 text-center">
            <h2 class="text-xl">SEGUINOS EN NUESTRAS REDES</h2>
            <ul class="flex justify-center gap-5">
                <li v-for="(link, index) in socialLinks" :key="index">
                    <a :href="link.href" target="_blank" rel="noopener noreferrer"
                        class="hover:text-accent transition-all duration-500 ease-in-out" :aria-label="link.label">
                        <i :class="`${link.iconClass} text-2xl`" aria-hidden="true" />
                        <span class="sr-only">{{ link.name }}</span>
                    </a>
                </li>
            </ul>
        </nav>

        <!-- Copyright Notice -->
        <div class="flex flex-col gap-5 text-center sm:text-end">
            <p>© 2025 PINTORES MDP</p>
        </div>
    </footer>
</template>
