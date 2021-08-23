import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {userInput: ''}
    }

    onUserInput = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.userInput);
    }


    render() {
        return (
            <div className={'search-bar ui segment'}>
                <form className={'ui form'} onSubmit={this.onUserInput}>
                    <div className="field">
                        <label>Find anything...</label>
                        <input value={this.state.userInput} type="text"
                               onChange={e => this.setState({userInput: e.target.value})}/>
                    </div>
                    <button className={'ui button'} type={'submit'}>Find</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;