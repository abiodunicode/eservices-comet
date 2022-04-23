
<template>
<div>
     <v-card color="basil">
        <v-toolbar flat>     <v-toolbar-title>User Records</v-toolbar-title>
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
            >
              New Item
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
                      <!-- this is to create -->
                    </template>
                    <template v-slot:[`item.liner`]="{ item }">
                        <div class="text-truncate" style="width: 180px">
                            {{item.type}}
                        </div>
                    </template>
                     <!-- this is to create -->
                   
                  
                </v-data-table>
                <!-- this dialog is used for both create and update -->
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on }">
                    <div class="d-flex">
                        <v-btn color="primary" dark class="ml-auto ma-3" v-on="on">
                            New 
                            <v-icon small>mdi-plus-circle-outline</v-icon>
                        </v-btn>
                    </div>
                  </template>
                  
                  <v-card>
                    <v-card-title>
                        <span v-if="editedItem.id">Edit {{editedItem.id}}</span>
                        <span v-else>Create</span>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                          <v-col cols="12" sm="4">
                              <v-select
                      v-model="editedItem.type"
                      :items="item1"
                      label="Account Type"
                    ></v-select>
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
          { text: 'First Name', value: 'first_name' },
          { text: 'Last Name', value: 'last_name' },
          { text: 'Email', value: 'email' },
          { text: 'Type', value: 'type' },
          { text: 'Registerd at', value: 'created_at' },

          
          { text: 'Actions', value: 'actions', sortable: false, width:"80" },
        ],
        item1: ['agent','admin'],
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
   async  loadItems() {
        this.items = []
     await    axios.get('http://localhost:8000/api/users',
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
        let url = 'http://localhost:8000/api/shipschedule'
        let id = item.id
        
        // airtable API needs the data to be placed in fields object
        // let data = {
        //    fields:  item
        // }

        const data = JSON.stringify({ 
                vessel_name: this.editedItem.vessel_name,
                vessel_type: this.editedItem.vessel_type,
                voy_no: this.editedItem.voyage_no,
               });
        
        if (id) {
            // if the item has an id, we're updating an existing item
            method = "put"
            url = `http://localhost:8000/api/user/${id}`
            
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