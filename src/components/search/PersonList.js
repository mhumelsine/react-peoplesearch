import React, {PropTypes} from 'react';
import PersonListRow from './PersonListRow';

const PersonList = ({people}) =>{
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Birth Date</th>
                    <th>Gender</th>
                </tr>                
            </thead>
            <tbody>
                {people.map(person => 
                    <PersonListRow key={person.id} person={person} />    
                )}
            </tbody>
        </table>
    );
};

PersonList.propTypes={
    people:PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PersonList;