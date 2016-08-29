import AppDispatcher from '../AppDispatcher'

const LibraryServerActions = {
  receiveBooks(books){
    AppDispatcher.dispatch({
      type:'RECEIVE_BOOKS',
      books
    })
  },

  createBook(book){
    console.log("Inside Lib Server action")
    AppDispatcher.dispatch({
      type:'CREATE_BOOK',
      book
    })
  }

}
export default LibraryServerActions;