<script setup>
defineProps({
    href: String,
    label: String,
    active: Boolean,
});

const emit = defineEmits(['navigate']);
</script>

<template>
    <a :href="href" @click="emit('navigate')" :class="[
        'pb-2 border-b-2 border-transparent transition-all duration-500 ease-in-out',
        active ? 'text-accent hover:border-accent' : 'text-light hover:text-accent hover:border-accent'
    ]" :aria-current="active ? 'page' : null">
        {{ label }}
    </a>
</template>
