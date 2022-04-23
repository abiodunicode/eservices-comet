<template>
  <v-data-table
    :headers="headers"
    :items="schedules"
    sort-by=" sn"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Ship Schedule Records</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
      
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
    <form @submit.prevent="createSchedule">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.liner"
                      label="Liner"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.vessel_name"
                      label="Vessel Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.vessel_type"
                      label="Vessel Type"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.voy_no"
                      label="Voyage No."
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.rtn_no"
                      label="Rotation No"
                    ></v-text-field>
                     </v-col>
                     <v-col
                       cols="12"
                    sm="6"
                    md="4"
                     >
                         <v-text-field
                      v-model="editedItem.arrv_stat"
                      label="Arrival Status"
                    ></v-text-field> 
                     </v-col>

                      <v-col
                       cols="12"
                    sm="6"
                    md="4"
                     >
                       <v-text-field
                      v-model="editedItem.arrv_date"
                      label="Arrival Date"
                    ></v-text-field>
                    
                     </v-col>

                    

                      <v-col
                       cols="12"
                    sm="6"
                    md="4"
                     >
                      <v-text-field
                      v-model="editedItem.dep_status"
                      label="Departure Status"
                    ></v-text-field>
                    
                     </v-col>

                      <v-col
                       cols="12"
                    sm="6"
                    md="4"
                     >
                       <v-text-field
                      v-model="editedItem.dep_date"
                      label="Departure Date"
                    ></v-text-field>
                     </v-col>

                      <v-col
                       cols="12"
                    sm="6"
                    md="4"
                     >
                    <v-text-field
                      v-model="editedItem.eta_date"
                      label="ETA"
                    ></v-text-field>
                     </v-col>

                      <v-col
                       cols="12"
                    sm="6"
                    md="4"
                     >
                     <v-text-field
                      v-model="editedItem.inv_status"
                      label="Invoicing Status"
                    ></v-text-field>
                     </v-col>

                 
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                type="submit"
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
             
            </v-card-actions>
              </form>
          </v-card>
        </v-dialog>
       
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="red darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <h4>No data available</h4>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
    export default {
      data: () => ({
         liner: '',
          vessel_name:'',
          vessel_type:'',
          voy_no: '',
          rtn_no: '',
          arrv_stat: '',
          arrv_date: '',
          dep_status: '',
          dep_date: '',
          eta_date: '',
          inv_status: '',
        dialog: false,
        dialogDelete: false,
        headers: [
          {
            text: 'S/N',
            align: 'start',
            sortable: false,
            value: 'sn',
          },
          { text: 'Liner', value: 'liner' },
          { text: 'Vessel Name', value: 'vessel_name' },
          { text: 'Vessel Type', value: 'vessel_type' },
          { text: 'Voyage No.', value: 'voy_no' },
          { text: 'Rotation No.', value: 'rtn_no' },
          { text: 'Arrival Status', value: 'arrv_stat' },
          { text: 'Arrival Date', value: 'arrv_date' },
          { text: 'Departure Status', value: 'dep_status' },
          { text: 'Departure Date', value: 'dep_date' },
          { text: 'ETA', value: 'eta_date' },
          { text: 'Invoice Status', value: 'inv_status' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        schedules: [],
        editedIndex: -1,
        editedItemzz: {
          sn: '',
          liner: '',
          vessel_name:'',
          vessel_type:'',
          voy_no: '',
          rtn_no: '',
          arrv_stat: '',
          arrv_date: '',
          dep_status: '',
          dep_date: '',
          eta_date: '',
          inv_status: '',
          
        },
        editedItem: new Form({
          
          liner: '',
          vessel_name:'',
          vessel_type:'',
          voy_no: '',
          rtn_no: '',
          arrv_stat: '',
          arrv_date: '',
          dep_status: '',
          dep_date: '',
          eta_date: '',
          inv_status: '',
          
        }),
        defaultItem: {
          sn: '',
          liner: '',
          vessel_name:'',
          vessel_type:'',
          voy_no: '',
          rtn_no: '',
          arrv_stat: '',
          arrv_date: '',
          dep_status: '',
          dep_date: '',
          eta_date: '',
          inv_status: '',
        },
      }),
  
      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
      },
  
      watch: {
        dialog (val) {
          val || this.close()
        },
        dialogDelete (val) {
          val || this.closeDelete()
        },
      },
  
      created () {
        this.initialize()
      },
  
      methods: {
        initialize () {
          this.schedules = [
            {
              sn: 1,
          liner: 'MSC',
          vessel_name:'ASIAN GLORY',
          vessel_type:'CONTAINER',
          voy_no: 'ZA4736',
          rtn_no: 'TC-2763/23',
          arrv_stat: '12/04/2022',
          arrv_date: '12/04/2022',
          dep_status: 'ARRIVED',
          dep_date: '12/04/2022',
          eta_date: '12/04/2022',
          inv_status: 'INVOICING NOW',
            },
            {
              sn: 2,
          liner: 'COSCO',
          vessel_name:'ASIAN SUN',
          vessel_type:'CONTAINER',
          voy_no: 'ZA4736',
          rtn_no: 'TC-2763/23',
          arrv_stat: '12/04/2022',
          arrv_date: '12/04/2022',
          dep_status: 'ARRIVED',
          dep_date: '12/04/2022',
          eta_date: '12/04/2022',
          inv_status: 'INVOICING NOW',
            },
           
          ]
        },
 createSchedule(){
         // POST request using fetch with async/await
  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ form:this.editedItem})
  // };
  // const response =  await fetch("http://localhost:8000/api/shipschedule", requestOptions);
  // const data = await response.json();
  // //this.postId = data.id;

  this.post.editedIndex(api/shipschedule);
//  alert(form.vessel_name);
//  console.log(form);


 //alert('am working');
 }
      },
    }
  </script>