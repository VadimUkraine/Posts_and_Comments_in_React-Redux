import React, { Component } from 'react';
import '../style.css';


class SingleComment extends Component {
  render() {
  	const{ key, id, name, creator, text} = this.props;
    return (
      <div className="comments">
      	<p className="comments__name"><span>Title:</span> {name}</p>
      	<p className="comments__creator"><span>Creator:</span> {creator}</p>
      	<p className="comments__text"><span>Comment:</span> {text}</p>
      </div>
    );
  }
}

export default SingleComment;