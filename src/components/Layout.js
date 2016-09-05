import React, { Component } from 'react';
import {Link} from 'react-router'

export default class Layout extends Component {
  render() {
    return (
     <div className = "container">
     <h1>Contact List</h1>
     <Link to ="">Home | </Link>
      <Link to ="/contactpage">Contact List</Link>

      {this.props.children}
     </div>
    )
  }
}
