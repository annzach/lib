
import axios from 'axios'
export function receiveContacts(contacts){
  return {
    type:'RECEIVE_CONTACTS',
    payload:{contacts}
  }
}



export function fetchContacts(){
  return dispatch => {
   axios.get('/api/contactlist')
        .then(res=>res.data)
        .then(contactlist =>{
          dispatch(receiveContacts(contactlist));
        })
        .catch(console.error);
  }
}

export function createContacts(contact){
  return dispatch =>{
    axios.post('/api/contactlist',contact)
         .then(()=>{
          dispatch(fetchContacts())
         })
         .catch(console.error)
  }
}

export function deleteContacts(id){
    console.log("id in action....", id);
  return dispatch =>{
    axios.delete('/api/contactlist/'+id)
          .then(()=>{
          dispatch(fetchContacts())
         })
         .catch(console.error)
  }
}

export function updateContacts(newVal,id){
  console.log("newVal",newVal);
    console.log("id in updatePokemon action....", id);
  return dispatch =>{
    axios.put('/api/contactlist/'+id , newVal)
          .then(()=>{
          dispatch(fetchContacts())
         })
         .catch(console.error)
  }
}
export function changeSort(value){
  return {
    type:'CHANGE_SORT',
    payload:{value}
  }
}

