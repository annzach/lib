import React, { Component } from 'react';


 export default class ContactList extends Component {
  
  constructor(){
    super();
    this.deleteMe=this.deleteMe.bind(this);
    this.updateMe=this.updateMe.bind(this);
  }
   deleteMe(e){
    console.log("please delete me!!!", e.target.id);
    this.props.deleteContacts(e.target.id);

   }

   updateMe(e){
    var name = prompt("Enter the name");
    var number= prompt("Enter Number");
    var image = prompt("Enter Image");
    var newVal = {"name":name,"number":number,"image":image};
    console.log("updateMe please");
    this.props.updateContacts(newVal,e.target.id);
   }

  render() {
    
    let {contact, deleteContact} = this.props;


     let Contact = contact.map(p =>{
      let {_id,name,image} = p;

       return (
        <div className="col-xs-12 col-md-4" key ={_id}>
         <div>
           <img src={image} width = "150 px" alt=""/>
         </div>
         <div>
           <h3>{name}</h3>
           <div>
           <button id ={_id} className ="btn btn-danger" onClick={this.deleteMe}>Delete</button>
           <button id={_id} className = "btn btn-success" onClick={this.updateMe}>Update</button>
           </div>
         </div>
        </div>
        )
     })
     return <div>
       {Contact}
     </div>
    
  }
}



  