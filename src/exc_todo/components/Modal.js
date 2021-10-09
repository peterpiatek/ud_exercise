import React from 'react';
import ReactDOM from "react-dom";

class Modal extends React.Component {

    render () {
        return ReactDOM.createPortal(
            <div onClick={this.props.onDismiss} className={`ui visible dimmer ${this.props.active}`}>
                <div onClick={e => e.stopPropagation()} className="ui standard modal active">
                    <i onClick={this.props.onDismiss} className="close icon" />
                    <div className="header">
                        {this.props.title}
                    </div>
                    <div className="image content">
                        <div className="image">
                            {this.props.subtitle}
                        </div>
                        <div className="description">
                            {this.props.desc}
                        </div>
                    </div>
                    <div className="actions">
                        {this.props.actions}
                    </div>
                </div>
            </div>,
            document.getElementById('modal')
        );
    }
}

export default Modal;
