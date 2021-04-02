import Vue from "vue";
import config from "@/configuration.js";

/*eslint-disable*/
let path = config.api;
export default{
    namespaced: true,
    actions:{

        saveEntry(context,payload){
            return new Promise(function (resolve,reject){
                Vue.axios.post(path,payload).then(function(response){
                    if (response.data == null) {
                        reject(new Error('no results'));
                    }
                    else{
                        resolve(response);
                    }
                },()=>{
                    reject(new Error('no results'));
                })
            })
        },

        getAll(){
            return new Promise(function (resolve,reject){
                Vue.axios.get(path).then(function(response){
                    if (response.data == null) {
                        reject(new Error('no results'));
                    }
                    else{
                        resolve(response);
                    }
                },()=>{
                    reject(new Error('no results'));
                })
            })
        },

        deleteEntry(context,payload){
            return new Promise(function (resolve,reject){
                Vue.axios.delete(path+'?id='+payload.id).then(function(response){
                    if (response.data == null) {
                        reject(new Error('no results'));
                    }
                    else{
                        resolve(response);
                    }
                },()=>{
                    reject(new Error('no results'));
                })
            })
        }
    }
}