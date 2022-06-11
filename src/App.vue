<template>
    <div class="background">
        <the-header />
        <the-hero />
    </div>
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

<style></style>
