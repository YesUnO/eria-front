<template>
    <v-row>
        <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
        >
            <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="pickedDate"
                label="Date of event"
                prepend-icon="mdi-calendar"
                dense
                outlined
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
            </template>
            <v-date-picker
                v-model="pickedDate"
                @input="menu = false"
            ></v-date-picker>
        </v-menu>
    </v-row>
</template>
<script>
import {mapState} from 'vuex';
export default {
    name:'DatePicker',
    computed:{
        ...mapState({
            PickedDate: state => state.pickedDate
        }),
        pickedDate:{
            get(){
                return this.PickedDate;
            },
            set(date){
                this.$store.commit('setPickedDate',date);
            }
        }
    },
    data: ()=>({
        menu: null
    })
}
</script>