export default function contactReducer(state = [], action) {
  switch(action.type) {
    case 'RECEIVE_CONTACTS': 
      return action.payload.contacts;


    default: 
            return state;
  }
}