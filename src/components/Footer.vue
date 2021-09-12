<template lang="pug">
footer
  .menu
    .page-box
      router-link.page-link(:to="{name:'Home'}") {{$t(`Menu.home`)}}
      router-link.page-link(:to="{name:'CardList'}") {{$t(`Menu.list`)}}
  .copyright
    p Copyright © 2021  Daniel Wu
</template>

<script>
export default {
  name: "Footer",
  methods: {
    goMember() {
      if (localStorage.getItem("account")) {
        if (this.$route.name == "Member") return;
        this.$router.push({ name: "Member" });
      } else {
        if (this.$route.name == "Signin") return;
        this.$router.push({ name: "Signin" });
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

footer
  width: 100%
  padding-top: 50px
  .menu
    width: 100%
    padding: 1rem .8rem
    box-sizing: border-box
    display: flex
    justify-content: space-between
    align-items: center
    position: relative
    &:before,&:after
      content: ''
      display: block
      width: 100%
      height: 2px
      background-color: $gray-001
      position: absolute
    &:before
      top: 0
      left: 0
    &:after
      bottom: 0
      left: 0
    figure.logo
      width: 300px
      line-height: 1
    .page-box
      .page-link
        margin: 0 1.4rem
        font-size: 1rem
        color: $gray-001
        transition: .3s
        &.router-link-active
          color: #ddd
        +hover
          color: #ddd
  .copyright
    padding: .8rem
    box-sizing: border-box
    display: flex
    justify-content: space-between
    p
      color: $gray-001
  +rwd(1280px)
    // padding-top: 50px
    .menu
      padding: 1rem .8rem
      figure.logo
        width: 200px
      .page-box
        .page-link
          margin: 0 1rem
      .social-box
        figure.icon
          width: 25px
    .copyright
      padding: .8rem
  +rwd(1080px)
    // padding-top: 50px
    .menu
      padding: 1rem 0rem
      figure.logo
        width: 160px
      .page-box
        .page-link
          margin: 0 .3rem
          font-size: 0.7em
      .social-box
        figure.icon
          width: 20px
          margin: 0 5px
    .copyright
      padding: .8rem
  +rwd(768px)
    // padding-top: 50px
    .menu
      display: none
    .copyright
      padding: .8rem
      display: block
      text-align: center
      p
        font-size: 0.75rem
        color: $gray-001
</style>
