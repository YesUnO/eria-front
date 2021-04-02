<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-tabs>
        <v-tab key="entry" to="/">
          New event
        </v-tab>
        <v-tab key="records" to="/records">
          Scheduled events
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <v-card class="mainCard">
        <router-view/>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "App",

  components: {
  },
  computed:{
    ...mapState({
      ActiveTab: state => state.activeTab
    }),
    activeTab:{
      get(){
        return this.ActiveTab;
      },
      set(tab){
        this.$store.commit('setActiveTab',tab);
      }
    }
  },

  data: () => ({
    //
  })
};
</script>
<style>
  .mainCard{
    max-width: 868px !important;
    margin: 0;
    margin-top: 150px;
    margin-bottom: 150px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .cardContent{
    padding: 24px;
  }
  .pickerTextField{
    max-width: 170px!important;
  }
</style>
