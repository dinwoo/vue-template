<template lang="pug">
header
  router-link.page-link(:to="{name:'Home'}") Home
  .menu
    .ham(@mouseenter="showMenu=true" @mouseleave="showMenu=false")
    .sub-menu(v-if="showMenu" @mouseenter="showMenu=true" @mouseleave="showMenu=false")
      .menu-box
        .lang-box
          .lang(@click="setLang('en')" :class="{'active':lang=='en'}") En
          .lang(@click="setLang('ch')" :class="{'active':lang=='ch'}") Ch
        .svg_box
          include ../assets/pug/fb.pug
        router-link.page-link(:to="{name:'CardList'}") {{$t(`Menu.list`)}}
</template>

<script>
import { mapState } from "vuex";
import { gsap } from "gsap";

export default {
  name: "Header",
  data() {
    return {
      isMobile: false,
      showMenu: false,
      sceneArr: [],
    };
  },
  computed: {
    ...mapState(["lang", "screenWidth"]),
  },
  beforeDestroy() {
    this.sceneArr.map((scene) => {
      this.$scrollmagic.removeScene(scene);
    });
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {
    // 儲存切換的語系
    setLang(value) {
      this.$store.commit("SET_LANG", value);
      this.$i18n.locale = value;
      localStorage.setItem("footmark-lang", value);
      this.$router.go(0);
    },
    setAnimate() {
      this.sceneArr[0] = this.$scrollmagic
        .scene({
          triggerElement: "body",
          triggerHook: 0,
          offset: 120,
          reverse: true,
        })
        .on("enter", function() {
          gsap.to("header", {
            opacity: 0,
          });
        })
        .on("leave", function() {
          gsap.to("header", {
            opacity: 1,
          });
        });
      // .addIndicators({ name: "header" });

      this.sceneArr.forEach((scene) => {
        this.$scrollmagic.addScene(scene);
      });
    },
  },
  watch: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

header
  width: 100%
  padding: 40px 50px
  box-sizing: border-box
  display: flex
  justify-content: space-between
  position: fixed
  top: 0
  left: 0
  z-index: 100
  figure.logo
    width: 400px
  .menu
    display: flex
    align-items: center
    position: relative
    .ham
      width: 36px
      height: 25px
      margin-left: 40px
      background-image: linear-gradient($gray-001 0%,$gray-001 calc(0% + 4px),transparent calc(0% + 4px),transparent calc(50% - 2px),$gray-001 calc(50% - 2px),$gray-001 calc(50% + 2px),transparent calc(50% + 2px),transparent calc(100% - 4px),$gray-001 calc(100% - 4px),$gray-001 100%)
      opacity: .6
      cursor: pointer
      transition: .3s
      +hover
        background-image: linear-gradient(#ddd 0%,#ddd calc(0% + 4px),transparent calc(0% + 4px),transparent calc(50% - 2px),#ddd calc(50% - 2px),#ddd calc(50% + 2px),transparent calc(50% + 2px),transparent calc(100% - 4px),#ddd calc(100% - 4px),#ddd 100%)
    .sub-menu
      padding-top: 40px
      position: absolute
      right: 0px
      bottom: 10px
      transform: translateY(100%)
      .menu-box
        width: 100px
        padding: 50px 50px
        border-radius: 1rem
        background-color: rgba($gray-001,.75)
        text-align: center
      .lang-box
        width: 100%
        .lang
          margin: 0 10px
          font-size: 1rem
          color: $gray-001
          cursor: pointer
          transition: .3s
          +dib
          &.active,&:hover
            color: #ddd
      .svg_box
        width: 35px
        margin: 10px auto
        cursor: pointer
        fill: $gray-001
        transition: .3s
        +hover
          fill: #ddd
      .page-link
        display: block
        margin: 20px 0
        font-size: 1rem
        letter-spacing: 2px
        color: $gray-001
        cursor: pointer
        transition: .3s
        &:hover
          color: #ddd
        &.router-link-active
          color: #ddd
  +rwd(960px)
    padding: 40px 20px
    figure.logo
      width: 300px
    .menu
      .ham
        margin-left: 20px
  +rwd(768px)
    padding: 20px 15px
    figure.logo
      width: 50vw
      // width: 400px
    .menu
      .lang
        display: none
      .svg_box
        display: none
      .ham
        width: 30px
        height: 20px
        background-image: linear-gradient($gray-001 0%,$gray-001 calc(0% + 2px),transparent calc(0% + 2px),transparent calc(50% - 2px),$gray-001 calc(50% - 1px),$gray-001 calc(50% + 1px),transparent calc(50% + 2px),transparent calc(100% - 2px),$gray-001 calc(100% - 2px),$gray-001 100%)
      .sub-menu
        .menu-box
          padding: 20px 30px
          background-color: rgba(#ddd,.9)
          position: relative
        .page-link
          display: block
          margin: 20px 0
          font-size: 1rem
          letter-spacing: 2px
          color: $gray-001
</style>
