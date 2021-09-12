<template lang="pug">
.card-list-wrapper
  router-link.card-item(
    v-for="card in cardData" :key="card.id"
    :to="{name:routeName,params:{id:card.id}}"
  )
    .date {{card.dateTime}}
    .card-pic(:style="`background-image: url('${card.img}')`")
    .card-title {{card.title}}
    .card-description {{card.description}}

</template>

<script>
export default {
  name: "CardList",
  components: {},
  props: {
    cardData: Array,
    routeName: String,
  },
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/var.sass"

.card-list-wrapper
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  .card-item
    width: 46%
    margin-bottom: 2rem
    display: block
    .date
      margin-bottom: 1rem
      font-size: 1.4rem
      color: $gray-001
    .card-pic
      // background-image: url('../assets/images/news-example.jpg')
      width: 100%
      padding-bottom: 63.701923%
      border-radius: 10px
      background-size: cover
      background-position: center center
      background-repeat: no-repeat
      position: relative
      +before
        width: 100%
        height: 100%
        border-radius: 10px
        background-color: rgba(#000,.2)
        transition: .3s
        position: absolute
        top: 0
        left: 0
      +hover
        &:before
          background-color: rgba(#000,0)
    .card-title
      margin: 1.2rem 0
      font-size: 1.4rem
      color: $gray-001
    .card-description
      font-size: 1rem
      line-height: 1.5
      color: $gray-001
      display: -webkit-box
      -webkit-line-clamp: 2
      -webkit-box-orient: vertical
      white-space: normal
      overflow: hidden
  +rwd(768px)
    .card-item
      width: 100%
      .date
      .card-pic
      .card-title
      .card-description
</style>
