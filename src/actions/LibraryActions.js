import API from '../API';

const LibraryActions = {
 getAllBooks:API.getAllBooks,

 createBooks(book){
  console.log("Inside LA create Books")
  API.createBooks(book);
 },

 lookup(author){
  API.lookup(author);
 }

}

export default LibraryActions;