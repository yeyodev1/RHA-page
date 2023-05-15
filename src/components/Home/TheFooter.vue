<template>
  <div class="bg-grayRHA pb-6">
    <div class="max-w-7xl mx-auto">
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
            <a href="https://goo.gl/maps/aRkdpF6AVSBqgkHq6" target="_blank">
              <button class="flex flex-row font-principal font-thin">
                <location />
                <div class="flex pl-2">
                  <div class="mr-1">Oficina</div>
                  <div>Principal</div>
                </div>
              </button>
            </a>
          </div>
          <div class="w-full px-3 sm:px-4 flex pt-6 sm:pt-7">
            <a
              href="https://www.instagram.com/reyesehijos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram class="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/reyesehijosasociados/">
              <Facebook class="w-5 h-5 pl-4" />
            </a>
          </div>
        </div>
      </div>
      <div
        class="w-full bg-grayRHA flex justify-between pt-12 sm:pt-24 px-1 sm:px-7 max-w-7xl"
      >
        <div class="flex justify-center items-center">
          <div class="flex justify-center items-center mr-3">
            <Yeyodev />
          </div>

          <a href="https://www.yeyo.dev/" target="_blank">
            <p class="text-xs sm:text-sm font-principal">
              With love, Yeyodev <br />
              2022
            </p>
          </a>
        </div>
        <div class="flex justify-center items-center">
          <div class="flex justify-center items-center">
            <figure class="w-10 h-10 flex justify-center items-center">
              <img src="../../static/senae-logo.png" alt="" />
            </figure>
          </div>
          <div>
            <p class="text-xs sm:text-sm font-principal">
              autorizados por ADUANA DEL ECUADOR
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ICONS AS ASV
import Copy from "../Global/Icons/Copyright.vue";
import Yeyodev from "../Global/Icons/Yeyodev.vue";
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
    Yeyodev,
    Copy,
  },
  data: () => ({}),
};
</script>
