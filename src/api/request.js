export default {
    doGet(url, data){
        return $.get(url, data);
    },
    doPost(url, data){
        return $.post(url, data);
    }
};