<template lang="pug">
article.home
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {},
  props: {},
  mixins: [],
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading"]),
  },
  created() {},
  mounted() {
    this.getApi()
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        console.log("fail");
      });
  },
  methods: {
    ...mapActions(["getApi"]),
  },
  watch: {},
};
</script>
