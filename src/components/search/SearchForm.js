import React from 'react';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

const SearchForm = ({search, onSearch, onChange, errors}) => {
    return (
        <form>
            <div className="row">
                <div className="col-md-4">
                    <TextInput
                        name="firstName"
                        label="First Name"
                        value={search.firstName}
                        onChange={onChange}
                        error={errors.name}
                        />
                </div>
                <div className="col-md-4">
                    <TextInput
                        name="lastName"
                        label="Last Name"
                        value={search.lastName}
                        onChange={onChange}
                        error={errors.name}
                        />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <TextInput
                        name="BirthDate"
                        label="Birth Date"
                        value={search.birthDate}
                        onChange={onChange}
                        error={errors.name}
                        />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <TextInput
                        name="Gender"
                        label="Gender"
                        value={search.gender}
                        onChange={onChange}
                        error={errors.gender}
                        />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <button type="button" onClick={onSearch} className="btn btn-primary">Search</button>
                </div>
            </div>
        </form>
    );
};

SearchForm.propTypes = {
    search: React.PropTypes.object.isRequired,
    onSearch: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
};

export default SearchForm;