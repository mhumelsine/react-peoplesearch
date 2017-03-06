import axios from 'axios';

export default {    
    //returns a promise
    doGet(url, data){
        let params = data;
        
        return axios.get(url, {params:params});

        //return $.get(url, data);
    },
    doPost(url, data){
        return axios.post(url, data);
    }
};