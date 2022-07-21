<template lang="pug">
.loading-back
  .loading-pulse
</template>

<script>
export default {
  components: {},
  data: () => ({}),
  computed: {},
  mounted() {},
  methods: {},
}
</script>

<style lang="sass" scoped>
$base-line-height: 24px
$off-white: rgba(#fff, 0.2)
$pulse-duration: 750ms

@keyframes pulse
  50%
    background: #fff

.loading-back
  position: fixed
  z-index: 1000
  top: 0
  width: 100vw
  height: 100vh
  background-color: #333333
  opacity: 0.5
  display: flex
  justify-content: center
  align-items: center

.loading-pulse
  position: relative
  width: ($base-line-height / 4)
  height: $base-line-height
  background: $off-white
  animation: pulse $pulse-duration infinite
  animation-delay: ($pulse-duration / 3)
  &:before, &:after
    content: ''
    position: absolute
    display: block
    height: ($base-line-height / 1.5)
    width: ($base-line-height / 4)
    background: $off-white
    top: 50%
    transform: translateY(-50%)
    animation: pulse $pulse-duration infinite
  &:before
    left: -($base-line-height / 2)
  &:after
    left: ($base-line-height / 2)
    animation-delay: ($pulse-duration / 1.5)
</style>
