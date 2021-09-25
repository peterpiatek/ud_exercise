import React, {Component} from 'react';
import UserCreate from "./UserCreate";
import LangContext from "../context/LangContext";
import ColorContext from "../context/ColorContext";

class App extends Component {

    state = {
        lang: 'default'
    }

    onLangChange = lang => {
        this.setState({lang})
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select Lang:
                    <i className="flag uk" onClick={e => this.onLangChange('english')}/>
                    <i className="flag pl" onClick={e => this.onLangChange('polish')}/>
                </div>
                <LangContext.Provider value={this.state.lang}>
                    <ColorContext.Provider value={'blue'}>
                        <UserCreate/>
                    </ColorContext.Provider>
                </LangContext.Provider>
            </div>
        );
    }
}

export default App;
