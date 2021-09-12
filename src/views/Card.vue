<template lang="pug">
article.card-list
  CardList(v-if="!isLoading" :cardData="cardData" routeName="CourseInfo")

</template>

<script>
import { mapState, mapActions } from "vuex";
import CardList from "@/components/CardList";
import Paginate from "vuejs-paginate";

export default {
  name: "Card",
  components: { CardList, Paginate },
  props: {},
  mixins: [],
  data() {
    return {
      cardData: [
        {
          id: 1,
          dateTime: "2021-09-12",
          title: "title",
          description: "description",
        },
      ],
    };
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
