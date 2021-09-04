import React,{Component} from 'react';
import {connect} from "react-redux";
import {getPosts} from "../actions";

class PostList extends Component {

    componentDidMount() {
        console.log(this.props.getPosts())
    }

    render(){
        console.log(this.props.posts);
        return (
            <div>
                posts
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {getPosts})(PostList);
