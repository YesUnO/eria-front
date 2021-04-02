<template>
    <v-form class="cardContent">
        <v-text-field
            v-model="eventName"
            dense
            outlined>
        </v-text-field>
        <v-select
            v-model="eventTypeSelect"
            :items="eventTypeItems"
            dense
            outlined>
        </v-select>
        <time-tracker/>
        <v-btn
            @click="submit">
            Submit
        </v-btn>
        <v-snackbar
            v-model="notifications">
            {{notificationText}}
        </v-snackbar>
    </v-form>
</template>
<script>
import {mapState} from 'vuex'
import TimeTracker from '../components/TimeTracker.vue'
import moment from 'moment'
export default {
  components: { TimeTracker },
    name:'EntryView',
    computed:{
        ...mapState({
            PickedTimeFrom: state => state.pickedTimeFrom,
            PickedDate: state => state.pickedDate,
            PickedTimeTo: state => state.pickedTimeTo 
        })
    },
    data: ()=>({
        eventName: 'Name',
        notifications: false,
        notificationText: '',
        eventTypeSelect: 'Meeting',
        eventTypeItems:[
            'Meeting',
            'Lunch',
            'Stand-up',
            'Celebration'
        ]
    }),
    methods:{
        submit(){
            let self = this;

            if(!this.PickedTimeFrom|| !this.PickedDate|| !this.PickedDate){
                self.notifications = true;
                self.notificationText = 'Please fill out all fields'
                return;
            }
            let timeFrom = moment.utc(this.PickedDate + ' ' +  this.PickedTimeFrom);
            let timeTo = moment.utc(this.PickedDate + ' ' +  this.PickedTimeTo);
            console.log(this.PickedDate, this.PickedTimeTo, timeTo);
            self.$store.dispatch('entries/saveEntry',{name:this.eventName,type:this.eventTypeSelect,timeFrom: timeFrom, timeTo:timeTo})
        }
    }
}
</script>