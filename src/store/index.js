import Vue from "vue";
import Vuex from "vuex";
import EntryModule from "./EntryModule";
import moment from 'moment'

/*eslint-disable*/
Vue.use(Vuex);

const initialState = {
  activeTab: 'entry',
  stopwatch: false,
  pickedDate: '',
  pickedTimeFrom: '',
  pickedTimeTo: '',
  timeElapsed: ''
};

function formatTime(time){
  let hours = new Date(time).getHours();
  let minutes = new Date(time).getMinutes();
  let timeFormatted = hours + ':' + minutes;
  return timeFormatted;
}

export default new Vuex.Store({
  state: {
    activeTab: 'entry',
    stopwatch: false,
    pickedDate: '',
    pickedTimeFrom: '',
    pickedTimeTo: '',
    timeStart: ''
  },
  mutations: {
    setActiveTab(state, tab) {
      state.activeTab = tab;
    },
    setPickedDate(state,date){
      state.pickedDate = date;
    },
    setPickedTimeFrom(state,time){
      state.pickedTimeFrom = time;
    },
    setPickedTimeTo(state,time){
      state.pickedTimeTo = time;
    },
    setStopwatch(state, bool){
      state.stopwatch = bool;
    },
    setStopwatchTimeTo(state,time){
      if (!state.pickedTimeFrom){
        let timeNow = Date.now();
        

        state.pickedTimeFrom = formatTime(timeNow);
      }
      console.log(moment(state.pickedTimeFrom,'HH:mm'));
      let timeAdd = moment(state.pickedTimeFrom,'HH:mm').add(moment.duration(time));
      console.log(timeAdd.format('HH:mm'));
      state.pickedTimeTo = moment(timeAdd).format('HH:mm');
    }
  },
  actions: {},
  modules: {
    entries: EntryModule
  },
});
