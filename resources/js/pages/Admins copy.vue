<template>
 <v-app class="mt-0">
        <v-content class="container align-center px-1">
            <h2 class="font-weight-light mb-2">
                Vuetify CRUD Example
            </h2>
   <v-card>
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
                            mdi-delete
                          </v-icon>
                      </div>
                    </template>
                    <template v-slot:[`item.details`]="{ item }">
                        <div class="text-truncate" style="width: 180px">
                            {{item.Details}}
                        </div>
                    </template>
                    <template v-slot:[`item.url`]="{ item }">
                        <div class="text-truncate" style="width: 180px">
                            <a :href="item.URL" target="_new">{{item.URL}}</a>
                        </div>
                    </template>
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
                            <v-text-field v-model="editedItem.Name" label="Name"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="8">
                            <v-text-field v-model="editedItem.Details" label="Details"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12">
                            <v-text-field v-model="editedItem.URL" label="URL"></v-text-field>
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
        </v-content>
    </v-app>
    
</template>

<script>
const apiToken = "keyZIIVNiQPvozEWb"
const airTableApp = "appXJzFFs2zgj4X5C"
const airTableName = "Example"
export default {
   data () {
    return {
        headers: [
            { text: 'Id', value: 'id' },
            { text: 'Name', value: 'Name' },
            { text: 'Details', value: 'details', sortable: false, width:"100" },
            { text: 'URL', value: 'url', name:'url', width:"180" },
            { text: 'Action', value: 'actions', sortable: false },
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
        axios.get(`https://api.airtable.com/v0/${airTableApp}/${airTableName}`,
            { headers: { Authorization: "Bearer " + apiToken }})
        .then((response) => {
            this.items = response.data.records.map((item)=>{
                return {
                    id: item.id,
                    ...item.fields
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
        let url = `https://api.airtable.com/v0/${airTableApp}/${airTableName}`
        let id = item.id
        
        // airtable API needs the data to be placed in fields object
        let data = {
            fields: item
        }
        
        if (id) {
            // if the item has an id, we're updating an existing item
            method = "patch"
            url = `https://api.airtable.com/v0/${airTableApp}/${airTableName}/${id}`
            
            // must remove id from the data for airtable patch to work
            delete data.fields.id
        }

        // save the record
        axios[method](url,
            data,
            { headers: { 
                Authorization: "Bearer " + apiToken,
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
            /*
            axios.delete(`https://api.airtable.com/v0/${airTableApp}/${airTableName}/${id}`,
                { headers: { 
                    Authorization: "Bearer " + apiToken,
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                this.items.splice(idx, 1)
            })*/
            this.items.splice(idx, 1)
        }
    },
  }
}
</script>