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
    background: linear-gradient(
            150.52deg,
            #04151f 16.66%,
            rgba(4, 21, 31, 0.526586) 58.47%,
            rgba(4, 21, 31, 0.191211) 73.65%,
            rgba(4, 21, 31, 0) 91.09%
        ),
        url("./assets/Images/background.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
