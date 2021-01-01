<template>
  <v-snackbar
    :timeout="1000"
    v-model="show"
    :color="colorMsg"
    absolute
    center
    bottom
  >
    {{ notMsg }}
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Notification",
  data: () => ({
    show: false,
    notMsg: "",
    colorMsg: ""
  }),
  computed: {
    ...mapGetters(["messageArr"])
  },
  watch: {
    messageArr: "showNotification"
  },
  methods: {
    showNotification({ msg, color }) {
      this.show = true;
      this.notMsg = msg;
      this.colorMsg = color;
    }
  }
};
</script>
