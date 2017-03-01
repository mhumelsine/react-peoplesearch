import React from 'react';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

const SearchForm = ({search, onSearch, onChange, errors}) => {
    return (
        <form>
            <TextInput 
                name="Name" 
                label="Name"
                value={search.name}
                onChange={onChange}
                error={errors.name} 
            />
            <TextInput
                name="BirthDate"
                label="Birth Date"
                value={search.birthDate}
                onChange={onChange}
                error={errors.name}
            />
            <TextInput
                name="Gender"
                label="Gender"
                value={search.gender}
                onChange={onChange}
                error={errors.gender}
            />
            <button type="submit" onSubmit={onSearch} className="btn btn-primary">Search</button>
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