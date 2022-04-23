<template>

 <div class="pa-6">
   <table-ops/>
 <br>
  <v-spacer></v-spacer>
<table-ad/>

<br>
  <v-spacer></v-spacer>
<table-schedu/>

 </div>
</template>




  
</template>

<script>

export default {
   components:{
     name: 'Home',
    'table-ops' : require('../components/Dashboard/TableOps.vue').default,
    'table-schedu' : require('../components//Dashboard/TableVesSche.vue').default,
    'table-ad' : require('../components//Dashboard/VesselAD.vue').default,
    }
}
</script>