import React, {Component} from 'react';
import {connect} from "react-redux";
import {selectSong} from "../actions";

class ListSongs extends Component {

    renderSongs = () => {
        return this.props.songs.map(song => {

            const selectedCss = (id) => {
                if(this.props.selectedSong !== null){
                    return this.props.selectedSong.id === id ? '#e1f5f5' : '';
                } else {
                    return '';
                }
            }

            return(
                <div key={song.id} className="item" style={{backgroundColor: selectedCss(song.id)}}>
                    <div className="right floated content">
                        <button onClick={() => {this.props.selectSong(song)}} className="ui button primary">Select</button>
                    </div>
                    <i className="linkify icon"> </i>
                    <div className="content">
                        <a href="">{song.title}</a>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderSongs()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, { selectSong })(ListSongs);
