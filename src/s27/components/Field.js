import React, {Component} from 'react';
import LangContext from "../context/LangContext";

class Field extends Component {
    static contextType = LangContext;

    render() {
        const text = this.context === 'english' ? 'Name' : 'Imie';

        return (
            <div className="ui field">
                <label>{text}</label>
                <input type="text"/>
            </div>
        );
    }
}

export default Field;
