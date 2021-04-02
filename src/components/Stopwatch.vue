<template>
    <v-row>
        <v-col md-3>
            <span>{{timeElapsedFormatted}}</span>
            <v-btn
                v-if="!timerWorking"
                @click="startTimer">
                <v-icon>mdi-play-circle-outline</v-icon>
            </v-btn>
            <v-btn
                v-if="timerWorking"
                @click="pauseTimer">
                <v-icon>mdi-pause-circle-outline</v-icon>
            </v-btn>
            <v-btn
                v-if="timerWorking"
                @click="stopTimer">
                <v-icon>mdi-stop-circle-outline</v-icon>
            </v-btn>
            <v-btn
                v-if="timerWorking"
                @click="resetTimer">
                <v-icon>mdi-replay</v-icon>
            </v-btn>
            <v-btn
                v-if="!!elapsedTime"
                @click="addTime">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>
<script>
/*eslint-disable*/
export default {
    name:'Stopwatch',
    computed:{
        timeElapsedFormatted(){
            let self = this;

            const date = new Date(null);
            date.setSeconds(self.elapsedTime/1000);
            const utc = date.toUTCString();
            return utc.substr(utc.indexOf(":") - 2, 8);
        }
    },
    data (){
        return {
            timer: "",
            elapsedTime: 0,
            timerWorking: false
        }
    },
    methods:{
        startTimer(){
            let self = this;

            if (!self.timerWorking) {
                self.timer = setInterval(()=>{
                    self.elapsedTime +=1000;
                },1000);
                self.timerWorking = true;
            }
            
        },
        stopTimer(){
            let self = this;

            clearInterval(self.timer);
            self.elapsedTime = 0;
            self.timerWorking = false;
        },

        pauseTimer(){
            let self = this;

            clearInterval(self.timer);
            self.timerWorking = false;
        },

        resetTimer(){
            let self = this;
            
            self.elapsedTime = 0;
        },

        addTime(){
            let self = this;

            self.$store.commit('setStopwatchTimeTo',self.elapsedTime);
            self.$store.commit('setStopwatch',false);
            
        }
    }

}
</script>