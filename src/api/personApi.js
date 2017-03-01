import db from './request';

const delay = 1000;

const people = [{
    firstName: 'Michael',
    lastName: 'Humelsine',
    birthDate: '01/01/1903',
    gender: 'Male'
},
{
    firstName: 'Tim',
    lastName: 'Thacker',
    birthDate: '01/01/1906',
    gender: 'Male'
}];

class PersonApi {
    static getAll(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], people));
            }, delay);
        });

        //db.doGet('', data);

    }
    static save(person) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (person.id) {
                    const index = people.findIndex(x => x.id === person.id);
                    people[index] = person;
                } else {
                    person.id = (people.length ? people[people.length - 1].id + 1 : 1);
                    people.push(person);
                }
                resolve(person);
            }, delay);
        });
    }
}

export default PersonApi;