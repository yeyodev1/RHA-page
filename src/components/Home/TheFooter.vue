<template>
    <div class="bg-grayRHA">
        <div class="max-w-7xl">
            <div class="w-full bg-grayRHA flex-col px-8">
                <div class="w-4/5 border-l border-secondaryRHA">
                    <div class="w-full pl-3 sm:pl-4 pb-5 sm:pb-7">
                        <a href="tel:+593958995566">
                            <button class="flex font-principal font-thin">
                                <Phone />
                                +593958995566
                            </button>
                        </a>
                    </div>
                    <div class="w-full pl-3 sm:pl-4">
                        <a
                            href="https://www.google.com/maps/place/Estatua+de+la+Libertad/@40.6892534,-74.0466891,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25090129c363d:0x40c6a5770d25022b!8m2!3d40.6892494!4d-74.0445004?hl=es"
                            target="_blank"
                        >
                            <button
                                class="flex flex-row font-principal font-thin"
                            >
                                <location />
                                <div class="flex">
                                    <div class="mr-1">Oficina</div>
                                    <div>Principal</div>
                                </div>
                            </button>
                        </a>
                    </div>
                    <div class="w-full px-3 sm:px-4 flex pt-6 sm:pt-7">
                        <Instagram class="w-5 h-5" />
                        <Facebook class="w-5 h-5 pl-4" />
                    </div>
                </div>
            </div>
            <div
                class="w-full bg-grayRHA flex justify-between pt-12 sm:pt-24 px-1 sm:px-7 max-w-7xl"
            >
                <div class="flex justify-center items-center">
                    <div class="flex justify-center items-center">
                        <Maverick />
                    </div>

                    <a href="https://www.somosmaverick.com/">
                        <p class="text-xs sm:text-sm font-principal">
                            With love, Maverick <br />
                            2022
                        </p>
                    </a>
                </div>
                <div class="flex justify-center items-center">
                    <div class="flex justify-center items-center">
                        <Copy />
                    </div>
                    <p class="text-xs sm:text-sm font-principal">
                        Todos los derechos reservados
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// ICONS AS ASV
import Copy from "../Global/Icons/Copyright.vue";
import Maverick from "../Global/Icons/Maverick.vue";
import Facebook from "../Global/Icons/Facebook.vue";
import Instagram from "../Global/Icons/Instagram.vue";
import Location from "../Global/Icons/Location.vue";
import Phone from "../Global/Icons/Phone.vue";
export default {
    components: {
        Phone,
        Location,
        Facebook,
        Instagram,
        Maverick,
        Copy,
    },
    data: () => ({}),
};
</script>
