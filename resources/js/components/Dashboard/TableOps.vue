<template>
  <v-data-table
    :headers="headers"
    :items="items"
    hide-default-footer
    disable-pagination
    class="elevation-1 text-uppercase"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title class="text-capitalize">Vessel Operation</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
    </template>

    <template v-slot:no-data>
      <h4 v-if="items.id.length >= 1">Loading data ....</h4>
      <h4 v-else>No data available</h4>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    headers: [
      { text: "VESSEL NAME", value: "vessel_name" },
      { text: "VESSEL TYPE", value: "vessel_type" },
      { text: "VOYAGE NO.", value: "voyage_no" },
      { text: "ROTATION NO.", value: "rotation_no" },
      { text: "LINER", value: "liner" },
      { text: "STATUS", value: "invoice_status" },
    ],

    items: [],
  }),
  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.items = [];
      axios
        .get("api/shipschedule")
        .then((response) => {
          this.items = response.data.data.map((item) => {
            return {
              sn: item.id,
              ...item,
            };
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
