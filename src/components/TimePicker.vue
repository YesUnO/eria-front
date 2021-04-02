<template>
    <v-row>
        
        <v-menu
            ref="menuFrom"
            v-model="menuFrom"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="pickedTimeFrom"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    class="pickerTextField"
                    outlined
                    dense
                    v-model="pickedTimeFrom"
                    label="Picker in menu"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
            </template>
            <v-time-picker
                v-if="menuFrom"
                v-model="pickedTimeFrom"
                full-width
                @click:minute="$refs.menuFrom.save(pickedTimeFrom)"
            ></v-time-picker>
        </v-menu>

        <v-menu
            v-if="!stopwatch"
            ref="menuTo"
            v-model="menuTo"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="pickedTimeTo"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    class="pickerTextField"
                    outlined
                    dense
                    v-model="pickedTimeTo"
                    label="Picker in menu"
                    prepend-icon="mdi-clock-time-four-outline"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
            </template>
            <v-time-picker
                v-if="menuTo"
                v-model="pickedTimeTo"
                full-width
                @click:minute="$refs.menuTo.save(pickedTimeTo)"
            ></v-time-picker>
        </v-menu>

        <stopwatch v-else/>

        <v-btn
            @click="stopwatch = !stopwatch">
            <v-icon>{{stopwatch?'mdi-timer-off-outline':'mdi-timer-outline'}}</v-icon>
        </v-btn>

    </v-row>  
</template>
<script>
import {mapState} from 'vuex';
import Stopwatch from './Stopwatch.vue';
export default {
  components: { Stopwatch },
    name: 'TimePicker',
    computed:{
        ...mapState({
            PickedTimeFrom: state => state.pickedTimeFrom,
            PickedTimeTo: state => state.pickedTimeTo,
            Stopwatch: state => state.stopwatch
        }),
        pickedTimeFrom:{
            get(){
                return this.PickedTimeFrom
            },
            set(time){
                this.$store.commit('setPickedTimeFrom',time);
            }
        },
        pickedTimeTo:{
            get(){
                return this.PickedTimeTo
            },
            set(time){
                this.$store.commit('setPickedTimeTo',time);
            }
        },
        stopwatch:{
            get(){
                return this.Stopwatch
            },
            set(bool){
                this.$store.commit('setStopwatch',bool);
            }
        },
    },
    data: ()=>({
        menuFrom: null,
        menuTo: null
    })
}
</script>
<style>
.pickerTextField{
    max-width: 170px!important;
  }

.row{
    flex-direction: row;
    flex-wrap: wrap;
}
</style>