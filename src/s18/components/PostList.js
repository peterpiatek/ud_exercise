import React,{Component} from 'react';
import {connect} from "react-redux";
import {getPosts, getUsers} from "../actions";
import PostAuthor from "./PostAuthor";

class PostList extends Component {

    componentDidMount() {
        this.props.getPosts();
        this.props.getUsers();
    }

    renderlist = () => {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <PostAuthor />
                        </div>
                    </div>
                </div>
            );
        })
    }

    render(){
        console.log(this.props.users);
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
        users: state.users
    };
}

export default connect(mapStateToProps, {getPosts, getUsers})(PostList);
