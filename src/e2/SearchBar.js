import React, {Component} from "react";

export default class SearchBar extends Component {
    state = {userInput: ''};

    //handling "this" - method 1 (older use)
    /*constructor (p){
        super(p);
        this.onSubmit = this.onSubmit.bind(this);
    }*/

    //for single line code we can use abbreviation directly on input onChange attr
    /*onInputChange(e){
        this.state.setState({userInput: e.target.value});
    }*/

    //handling "this" - method 2 - change method fn to arrow fn
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.userInput);
    }

    render () {
        return (
            //handling "this" - method 3 - wrap fn into an arrow fn on invoke step
            // <form className="ui form" onSubmit={e => this.onSubmit(e)}>
            //handling "this" - method 4 - bind fn on invoke step
            // <form className="ui form" onSubmit={this.onSubmit().bind(this)}>

            <form className="ui form" onSubmit={this.onSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    <input value={this.state.userInput} onChange={ e => this.setState({userInput: e.target.value})} type="text" name="first-name" placeholder="First Name" />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        );
    }
};