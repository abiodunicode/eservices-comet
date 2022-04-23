<template>
  <v-list-group
       no-action
       
        
        prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title>Admin</v-list-item-title>
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
         { title: 'Ship Schedule', icon: 'mdi-format-list-checks', to:'/Admin-Ship-Schedule' },
          { title: 'Users Table', icon: 'mdi-help-box' , to:'/User-Table'},
       
      ],
        
       }),
  }
</script>