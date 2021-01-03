<template>
  <v-bottom-navigation app>
    <v-btn @click="newArea">
      <span>New</span>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "MapBottomNav",
  methods: {
    newArea() {
      console.log("area");
    }
  }
};
</script>
