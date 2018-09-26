import React, { Component } from 'react';
import '../style.css';
import SingleComment from './SingleComment';
import { connect } from 'react-redux';
import * as actions from '../store/actions/getAllComments';

class CommentsList extends Component {
	componentDidMount() {
      this.props.getAllComments();
 	}
  render() {
  	const postId = this.props.postID;
    return (
    	<div>
	      	{this.props.allComments.comments
	              .map((comment) => (
	              	comment.postId == postId ?
		              <SingleComment
		                key={comment.id}
		                id={comment.id}
		                name={comment.name}
		                creator={comment.email}
		                text={comment.body}
		              />
              		: null
	   	        ))}
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allComments: state.allComments,
});

function mapDispatchToProps(dispatch) {
  return {
    getAllComments: () => dispatch(actions.getAllComments())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);