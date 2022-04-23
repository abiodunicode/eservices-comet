<template>
  <v-list-group
       no-action
       
        
        prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title>Enquiries</v-list-item-title>
        </template>

       
          <v-list-item
            v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
          >
           

           

             <v-list-item-title>
               <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-title>
          </v-list-item>
        </v-list-group>
</template>

<script>
  export default {
    data: () => ({ 
         items: [
         { title: 'BL/Cargo Information', icon: 'mdi-format-list-checks', to:'/' },
          { title: 'Telex item', icon: 'mdi-help-box' , to:'/'},
          { title: 'Exit Note item', icon: 'mdi-help-box' , to:'/'},
      ],
        
       }),
  }
</script>