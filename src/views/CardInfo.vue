<template lang="pug">
article.card-info
  CardInfo(v-if="!isLoading" :cardData="course.list" routeName="CourseInfo")

</template>

<script>
import { mapState, mapActions } from "vuex";
import CardInfo from "@/components/CardInfo";

export default {
  name: "CardInfo",
  components: { CardInfo },
  props: {},
  mixins: [],
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading"]),
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions([]),
  },
  watch: {},
};
</script>
