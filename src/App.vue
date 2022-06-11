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

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap");
</style>
