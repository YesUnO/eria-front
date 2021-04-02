
/*disable-eslint*/
<template>
    <div>
        <v-row>
            <v-col
                cols="3"
                >
                <date-picker/>
            </v-col>
            <v-col
                cols="9"
                >
                <time-picker/>
            </v-col>
        </v-row>
    </div>
</template>
<script>

/*disable-eslint*/
import {mapState} from 'vuex'
import DatePicker from './DatePicker.vue';
import TimePicker from './TimePicker.vue';
export default {
  components: { DatePicker, TimePicker },
    name:'TimeTracker',
    data:()=>({

    }),
    computed:{
        ...mapState({
            PickedDate: state => state.pickedDate,
            PickedTimeFrom: state => state.pickedTimeFrom,
            PickedTimeTo: state => state.pickedTimeTo
        }),
        timeElapsed(){
            let self = this;
            console.log(self);
            return '';
        }
    },
    methods:{
        submit(){
            let self = this;

            console.log(self);
        }
    }
}
</script>