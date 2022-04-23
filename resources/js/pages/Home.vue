<template>
  <div>
    <v-app id="inspire">
      <div v-if="!['Login', 'Registration', 'Tests'].includes($route.name)">
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

          <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <template v-slot:append>
            <div class="pa-2">
              <router-link to="/Login" exact>
                <v-btn block>
                  <v-icon>mdi-login</v-icon>
                  Login
                </v-btn>
              </router-link>
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
            :close-on-content-click="false"
            :nudge-width="150"
            max-width="300"
            offset-x
          >
          </v-menu>
        </v-app-bar>
      </div>

      <div>
        <!-- <operation />
          <schedule />
          <ad /> -->
        <div>
          <table-ops />
          <br />
          <v-spacer></v-spacer>
          <table-ad />

          <br />
          <v-spacer></v-spacer>
          <table-schedu />
        </div>
      </div>
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
//import Enquiries from '@/components/SideBar/Enquiries.vue';
export default {
  components: {
    name: "Home",
    "table-ops": require("../components/Dashboard/TableOps.vue").default,
    "table-schedu": require("../components//Dashboard/TableVesSche.vue").default,
    "table-ad": require("../components//Dashboard/VesselAD.vue").default,
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
      { title: "Login For Detials", icon: "mdi-lock", to: "/Login" },
    ],
  }),

  computed: {
    icon() {
      return this.icons[this.iconIndex];
    },
  },

  methods: {
    toggleIsDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.isDark = !this.isDark;

      this.iconIndex === this.icons.length - 1 ? (this.iconIndex = 0) : this.iconIndex++;
    },
    changeIcon() {},
  },
  mounted() {
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
