import React, {Component} from 'react';

export default class ImageCard extends Component {

    constructor(props) {
        super(props);
        this.state = {spans: 0}
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height + 8);
        this.setState({spans})
    }

    render() {

        const {alt_description, urls} = this.props.image;

        return (
            <div
                className={'res-img'}
                style={{gridRowEnd: `span ${this.state.spans}`}}
            >
                <img
                    ref={this.imageRef}
                    src={urls.thumb}
                    alt={alt_description}
                />
            </div>
        );
    }
};
