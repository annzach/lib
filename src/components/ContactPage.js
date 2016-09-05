import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchContacts, createContacts, deleteContacts ,updateContacts} from '../actions/ContactActions'
import  ContactList from './ContactList'
import FormModal from './FormModal'

/**/


  class  ContactPage extends Component {

  constructor(){
    super();
    this._submitForm = this._submitForm.bind(this);
  }

  _submitForm(contact){


    
    this.props.createContacts(contact)
  }

  componentWillMount(){
    this.props.fetchContacts();
  }

  render() {
    let {contact , deleteContacts, updateContacts, createContacts} = this.props;
    console.log('contact page', contact);
    let modalId = 'NewContactsModal'
    let schema = {
      name:{type:'text',label:'Name', required:true},
      phonenumber:{type:'number',label:'Contacts Num', required:true},
      image:{type:'text',label:'Image URL', required:true},
      address:{type:'text',label:'Address'}

    }

    return (
      <div>
      <h1 className="text-center">contact page!</h1>
      <button 
      className="btn btn-success"
      data-toggle='modal'
      data-target={'#'+modalId}>Create New Contacts
      </button>
     <ContactList contact={contact} deleteContacts = {deleteContacts} updateContacts ={updateContacts}/>


      <FormModal
      modalId= {modalId}
      title={'New Contacts'}
      submitForm= {this._submitForm}
      schema= {schema}/>
      </div>
    )
  }
}



export default connect(
  state => ({
      contact: state.contact
  }),
  dispatch => {
    return {
      fetchContacts(){
        dispatch(fetchContacts())
      },
      createContacts(contact){
    dispatch(createContacts(contact))
    },
    deleteContacts(id){
      dispatch(deleteContacts(id))
    },
    updateContacts(newVal,id){
      dispatch(updateContacts(newVal,id))
    }
    }
  }
)(ContactPage)
  