import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as personActions from '../../actions/personActions';
import { bindActionCreators } from 'redux';
import SearchForm from './SearchForm';
import PersonList from './PersonList';
import toastr from 'toastr';
import { Link } from 'react-router';
import Loading from '../common/Loading';

class SearchPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            errors: {},
            loading: false,
            search: props.search,
            searchInProgress: undefined
        };

        this.updateGrid = this.updateGrid.bind(this);
    }

    refreshGrid(search) {

        if (this.state.searchInProgress) {
            clearTimeout(this.state.searchInProgress);
        }

        let searchInProgress = setTimeout(() => this.props.actions.loadPeople(search)
            .then(() => this.loadComplete())
            .catch(error => this.handleError(error)), 300);

        this.setState({
            searchInProgress: searchInProgress,
            search: search
        });
    }

    updateGrid(event) {
        event.preventDefault();
        this.setState({ loading: true });

        let search = Object.assign({}, this.props.search);

        //mapping button here is why key is blank
        if (event.target.name) {
            search[event.target.name] = event.target.value;
        }

        this.refreshGrid(search);
    }

    loadComplete() {
        this.setState({ loading: false });
        //toastr.success('New people were loaded');
    }

    handleError(error) {
        this.setState({ loading: false });
        toastr.error(error);
    }

    render() {

        let loading = null;

        if (this.state.loading) {
            loading = (
                <div className="relative">
                    <Loading />
                </div>
            );
        }

        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <h1>Search</h1>
                    <SearchForm
                        onChange={this.updateGrid}
                        onSearch={this.updateGrid}
                        errors={this.state.errors}
                        search={this.state.search}
                    />
                    <br />
                    {loading}
                    <PersonList people={this.props.people} />
                </div>
            </div>
        );
    }
}

SearchPage.propTypes = {
    people: PropTypes.arrayOf(PropTypes.object).isRequired,
    actions: PropTypes.object.isRequired,
    search: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        people: state.people,
        search: state.search
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(personActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);