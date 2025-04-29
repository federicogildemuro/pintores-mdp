<script setup>
import { ref, onMounted } from 'vue';
import NavLink from './NavLink.vue';

// State to manage the menu visibility
const isMenuOpen = ref(false);
// Function to toggle the menu visibility
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
};

// State to manage the active section
const activeSection = ref('');
// Array of section IDs to observe
const sectionIds = ['inicio', 'nosotros', 'contacto'];
// Add Intersection Observer to track the active section
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

            <!-- Hamburger icon (only visible on small screens) -->
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
                    <li>
                        <NavLink href="#inicio" text="INICIO" :active="activeSection === 'inicio'"
                            @navigate="isMenuOpen = false" />
                    </li>

                    <li>
                        <NavLink href="#nosotros" text="NOSOTROS" :active="activeSection === 'nosotros'"
                            @navigate="isMenuOpen = false" />
                    </li>

                    <li>
                        <NavLink href="#contacto" text="CONTACTO" :active="activeSection === 'contacto'"
                            @navigate="isMenuOpen = false" />
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
