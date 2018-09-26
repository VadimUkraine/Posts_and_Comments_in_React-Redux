import React, { Component } from 'react';
import '../style.css'
import {Link, BrowserRouter}  from 'react-router-dom';

class SinglePost extends Component {
  render() {
  	const { key, id, title } = this.props;
    return (
        <Link to={`/${id}`} className="link">{id}. {title}</Link>
    );
  }
}

export default SinglePost;