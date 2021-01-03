<template>
  <v-bottom-navigation app>
    <v-btn @click="newNote">
      <span>New</span>
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <template v-if="typeof selectedItem == 'number'">
      <v-btn @click="readNote">
        <span>Read</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn @click="onDeleteNote">
        <span>Delete</span>
        <v-icon>mdi-minus</v-icon>
      </v-btn>
    </template>
  </v-bottom-navigation>
</template>

<script>
export default {
 name: "MapBottomNav" 
}
</script>
