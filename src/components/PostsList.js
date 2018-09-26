import React, { Component } from 'react';
import SinglePost from './SinglePost';
import '../style.css'
import { connect } from 'react-redux';
import * as actions from '../store/actions/getAllPosts';


class PostsList extends Component {
  componentDidMount() {
      this.props.getAllPosts();
  }

  constructor(){
    super();

    this.state = {
      search: '',
    };
  }

  updateSearch(event){
    this.setState({search: event.target.value});
  }

  render() {
    const filterPosts = this.props.allPosts.posts.filter(
        (post)=>{
          return post.body.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ;
        }
      );
    return (
         <main className="wrapper">
            <header>
              <h1>List of Posts</h1>
              <input type="text" placeholder="search" value ={this.state.search} onChange={this.updateSearch.bind(this)} />
            </header>
            {filterPosts
              .map((posts) => (
                <SinglePost
                  key={posts.id}
                  id={posts.id}
                  title={posts.title}
                />
              ))}
          </main>
    );
  }
}

const mapStateToProps = (state) => ({
  allPosts: state.allPosts
});

function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: () => dispatch(actions.getAllPosts())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
