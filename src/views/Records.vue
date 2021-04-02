<template>
    <div class="cardContent">
        <v-data-table
            dense
            :headers="headers"
            :items="records"
            no-data-text="No scheduled events yet">
            <template v-slot:item.delete="{item}">
                <v-btn 
                    x-small
                    @click="deleteRecord(item)">
                    Delete
                </v-btn>
            </template>
        </v-data-table>
    </div>
</template>
<script>
/*eslint-disable*/
import moment from 'moment'
export default {
    name:'RecordsView',
    data: ()=>({
        headers:[
            {
                text:'Id',
                align:'',
                sortable: false,
                value:'id'
            },
            {
                text:'Event name',
                align:'',
                sortable: false,
                value:'name'
            },
            {
                text:'Event type',
                align:'',
                sortable: false,
                value:'type'
            },
            {
                text:'Event time from',
                align:'',
                sortable: false,
                value:'timeFrom'
            },
            {
                text:'Event time to',
                align:'',
                sortable: false,
                value:'timeTo'
            },
            {
                text:'Remove',
                align:'',
                sortable: false,
                value:'delete'
            },
        ],
        records:[]
    }),
    mounted(){
        let self = this;

        self.getRecords();
    },
    methods:{
        getRecords(){
            let self = this;

            self.$store.dispatch('entries/getAll').then(reponse=>{
                self.proccessRecords(reponse.data);
            })
        },
        proccessRecords(data){
            let self = this;

            self.records = [];
            data.forEach(element => {

                element.timeFrom = moment(element.timeFrom).format('DD.MM.YYYY HH:mm');
                element.timeTo = moment(element.timeTo).format('DD.MM.YYYY HH:mm');
                self.records.push(element);
            });
        },
        deleteRecord(item){
            let self = this;

            self.$store.dispatch('entries/deleteEntry',{id:item.id});
            self.records.forEach((element,index,object)=>{
                if (element.id == item.id){
                    object.splice(index,1);
                }
            })
        }

    }
}
</script>