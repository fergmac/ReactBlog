import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            )
        });
    }
    render() {
        return (
            <div>
                <h3>PostIndex</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

// short form of wiring up action, instead of using mapDispatchToProps we can
// pass action creator as second connect argument and destructure with es6
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);