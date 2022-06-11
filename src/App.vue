<template>
    <the-header />
    <the-hero />
</template>

<script>
import TheHeader from "./components/Global/TheHeader.vue";
import TheHero from "./components/Home/TheHero.vue";
export default {
    components: {
        TheHeader,
        TheHero,
    },
};
</script>
