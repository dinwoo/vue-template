<template lang="pug">
.default-wrapper
  Header
  router-view
  Footer
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Default",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.default-wrapper
  width: 100%
  padding: 0 50px
  font-size: 20px
  box-sizing: border-box
  +rwd(768px)
    font-size: 16px
    padding: 0 2rem

article
  padding-top: 115px
</style>
