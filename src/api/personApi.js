import db from './request';

const baseUri = "http://reactpeoplesearch.azurewebsites.net/";
//const baseUri = "http://localhost:59206/";

class PersonApi {
    static getAll(data) {
        return db.doGet(baseUri + 'api/Person/GetPeople', data);
    }
    static save(person) {
        return db.doPost(baseUri+'api/Person/Save', person);
    }
}

export default PersonApi;