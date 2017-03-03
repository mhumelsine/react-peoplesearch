import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const EditPersonForm = ({ person, errors, onChange, onSave }) => {
    return (
        <div className="container">
            <h1>{person.id ? "Edit Person" : "Add Person"}</h1>
            <form onSubmit={onSave}>
                <TextInput
                    name="firstName"
                    label="First Name"
                    value={person.firstName}
                    onChange={onChange}
                    error={errors.firstName}
                />
                <TextInput
                    name="lastName"
                    label="Last Name"
                    value={person.lastName}
                    onChange={onChange}
                    error={errors.lastName}
                />
                <TextInput
                    name="birthDate"
                    label="Birth Date"
                    value={person.birthDate || ''}
                    onChange={onChange}
                    error={errors.birthDate}
                />
                <SelectInput
                    name="gender"
                    label="Gender"
                    value={person.gender || ''}
                    options={[{ text: 'Male', value: 'Male' }, { text: 'Female', value: 'Female' }]}
                    onChange={onChange}
                    defaultOption="Select Gender"
                />
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

EditPersonForm.propTypes = {
    person: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};

export default EditPersonForm;