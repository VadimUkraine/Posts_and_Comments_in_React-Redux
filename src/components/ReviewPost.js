import React, { Component } from 'react';
import '../style.css';
import RelationPost from './RelationPost';
import Author from './Author';
import CommentsList from './CommentsList';
import { connect } from 'react-redux';
import * as actions from '../store/actions/getAllUsers';

class ReviewPost extends Component {
  componentDidMount() {
      this.props.getAllUsers();
  }

  render() {
    const postId = this.props.match.params.id;
    const userId = this.props.allPosts.posts[postId-1].userId;
    
    return (
      <div className="review">
        <h3>description</h3>
          {this.props.allUsers.users.map((author)=>(
            author.id == userId ?
              <Author 
                key={author.id}
                id={author.id}
                name={author.name}
              />
              : null
          ))}
          {this.props.allPosts.posts.map((post)=>(
            post.id == postId ?
              <RelationPost
                key={post.id}
                id={post.id}
                text={post.body}     
               />
              : null
            ))}
    
        <div className="comments-wrap">
          <h3>Comments:</h3>
          <CommentsList postID={postId}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allPosts: state.allPosts,
  allUsers: state.allUsers,
});

function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: () => dispatch(actions.getAllUsers())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewPost);
