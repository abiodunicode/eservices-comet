<template>
  <div id="app" class="pa-15">
    <v-card class="pa-5 mx-auto" elevation="6" outlined shaped width="500">
      <v-card-text class="mb-0">
        <p class="text-h6 text--primary text-center">Login</p>
      </v-card-text>
      <div v-if="user.length <= 0">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :counter="5"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>

          <v-checkbox
            v-model="checkbox"
            v-show="setDisable"
            label="Do you agree?"
            required
          ></v-checkbox>

          <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">
            Login
          </v-btn>
        </v-form>
      </div>
      <div class="text--primary mt-3">
        <p>
          Don't have an account yet ?<router-link
            @click.native="Registration"
            to="/Registration"
          >
            Sign Up
          </router-link>
          <v-divider class="" inset vertical></v-divider>
          <router-link @click.native="Registration" to="/Dashboard"> Home </router-link>
        </p>
      </div>
    </v-card>
  </div>
</template>

<script>
//import { axios } from "vue/types/umd";

export default {
  data: () => ({
    valid: true,
    email: "",
    password: "",

    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 5) || "Name must be greater than 5 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],

    checkbox: false,
  }),

  created() {
    this.isAuth();
  },
  methods: {
    isAuth() {
      if (user.lenght > 0) {
        this.$router.push({ name: "Dashboard" });
      }
    },
    login() {
      let val = this.$refs.form.validate();

      if (!val) {
        return;
      }
      // const data = JSON.stringify({
      //     email: this.email,
      //     password:this.password,
      //     });

      const datas = {
        email: this.email,
        password: this.password,
      };

      axios
        .post("api/login", datas)
        .then(() => {
          this.$router.push({ name: "Dashboard" });
        })
        .catch((error) => {});
    },
  },
};
</script>
