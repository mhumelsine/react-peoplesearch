import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PersonListRow = ({person}) => {
    return (
        <tr>
            <td><Link to={'/person/'+person.id}>{person.firstName + ' ' + person.lastName}</Link></td>
            <td>{person.birthDate}</td>
            <td>{person.gender}</td>
        </tr>
    );
};

PersonListRow.propTypes={
    person:PropTypes.object.isRequired
};

export default PersonListRow;