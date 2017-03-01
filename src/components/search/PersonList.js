import React, { PropTypes } from 'react';
import PersonListRow from './PersonListRow';

const PersonList = ({people}) => {
    if (people.length) {
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
    } else {
        return (
            <div className="alert alert-warning">
                We did not find anyone.
                </div>
        );
    }
};

PersonList.propTypes = {
    people: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PersonList;