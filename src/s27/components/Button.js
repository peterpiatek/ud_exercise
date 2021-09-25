import React, {Component} from 'react';
import LangContext from "../context/LangContext";
import ColorContext from "../context/ColorContext";

class Button extends Component {
    // static contextType = LangContext; when we use consumer we do not need to specify contextType

    renderButton(color){
        return (
            <button className={`ui button ${color}`}>
                <LangContext.Consumer>
                    {(value) => value === 'english' ? 'Submit' : 'Wyslij'}
                </LangContext.Consumer>
            </button>
        );
    }

    render() {
        // const text = this.context === 'english' ? 'Submit' : 'Wyslij'; delete if consumer is used
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;
