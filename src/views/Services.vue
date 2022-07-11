<template>
    <div id="background-1" class="">
        <the-header />
        <the-hero />
    </div>
</template>

<script>
import TheHeader from "../components/Home/TheHeader.vue";
import TheHero from "../components/Services/theHero.vue";
export default {
    components: {
        TheHeader,
        TheHero,
    },
};
</script>

<style scoped>
#background-1 {
    background: linear-gradient(
            150.52deg,
            #04151f 16.66%,
            rgba(4, 21, 31, 0.526586) 58.47%,
            rgba(4, 21, 31, 0.191211) 73.65%,
            rgba(4, 21, 31, 0) 91.09%
        ),
        url("../static/Services/backgroundServices-1.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
