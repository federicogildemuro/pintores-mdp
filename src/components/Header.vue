<script setup>
import { ref, onMounted } from 'vue';
import navLinks from '@/data/navLinks.js';
import NavLink from '@/components/NavLink.vue';

// Menu visibility
const isMenuOpen = ref(false);
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
};

// Active section
const activeSection = ref('');
const sectionIds = navLinks.map(link => link.label.toLowerCase());
onMounted(() => {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id;
                }
            });
        },
        { threshold: 0.6 }
    );

    sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
});
</script>

<template>
    <header class="bg-primary text-light fixed top-0 left-0 w-full h-30 z-50 px-10">
        <div class="w-full h-full flex items-center justify-between">
            <!-- Logo -->
            <a href="#inicio" class="shrink-0 hover:scale-110 transition-all duration-500 ease-in-out">
                <img src="@/assets/logo.jpg" alt="Logo de Pintores MDP" class="h-24" />
            </a>

            <!-- Hamburger icon -->
            <button @click="toggleMenu" class="text-2xl sm:hidden" aria-label="Toggle menu"
                aria-expanded="isMenuOpen.toString()">
                <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'" aria-hidden="true" />
            </button>

            <!-- Navigation Menu -->
            <nav :class="[
                'bg-primary absolute top-full left-0 w-full sm:static sm:block sm:w-auto',
                isMenuOpen ? 'block' : 'hidden'
            ]" role="navigation" aria-label="Main menu">
                <ul class="flex flex-col items-center text-center sm:flex-row gap-5 sm:gap-10 p-5 sm:p-0">
                    <li v-for="(link, index) in navLinks" :key="index">
                        <NavLink :href="link.href" :label="link.label"
                            :active="activeSection === link.label.toLowerCase()" @navigate="isMenuOpen = false" />
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
