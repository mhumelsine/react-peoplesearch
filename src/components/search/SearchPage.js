import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as personActions from '../../actions/personActions';
import { bindActionCreators } from 'redux';
import SearchForm from './SearchForm';
import PersonList from './PersonList';
import toastr from 'toastr';
import {Link} from 'react-router';
import Loading from '../common/Loading';

class SearchPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            errors: {},
            loading:false
        };

        this.updateGrid = this.updateGrid.bind(this);
    }

    refreshGrid(search){
        this.props.actions.loadPeople(search)
            .then(() => this.loadComplete())
            .catch(error => this.handleError(error));  
    }

    updateGrid(event) {
        event.preventDefault();
        this.setState({loading:true});

        let search = Object.assign({}, this.props.search);

        //mapping button here is why key is blank
        if(event.target.name){
            search[event.target.name] = event.target.value;
        }        

        this.refreshGrid(search);    
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

        let list = null;

        if(this.state.loading){
            list = (
            <div className="relative">
                <Loading />
            </div>
            );
        } else {
            list = <PersonList people={this.props.people} />;
        }        

        return (
            <div>
                <h1>Search</h1>
                <SearchForm
                    onChange={this.updateGrid}
                    onSearch={this.updateGrid}
                    errors={this.state.errors}
                    search={this.props.search}
                />               
                {list}
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