import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as personActions from '../../actions/personActions';
import { bindActionCreators } from 'redux';
import SearchForm from './SearchForm';
import PersonList from './PersonList';
import toastr from 'toastr';
import {Link} from 'react-router';

class SearchPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            errors: {},
            search:{
                firstName:'',
                lastName:'',
                birthDate:''
            }
        };

        this.updateGrid = this.updateGrid.bind(this);
    }

    updateGrid(event) {
        event.preventDefault();
        this.setState({loading:true});

        let search = this.state.search;

        //mapping button here is why key is blank
        if(event.target.name){
            search[event.target.name] = event.target.value;
        }        

        this.setState({search:search});

        this.props.actions.loadPeople(this.state.search)
            .then(() => this.loadComplete())
            .catch(error => this.handleError(error));        
    }

    loadComplete(){
        this.setState({loading:false});
        //toastr.success('New people were loaded');
    }

    handleError(error){
        this.setState({loading:false});
        toastr.error(error);
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
                <Link to={'person/edit/'}>Add Person</Link>
                <PersonList people={this.props.people} />
            </div>
        );
    }
}

SearchPage.propTypes = {
    people:PropTypes.arrayOf(PropTypes.object).isRequired,
    actions:PropTypes.object.isRequired,
    search:PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        people: state.people,
        search:state.search
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(personActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);