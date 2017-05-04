import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        // provided by react-router 
        // params lists wild card tokens from the url { :id } from route
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }
    render() {
        const { post } = this.props;
        // check to see if there is a post so we dont get post is undefined
        if (!post) {
            return <div>Loading...</div>;
        }
        return (
            <div>
            <Link to="/">Back to Index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}
// ownProps is the props object that is going to PostShow === this.props in render
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);