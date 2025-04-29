<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import ScrollToTop from './components/ScrollToTop.vue';

onMounted(() => {
    AOS.init({
        duration: 1500,
        once: true,
    });
});
</script>

<template>
    <Header />

    <main>
        <Hero />
        <About />
        <Contact />
    </main>

    <Footer />

    <ScrollToTop />
</template>
