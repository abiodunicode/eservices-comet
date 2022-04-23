<template>

<div id="app" class="pa-15">
  <v-card

class=" pa-5 mx-auto"
  elevation="6"
  outlined
  shaped
  width="500"
>
 <v-card-text class="mb-0 ">
      
      <p class="text-h6 text--primary text-center ">
     Create Account
      </p>
    
    </v-card-text>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

  <v-text-field
      v-model="type"
      label="Type"
      v-show="setDisable"
    ></v-text-field>

    <v-text-field
      v-model="photo"
      label="Photo"
      v-show="setDisable"
    ></v-text-field>
    

  <v-text-field
      v-model="first_name"
      :rules="nameRules"
      label="First Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="last_name"
      :rules="nameRules"
      label="Last Name"
      required
    ></v-text-field>

  <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>


    <v-text-field
      v-model="password"
      :counter="5"
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>

  

    

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="saveItem"
    >
      Register
    </v-btn>

  

   
  </v-form>

   <div class="text--primary mt-3">
      <p>   Already have an account ?<router-link @click.native="Registration" to="/Login"> Sign in</router-link> | Go Home  </p>
      </div>

  </v-card>
</div>

</template>

<script>
  export default {
    data: () => ({
      valid: true,
      first_name:'',
      last_name:'',
      photo:'',
      password: '',
      email: '',
      type:'agent',
      photo:'profile.png',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 5) || 'Name must be greater than 5 characters',
      ],
       nameRules: [
        v => !!v || 'This field is required',
        v => (v && v.length >= 5) || 'Input must be greater than 2 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
     
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
       
      },

      
        saveItem() {

          let val =     this.$refs.form.validate()
        /* this is used for both creating and updating API records
         the default method is POST for creating a new item */
         if (!val){
           return;
         } else{
        let method = "post"
        let url = 'api/register'
      
        
        // airtable API needs the data to be placed in fields object
          const data = JSON.stringify({ 
                first_name: this.first_name,
               last_name: this.last_name,
               email: this.email,
               password:this.password,
               type:this.type,
               photo:this.photo,
                });
         // save the record
        axios[method](url,
            data,
            { headers: { 
                //Authorization: "Bearer " + apiToken,
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.data ) {
                console.log(response.data)
            } })
            }//esle
    },
      
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
