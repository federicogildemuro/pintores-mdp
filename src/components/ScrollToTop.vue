<script setup>
import { ref, onMounted } from 'vue';

// Button visibility
const showButton = ref(false)
function handleScroll() {
    showButton.value = window.scrollY > 200
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
</script>

<template>
    <button v-show="showButton" @click="scrollToTop"
        class="bg-primary text-light fixed bottom-5 right-5 border-2 px-4 py-3 rounded-full hover:bg-accent transition duration-300 ease-in-out cursor-pointer"
        title="Ir arriba" aria-label="Scroll to top" :aria-hidden="!showButton">
        <i class="fas fa-arrow-up" aria-hidden="true" />
    </button>
</template>
