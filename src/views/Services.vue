<template>
    <div id="background-1" class="">
        <the-header />
        <the-hero />
    </div>
    <div id="background-2">
        <works-details />
    </div>
    <contact />
</template>

<script>
import contact from "../components/Home/Contact.vue";
import worksDetails from "../components/Services/worksDetails.vue";
import TheHeader from "../components/Home/TheHeader.vue";
import TheHero from "../components/Services/theHero.vue";
export default {
    components: {
        contact,
        TheHeader,
        TheHero,
        worksDetails,
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

#background-2 {
    background: url("../static/Services/backgroundServices-2.jpg") fixed 50% 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
