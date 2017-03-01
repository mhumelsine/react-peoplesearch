import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as personActions from '../../actions/personActions';
import { bindActionCreators } from 'redux';
import SearchForm from './SearchForm';
import PersonList from './PersonList';

class SearchPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            errors: {},
            people: [],
            search:{}
        };

        this.updateGrid = this.updateGrid.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState(Object.assign({}, newProps.people));
    }

    updateGrid() {

    }

    showResults(){
        const people = this.props.people;

        if(people.length){
            return <PersonList people={people} />;
        }else{
            return (
                <div className="alert alert-warning">
                    We did not find anyone.
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h1>Search</h1>
                <SearchForm
                    onChange={this.updateGrid}
                    onSearch={this.updateGrid}
                    errors={this.state.errors}
                    search={this.state.search}
                />
                
                {this.showResults()}
            </div>
        );
    }
}

SearchPage.propTypes = {
    people:PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state, onwProps) {
    return {
        people: state.people
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(personActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);