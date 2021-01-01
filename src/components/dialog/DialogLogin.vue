<template>
  <div class="text-center">
    <v-dialog
      v-model="showDialogLogin"
      width="500"
      @click:outside="closeDialog"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Login
        </v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="name"
                    label="Login*"
                    required
                    v-on:keyup.enter="login"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="pass"
                    label="Password*"
                    type="password"
                    v-on:keyup.enter="login"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" icon @click="login">
            <v-icon>mdi-login</v-icon>
          </v-btn>
          <v-btn color="red" icon @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DialogLogin",
  data: () => ({
    name: "",
    pass: ""
  }),
  computed: {
    ...mapGetters(["showDialogLogin"])
  },
  methods: {
    ...mapActions(["loginApp", "closeDialogLogin", "openDialogLogin"]),
    login() {
      this.loginApp({ name: this.name, pass: this.pass });
      this.clear();
    },
    closeDialog() {
      //      this.$emit("closeDialogLogin", false);
      this.closeDialogLogin();
      this.clear();
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
