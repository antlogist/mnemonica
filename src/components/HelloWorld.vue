<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum alias
          possimus, eveniet ullam, a reprehenderit corporis. Magni, error
          numquam impedit laudantium quod placeat, recusandae autem quas
          asperiores doloremque sapiente illo.
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data: () => ({
    notes: null
  }),
  mounted() {
    this.fetchNotes();
  },
  methods: {
    ...mapActions("notes", ["fetchNotes"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="true" lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
