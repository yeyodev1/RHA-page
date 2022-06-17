<template>
    <div id="background" class="w-full mx-auto bg-no-repeat bg-center bg-cover">
        <the-header />
        <the-hero />
    </div>
</template>

<script>
import TheHeader from "./components/Home/TheHeader.vue";
import TheHero from "./components/Home/TheHero.vue";
export default {
    components: {
        TheHeader,
        TheHero,
    },
};
</script>

<style scoped>
#background {
    background-image: url("./assets/Images/background.png");
}
</style>
