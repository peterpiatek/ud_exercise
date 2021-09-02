import React, {Component} from 'react';
import {connect} from "react-redux";

class ListSongs extends Component {
    render () {
        return (
            <div>welcome</div>
        );
    }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(ListSongs);
