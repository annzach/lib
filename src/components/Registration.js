import React , {Component} from 'react';
import LibraryActions from '../actions/LibraryActions'
import {browserHistory} from 'react-router'
import SearchPage from './SearchPage'

export default class Registration extends Component {

   constructor() {
    super();
    this.state ={
      author:'',
      title:''
    }
    this.submitBook=this.submitBook.bind(this);
  }


  submitBook(e){
   console.log('hi dude');
   debugger;
    e.preventDefault();
    console.log("click me")
    let book = {
      author:this.state.author,
      title:this.state.title
    }
    console.log(book);
    
    LibraryActions.createBooks(book);
    this.setState({'book' : ''});
    browserHistory.push('/searchpage');
  }
  render() {
    let {book} = this.state;

    return (
      <div>
       <form className ="formStyle" onSubmit={this.submitBook} >
        <div className="container form-group">
            <input type="text" value = {this.state.author} placeholder ="Author" className="form-control input-lg input2"
              onChange={e=>this.setState({author:e.target.value})}/>
          </div>

          <div className="container form-group">
            <input type="text" value = {this.state.title} placeholder="Title" className="form-control input-lg input3"
              onChange={e=>this.setState({title:e.target.value})}/>
          </div>

          <div  className="container form-group text-center">
            <button type="submit"  className="btn btn-primary btn-lg">Submit</button>
          </div>

        </form>
 
      </div>
    )
  }
}
