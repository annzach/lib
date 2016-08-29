import React , {Component} from 'react';
import LibraryActions from '../actions/LibraryActions'

export default class SearchPage extends Component {
 constructor(props){
   super();
   this.state ={
    author:''
   }
   this.searchAuthor = this.searchAuthor.bind(this);
   }
 


searchAuthor(e){
  e.preventDefault();
  console.log(this.state.author);
  LibraryActions.lookup(this.state.author);
}
  render() {
    
   console.log("inside Search Page2");
    return (
      <div>
       <form className ="formStyle" onSubmit={this.searchAuthor}>
        <div className="container form-group">
            <input type="text" value ={this.state.author} placeholder ="Search Author" className="form-control input-lg input2"
             onChange={e=>this.setState({author:e.target.value})} />
              <div  className="container form-group text-center">
            <button type="submit"  className="btn btn-primary btn-lg">Submit</button>
          </div>
          </div>


        </form>
 
      </div>
    )
  }
}


