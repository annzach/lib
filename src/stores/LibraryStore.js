import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _library = [];

class LibraryStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch (action.type) {
        case 'RECEIVE_BOOKS':
         _library = action.books;
          this.emit('CHANGE');
          break;
        case 'CREATE_BOOK':
          var { book } = action;
         _library.push(book);
          console.log('book:',book)
          this.emit('CHANGE');
          break;
    /*    case 'HOUSES_WITHOUT_OWNER':
          _withoutOwnerLibrarys = action.houses;
          this.emit('CHANGE');
          break;*/
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _library;
  }

 /* getWithoutOwnerLibrarys(){
    return _withoutOwnerLibrarys;
  }*/

}

export default new LibraryStore();