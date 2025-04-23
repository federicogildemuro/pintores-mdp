<script setup>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import ScrollToTop from './components/ScrollToTop.vue';
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
