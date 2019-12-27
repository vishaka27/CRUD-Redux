import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import AllPost from './AllPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center">Post it</h2>
        </div>
        <PostForm />
        {(this.props.posts.length > 0) && (
          <AllPost />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state
  }
};

export default connect(mapStateToProps)(App);

