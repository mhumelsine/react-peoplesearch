import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import * as personActions from '../../actions/personActions';
import EditPersonForm from './EditPersonForm';

class EditPage extends React.Component{
    constructor(props, context){
        super(props, context); 

        this.state = {
            person:Object.assign({}, props.person),
            saving:false,
            errors:{}
        };

        this.savePerson = this.savePerson.bind(this);
        this.updatePersonState = this.updatePersonState.bind(this);
    }

    componentWillReceiveProps(nextProps){
        //if props have actually changed
        if(nextProps.person.id !== this.props.person.id){
            this.setState({person:Object.assign({}, nextProps.person)});
        }
    }

    updatePersonState(event){
        let person = this.state.person;
        person[event.target.name] = event.target.value;

        return this.setState({person:person});
    }

    savePerson(event){
        event.preventDefault();//do not post the form
        this.setState({saving:true});//set state as saving
        this.props.actions.savePerson(this.state.person)
            .then(() => this.redirect())
            .catch(error => {
                this.setState({saving:false}); //set not saving
                toastr.error(error);
            });
    }

    redirect(){
        this.setState({saving:false});//set state as no longer saving
        toastr.success('Person saved');
        this.context.router.push('/');
    }

    render(){
        return(
            <EditPersonForm
                person={this.state.person}
                errors={this.state.errors}
                onChange={this.updatePersonState}
                onSave={this.savePerson}
            />
        );
    }
}

EditPage.propTypes = {
    person:PropTypes.object.isRequired,
    people:PropTypes.arrayOf(PropTypes.object).isRequired,
    actions:PropTypes.object.isRequired
};

EditPage.contextTypes = {
    router:PropTypes.object
};

function getPersonById(people, id){
    const person = people.filter(x => x.id == id);

    if(person){
       return person[0]; 
    }
    return null;
}

function mapStateToProps(state, ownProps){
    const personId = ownProps.params.id;

    let person = {
        firstName:'',
        lastName:'',
        birthDate:'',
        gender:''
    };

    if(personId && state.people.length > 0){
        person = getPersonById(state.people,personId);
    }

    return {
        person:person,
        people:state.people
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(personActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);