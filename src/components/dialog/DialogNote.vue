<template>
  <v-dialog
    v-model="isDialogNoteShow"
    @click:outside="closeDialog"
    fullscreen
    hide-overlay
  >
    <v-card>
      <v-toolbar dark color="primary">
        <template>
          <v-btn icon dark @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Note</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="saveNote">
              Save
            </v-btn>
          </v-toolbar-items>
        </template>
      </v-toolbar>
      <v-container>
        <template>
          <v-edit-dialog
            large
            persistent
            @close="editClosed('isEditTitle')"
            @open="editOpened('isEditTitle')"
            :return-value.sync="currentTitle"
          >
            <v-card-title>{{ currentTitle }}</v-card-title>

            <template v-slot:input>
              <v-text-field
                v-model="currentTitle"
                label="Edit"
                single-line
                counter
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>
        
        <template>
          <v-edit-dialog
            persistent
            @close="editClosed('isEditExcerpt')"
            @open="editOpened('isEditExcerpt')"
            :return-value.sync="currentExcerpt"
            large
          >
            <v-card-text>
              <div v-html="currentExcerpt"></div>
            </v-card-text>

            <template v-slot:input>
              <v-textarea
                v-model="currentExcerpt"
                label="Edit"
                counter
              ></v-textarea>
            </template>
          </v-edit-dialog>
        </template>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DialogNote",
  data: () => ({
    isEditTitle: false,
    isEditExcerpt: false,
  }),
  computed: {
    ...mapGetters("note", ["isDialogNoteShow", "currentNote"]),
    currentTitle: {
      get() {
        return this.currentNote.title ? this.currentNote.title.rendered : "";
      },
      set(title) {
        this.changeTitle(title);
      }
    },
    currentExcerpt: {
      get() {
        return this.currentNote.excerpt ? this.currentNote.excerpt.rendered : "";
      },
      set(excerpt) {
        this.changeExcerpt(excerpt);
      }
    }
  },
  methods: {
    ...mapActions("note", ["closeDialogNote", "changeTitle", "changeExcerpt", "saveNote"]),
    closeDialog() {
      this.closeDialogNote(false);
    },
    editOpened(data) {
      this.[data] = true;
    },
    editClosed(data) {
      this.[data] = false;
    }
  }
};
</script>
