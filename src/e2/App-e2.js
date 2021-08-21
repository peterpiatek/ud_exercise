import './App-e2.css';

import axios from 'axios';
import React, {Component} from "react";

import SearchBar from "./SearchBar";
import ListImages from "./ListImages";

export default class AppE2 extends Component {

    state = {userInput: '', unsplashRes: []};

    onTermSearch = userInput => {
        const fetchPhotos = axios.create({
            baseURL: 'https://api.unsplash.com/search/photos',
            params: {query: userInput},
            timeout: 1000,
            headers: {Authorization: 'Client-ID 9LWb0np6k7dgdO9NJgny0OvfYIbEXH28TpJ1q9GZ7yI'}
        });

        fetchPhotos()
            .then(res => this.setState({unsplashRes: res.data.results}))
            .catch(err => console.log(err))
    }

    generateThumbs(){
        console.log(this.state.unsplashRes);
        return this.state.unsplashRes.map(image => {
            return <img src={image.urls.thumb} alt=""/>;
        })
    }

    render() {
        return (
            <div className={'ui container'}>
                <SearchBar onSubmit={this.onTermSearch}/>
                <ListImages images={this.generateThumbs()}/>
            </div>
        );
    }
}