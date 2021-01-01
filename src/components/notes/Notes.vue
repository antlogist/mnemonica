<template>
  <div>
    <template>
      <dialog-note></dialog-note>
    </template>

    <v-list>
      <v-list two-line rounded>
        <v-list-item-group v-model="selectedItem" color="black">
          <v-list-item
            class="grey lighten-4"
            v-for="(note, index) in notes"
            :key="index"
          >
            <v-list-item-avatar>
              <v-icon class="grey lighten-1" dark>
                mdi-note
              </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="note.title"></v-list-item-title>
              <v-list-item-subtitle>
                <span class="mr-2" v-if="note.cat"
                  ><v-badge inline tile :content="note.cat"></v-badge
                ></span>
                <span class="mr-2">id: {{ note.id }} </span>
                <span class="mr-2">date: {{ note.date }} </span>
                <span class="mr-2">time: {{ note.time }}</span>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-list>

    <div class="text-center my-5" v-if="currentPage < totalPages">
      <v-btn elevation="2" fab @click="onChangeCurrentPage"
        ><v-icon>mdi-reload</v-icon></v-btn
      >
    </div>

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
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DialogNote from "@/components/dialog/DialogNote";
export default {
  name: "Notes",
  data: () => ({
    selectedItem: ""
  }),
  methods: {
    ...mapActions("notes", ["fetchNotes", "changeCurrentPage", "deleteNote"]),
    ...mapActions("note", ["openDialogNote", "createNote", "fetchNote"]),
    onDeleteNote() {
      this.deleteNote(this.selectedId);
      this.clearSelected();
    },
    newNote() {
      this.createNote();
      this.clearSelected();
      this.openDialogNote(true);
      console.log(`New!!`);
    },
    readNote() {
      this.fetchNote(this.selectedId);
      this.clearSelected();
      this.openDialogNote(true);
    },
    clearSelected() {
      this.selectedItem = "";
    },
    onChangeCurrentPage() {
      this.changeCurrentPage(this.currentPage + 1);
    }
  },
  mounted() {
    this.changeCurrentPage(1);
    //    this.fetchNotes();
  },
  computed: {
    ...mapGetters("notes", ["notes", "currentPage", "totalPages"]),
    selectedId() {
      return typeof this.selectedItem !== "undefined"
        ? Number(this.notes[this.selectedItem].id)
        : 0;
    }
  },
  components: {
    DialogNote
  }
};
</script>
