import {create} from 'vuex'
import axios from 'axios'

export default {
    state:{
        schedules:[]
    },

    getter:{
        getSchedules: (state)=> state.schedules
    },

    actions:{
        async fetchSchedules({commit}){
            try{
                const data = await axios.get('api/schedule')
                commit(SET_SCHEDULES, data.data)
            }
            catch (error){
                alert(error)
                console.log(error)
            }
        }
    },
    mutations:{
        SET_SCHEDULES(state, schedules){
            state.schedules = schedules
        }

    }
}