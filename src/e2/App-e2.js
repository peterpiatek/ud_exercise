import './App-e2.css';

import React, {Component} from "react";
import unsplash from "./api/unsplash";

import SearchBar from "./SearchBar";
import ListImages from "./ListImages";

export default class AppE2 extends Component {

    state = {userInput: '', unsplashRes: []};

    onTermSearch = async userInput => {
        const res = await unsplash.get('/search/photos',
            {params: {query: userInput}});
        this.setState({unsplashRes: res.data.results});
    }

    //no need to extract data here for links only, better to pass the whole obj with other meta data to the list component
    /*getImagesUrls (){
        return this.state.unsplashRes.map(result => {
            return result.urls.thumb;
        });
    }*/

    render() {
        return (
            <div className={'ui container'}>
                <SearchBar onSubmit={this.onTermSearch}/>
                <ListImages imagesRes={this.state.unsplashRes}/>
            </div>
        );
    }
}