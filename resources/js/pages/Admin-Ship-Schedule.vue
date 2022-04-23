
<template>
<div>
     <v-card color="basil">
        <v-toolbar flat>     <v-toolbar-title>Ship Schedule Records</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>

        
            <v-btn 
                color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
             @click="showEditDialog"
              icon>
            <v-icon >mdi-plus-circle-outline </v-icon>
          </v-btn>
           
        </v-toolbar>
                <v-data-table 
                :headers="headers" 
                :items="items" 
                mobile-breakpoint="800"
                
                class="elevation-0">
                     <template v-slot:[`item.actions`]="{ item }">
                         
                        <div class="text-truncate">
                          <v-icon
                            small
                            class="mr-2"
                            @click="showEditDialog(item)"
                            color="primary" 
                          >
                         
                            mdi-pencil
                          </v-icon>
                          <v-icon
                            small
                            @click="deleteItem(item)"
                            color="pink" 
                          >
                           mdi-delete-forever
                          </v-icon>
                      </div>
                    </template>
                    <template v-slot:[`item.liner`]="{ item }">
                        <div class="text-truncate" style="width: 180px">
                            {{item.liner}}
                        </div>
                    </template>
                     <template v-slot:[`item.vessel_name`]="{ item }">
                        <div class="text-truncate" style="width: 180px">
                            {{item.vessel_name}}
                        </div>
                    </template>
                    <template v-slot:[`item.vessel_type`]="{ item }">
                        <div class="text-truncate" style="width: 180px">
                            {{item.vessel_type}}
                        </div>
                    </template>

                      <template v-slot:[`item.rotation_no`]="{ item }">
                        <div class="text-truncate" style="width: 180px">
                            {{item.rotation_no}}
                        </div>
                    </template>
                      <template v-slot:[`item.arrival_status`]="{ item }">
                        <div class="text-truncate" style="width: 180px">
                            {{item.arrival_status}}
                        </div>
                    </template>
                      <template v-slot:[`item.arrival_date`]="{ item }">
                        <div class="text-truncate" style="width: 180px">
                            {{item.arrival_date}}
                        </div>
                    </template>
                      <template v-slot:[`item.departure_status`]="{ item }">
                        <div class="text-truncate" style="width: 180px">
                            {{item.departure_status}}
                        </div>
                    </template>
                      <template v-slot:[`item.departure_date`]="{ item }">
                        <div class="text-truncate" style="width: 180px">
                            {{item.departure_date}}
                        </div>
                    </template>
                      <template v-slot:[`item.eta`]="{ item }">
                        <div class="text-truncate" style="width: 180px">
                            {{item.eta}}
                        </div>
                    </template>
                     <template v-slot:[`item.invoice_status`]="{ item }">
                        <div class="text-truncate" style="width: 180px">
                            {{item.invoice_status}}
                        </div>
                    </template>
                  
                </v-data-table>
                <!-- this dialog is used for both create and update -->
                <v-dialog v-model="dialog" max-width="500px">
                 
                  
                  <v-card>
                    <v-card-title>
                        <span v-if="editedItem.id">Edit {{editedItem.id}}</span>
                        <span v-else>Create</span>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                          <v-col cols="12" sm="4">
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
                      v-model="editedItem.voyage_no"
                      label="Voyage No."
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.rotation_no"
                      label="Rotation No"
                    ></v-text-field>
                     </v-col>
                     <v-col
                       cols="12"
                    sm="6"
                    md="4"
                     >
                         <v-text-field
                      v-model="editedItem.arrival_status"
                      label="Arrival Status"
                    ></v-text-field> 
                     </v-col>

                      <v-col
                       cols="12"
                    sm="6"
                    md="4"
                     >
                       <v-text-field
                      v-model="editedItem.arrival_date"
                      label="Arrival Date"
                    ></v-text-field>
                    
                     </v-col>

                    

                      <v-col
                       cols="12"
                    sm="6"
                    md="4"
                     >
                      <v-text-field
                      v-model="editedItem.departure_status"
                      label="Departure Status"
                    ></v-text-field>
                    
                     </v-col>

                      <v-col
                       cols="12"
                    sm="6"
                    md="4"
                     >
                       <v-text-field
                      v-model="editedItem.departure_date"
                      label="Departure Date"
                    ></v-text-field>
                     </v-col>

                      <v-col
                       cols="12"
                    sm="6"
                    md="4"
                     >
                    <v-text-field
                      v-model="editedItem.eta"
                      label="ETA"
                    ></v-text-field>
                     </v-col>

                      <v-col
                       cols="12"
                    sm="6"
                    md="4"
                     >
                     <v-text-field
                      v-model="editedItem.invoice_status"
                      label="Invoicing Status"
                    ></v-text-field>
                     </v-col>
                         
                         
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="showEditDialog()">Cancel</v-btn>
                      <v-btn color="blue darken-1" text @click="saveItem(editedItem)">Save</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                  </v-card>
               </div>
               
                </template>
                
   
    
</template>

<script>
const apiToken = "keyZIIVNiQPvozEWb"
const airTableApp = "appXJzFFs2zgj4X5C"
const airTableName = "Example"
export default {
   data () {
    return {
        headers: [
            { text: 'S/N', value: 'id' },
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
          { text: 'Actions', value: 'actions', sortable: false, width:"80" },
        ],
        items: [],
        dialog: false,
        editedItem: {}
    }
  },
  mounted() {
    this.loadItems()
  },
  methods: {
    showEditDialog(item) {
        this.editedItem = item||{}
        this.dialog = !this.dialog
    },
    loadItems() {
        this.items = []
        axios.get('http://localhost:8000/api/shipschedule',
            { 
              //  headers: { Authorization: "Bearer " + apiToken }
                })
        .then((response) => {
            this.items = response.data.data.map((item)=>{
                return {
                    id: item.id,
                    ...item
                }
            })
        }).catch((error) => {
            console.log(error)
        })
    },
    saveItem(item) {
        /* this is used for both creating and updating API records
         the default method is POST for creating a new item */
         
        let method = "post"
        let url = 'api/shipschedule'
        let id = item.id
        
        // airtable API needs the data to be placed in fields object
        // let data = {
        //    fields:  item
        // }

        const data = JSON.stringify({ 
             
                vessel_name: this.editedItem.vessel_name,
                vessel_type: this.editedItem.vessel_type,
                voy_no: this.editedItem.voyage_no,
                liner: this.editedItem.liner,
                rotation_no: this.editedItem.rotation_no,
                arrival_status: this.editedItem.arrival_status,

                arrival_date: this.editedItem.arrival_date,
            departure_status: this.editedItem.departure_status,
            departure_date: this.editedItem.departure_date,
            eta: this.editedItem.eta,
            invoice_status: this.editedItem.invoice_status,
                
            
        });
        
        if (id) {
            // if the item has an id, we're updating an existing item
            method = "put"
            url = `http://localhost:8000/api/shipschedule/${id}`
            
            // must remove id from the data for airtable patch to work
            //delete data.fields.id
        }

        // save the record
        axios[method](url,
            data,
            { headers: { 
                //Authorization: "Bearer " + apiToken,
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.data && response.data.id) {
                console.log(response.data)
                // add new item to state
                this.editedItem.id = response.data.id
                if (!id) {
                    // add the new item to items state
                    this.items.push(this.editedItem)
                }
                this.editedItem = {}
            }
            this.dialog = !this.dialog
        })
    },
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
  }
}
</script>