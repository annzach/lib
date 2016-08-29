import axios from 'axios'
import LibraryServerActions from './actions/LibraryServerActions'

const API ={
  getAllBooks(){
    axios.get('/api/librarys')
         .then(res=>res.data)
         .then(LibraryServerActions.receiveBooks)
         .catch(console.error);
},

createBooks(book) {
   console.log("Inside API create Books")
  axios.post('/api/librarys',book)
        .then(res=>res.data)
        //.then(console.log(res))
        .then(LibraryServerActions.createBook)
        .catch(console.error);
},
lookup(author){
  axios.get('/lookup/:author')
       .then(res=>res.data)
       .then(LibraryServerActions.receiveBooks)
       .catch(console.error);
}

}


export default API;