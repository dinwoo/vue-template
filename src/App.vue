<template lang="pug">
#app
  component(:is="$route.meta.layout")
  .loading-mask(v-if="isLoading")
    figure.loding-icon
      img(src="@/assets/images/loading-icon.svg")
    
</template>

<script>
import { mapState } from "vuex";
import HomeLayout from "@/layouts/HomeLayout";
import DefaultLayout from "@/layouts/DefaultLayout";
export default {
  components: {
    HomeLayout,
    DefaultLayout,
  },
  data() {
    return {};
  },
  metaInfo() {
    return {
      title: this.$t(`Meta.title`),
      // title: this.$route.meta.title,
      meta: [
        {
          name: "title",
          content: this.$t(`Meta.title`),
        },
        {
          name: "description",
          content: this.$t(`Meta.description`),
        },
        {
          name: "keyword",
          content: this.$t(`Meta.keyword`),
        },
        {
          name: "og:title",
          content: this.$t(`Meta.title`),
        },
        {
          name: "og:description",
          content: this.$t(`Meta.description`),
        },
      ],
    };
  },
  computed: {
    ...mapState(["isLoading", "lang", "screenWidth"]),
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        this.$store.commit("SET_SCREEN_WIDTH", window.screenWidth);
        // that.screenWidth = window.screenWidth;
      })();
    };
  },
};
</script>

<style lang="sass">
@import "@/assets/sass/var.sass"
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;600&display=swap');

// @font-face
//   font-family: 'SourceHanSerif'
//   src: url("assets/fonts/SourceHanSerif-Regular.ttc") format("truetype")


*
  padding: 0
  margin: 0
  font-family: Axininca,'Noto Serif TC', serif

img
	width: 100%
	vertical-align: middle

a
	color: #000
	text-decoration: none

html
  font-size: 20px
  +rwd(768px)
    font-size: 16px

ul.paginate-box
  width: 100%
  margin: 2rem 0
  list-style: none
  display: flex
  justify-content: center
  li
    margin: 0 .5rem
    a
      color: $gray-001
    &.active
      a
        color: $gray-001
</style>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.loading-mask
  width: 100%
  height: 100%
  position: fixed
  top: 0
  left: 0
  background-color: rgba(#000,.7)
  z-index: 101
  figure.loding-icon
    width: 50px
    +pstc5
</style>
