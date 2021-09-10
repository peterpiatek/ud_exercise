import React,{Component} from 'react';
import {connect} from "react-redux";
import {getPostsAndUsers} from "../actions";
import PostAuthor from "./PostAuthor";

class PostList extends Component {

    componentDidMount() {
        this.props.getPostsAndUsers();
    }

    renderlist = () => {
        return this.props.posts.map((post) => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <PostAuthor userId={post.userId} />
                        </div>
                    </div>
                </div>
            );
        })
    }

    render(){
        return (
            <div className="ui relaxed divided list">
                {this.renderlist()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
    };
}

export default connect(mapStateToProps, {getPostsAndUsers})(PostList);
