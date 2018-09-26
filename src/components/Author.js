import React, { Component } from 'react';
import '../style.css';

class Author extends Component {
  render() {
    const {key, id, name} = this.props; 
    return (
      <h4><span>Author:</span> {name}</h4>
    );
  }
}

export default Author;