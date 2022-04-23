<template>
  <v-data-table
    :headers="headers"
    :items="items"
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

<script>import axios from "axios"

    export default {
      data: () => ({
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
          { text: 'Vessel_Name', value: 'vessel_name' },
          { text: 'Vessel_Type', value: 'vessel_type' },
          { text: 'Voyage_No.', value: 'voyage_no' },
          { text: 'Rotation_No.', value: 'rotation_no' },
          { text: 'Arrival_Status', value: 'arrival_status' },
          { text: 'Arrival_Date', value: 'arrival_date' },
          { text: 'Departure_Status', value: 'departure_status' },
          { text: 'Departure_Date', value: 'departure_date' },
          { text: 'ETA', value: 'eta' },
          { text: 'Invoice_Status', value: 'invoice_status' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        items: [],
        editedIndex: -1,
        editedItem: {
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
        this.initialize();
      },
  
      methods: {

      deleteItem(item) {
        //console.log('deleteItem', item)
        let id = item.id
        let idx = this.items.findIndex(item => item.id===id)
        if (confirm('Are you sure you want to delete this?')) {
            /* not really deleting in API for demo */
            
            axios.delete('api/shipschedule/'+id, 
                { headers: { 
                    // Authorization: "Bearer " + apiToken,
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                this.items.splice(idx, 1)
            })
           // this.items.splice(idx, 1)
        }
    },
       
       
      close () {
          this.dialog = false
        
        },
        initialize () {
          
  //         fetch('api/shipschedule')
  // .then(response => response.json())
  // .then(data => this.schedules);

    this.items = []
        axios.get('api/shipschedule')
        .then((response) => {
            this.items = response.data.data.map((item)=>{
                return {
                    sn: item.id,
                    ...item
                }
            })
        }).catch((error) => {
            console.log(error)
        })

  //        // this.schedules = data;
        },
 async createSchedule(){
         // POST request using fetch with async/await
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({

      liner: this.editedItem.liner,
      vessel_name: this.editedItem.vessel_name,
      vessel_type: this.editedItem.vessel_type,
      voy_no: this.editedItem.voy_no,
      rtn_no: this.editedItem.rtn_no,
      arrv_stat: this.editedItem.arrv_stat,
      arrv_date: this.editedItem.arrv_date,
      dep_status: this.editedItem.dep_status,
      dep_date: this.editedItem.dep_date,
      eta_date: this.editedItem.eta_date,
      inv_status: this.editedItem.inv_status,
     
    }),
  };
    

  const response =  await fetch("http://localhost:8000/api/shipschedule",requestOptions);
  const data = await response.json();
  // //this.postId = data.id;
 this.dialog = false;
 this.initialize();



 
 alert(data.form.vessel_name);
 console.log(data.form);


 //alert('am working');

//

  
 }
      },
    }
  </script>