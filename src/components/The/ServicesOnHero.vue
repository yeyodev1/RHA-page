<template>
  <div class="w-full text">
    <p :id="getId" class="text-center sm:text-3xl text-whiteRHA font-principal">
      {{ service }}
    </p>
  </div>
</template>

<script>
export default {
  //PROPS TO WRITE THE SERVICES THAT ARE PROVIDED
  props: {
    service: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    getId() {
      return this.id;
    },
  },
};
</script>

<style scoped>
.text {
  overflow-wrap: break-word;
}
</style>
