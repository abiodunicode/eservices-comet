<template>
  <div>
    <v-app id="inspire">
      <div v-if="!['Login', 'Registration', 'Tests', 'Home'].includes($route.name)">
        <v-navigation-drawer v-model="drawer" app>
          <v-list-item>
            <v-list-item-content>
              <v-img
                lazy-src="https://nigerian-shipping.org/wp-content/uploads/2021/04/comet-590x357.png"
                height="40"
                width="250"
                contain
                src="https://nigerian-shipping.org/wp-content/uploads/2021/04/comet-590x357.png"
              ></v-img>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <div v-if="user">
            <v-list dense nav>
              <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <admin-bar />
            </v-list>
          </div>
          <div v-else>
            <v-list dense nav>
              <v-list-item v-for="item in items2" :key="item.title" :to="item.to" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>

          <template v-slot:append>
            <div v-if="user" class="pa-2">
              <v-btn @click.prevent="logout" block>
                <v-icon>mdi-logout</v-icon>
                Logout
              </v-btn>
            </div>
            <div v-else class="pa-2">
              <v-btn @click.prevent="logout" block>
                <v-icon>mdi-login</v-icon>
                Login
              </v-btn>
            </div>
          </template>
        </v-navigation-drawer>

        <v-app-bar
          app
          prominent
          color="primary"
          dark
          src="https://www.container-xchange.com/wp-content/uploads/2019/07/container-terminal-classification-2048x1055.jpg"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
            ></v-img>
          </template>

          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

          <v-app-bar-title class="mt-6"
            ><div class="mt-12">Dashboard</div>
          </v-app-bar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon @click="toggleIsDark">mdi-weather-night </v-icon>
          </v-btn>

          <v-menu
            v-if="user"
            :close-on-content-click="false"
            :nudge-width="150"
            max-width="300"
            offset-x
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-account-circle</v-icon>
              </v-btn>
            </template>

            <v-card class="mt-8">
              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title
                      ><div v-if="user" class="mt-12">
                        Welcome {{ user.first_name }}
                      </div></v-list-item-title
                    >
                    <v-list-item-subtitle></v-list-item-subtitle>
                    <v-list-item-subtitle class="mt-3">My Account</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                      <v-icon>mdi-logout</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>
            </v-card>
          </v-menu>
        </v-app-bar>
      </div>
      <v-main>
        <div class="ma-6">
          <router-view></router-view>
        </div>
      </v-main>
    </v-app>

    <!-- <v-overlay
      :opacity="2"
      :value="overlay"
      :z-index="zIndex"
    >
      <v-progress-circular indeterminate size="64">
        Loading...
      </v-progress-circular>
    </v-overlay> -->
  </div>
</template>

<script>
//import { axios } from 'vue/types/umd';

//import Enquiries from '@/components/SideBar/Enquiries.vue';
export default {
  components: {
    enquiry: require("./Enquiries.vue").default,
    "admin-bar": require("./Admin-bar.vue").default,
  },
  data: () => ({
    user: null,
    overlay: true,
    return: {
      isDark: false,
      iconIndex: 0,
      icons: ["mdi-weather-sunny", "mdi-weather-night"],
    },
    drawer: null,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
      { title: "Login For Detials", icon: "mdi-lock", to: "/Registration" },
      { title: "Enquiries", icon: "mdi-information-outline", to: "/Enquiries" },
      { title: "Shpping Invoice", icon: "mdi-receipt", to: "/Invoice_estimate" },
      { title: "Payment", icon: "mdi-cash", to: "/Payment" },
      { title: "Admin", icon: "mdi-settings", to: "/Admin" },
      { title: "Admins", icon: "mdi-settings", to: "/Admins" },
    ],
    items2: [
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
      { title: "Login For Detials", icon: "mdi-lock", to: "/Registration" },
    ],
  }),

  computed: {
    icon() {
      return this.icons[this.iconIndex];
    },
  },

  methods: {
    logout() {
      axios.post("/api/logout").then(() => {
        this.$router.push({ name: "Home" });
      });
    },

    toggleIsDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.isDark = !this.isDark;

      this.iconIndex === this.icons.length - 1 ? (this.iconIndex = 0) : this.iconIndex++;
    },
    changeIcon() {},
  },
  mounted() {
    axios.get("/api/user").then((res) => {
      this.user = res.data;
    });
    // hide the overlay when everything has loaded
    // you could choose some other event, e.g. if you're loading
    // data asynchronously, you could wait until that process returns
    this.overlay = false;

    //   axios.get('api/user').then((res)=>{
    //     this.user = res.data
    //   })
  },
};
</script>
