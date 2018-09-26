import React, { Component } from 'react';
import '../style.css';

class RelationPost extends Component {
  render() {
    const { key, id, text} = this.props;
    return (
      <div className="post-wrapper">
        {text}
      </div>
    );
  }
}

export default RelationPost;