import React from 'react';
import ImageCard from "./imageCard";

const ListImages = ({imagesRes}) => {

    const imagesCount = 0;

    const generateImages =() => {
        let images;
        if(imagesRes.length > 0) {
            // images = imagesRes.map(({urls, alt_description, id}) => { // destructuring to simplify input of dynamic values on the generated elements below
            images = imagesRes.map((img) => { // destructuring to simplify input of dynamic values on the generated elements below
                // return <div key={id} className={'res-img'}><img src={urls.thumb} alt={alt_description}/></div>;
                return <ImageCard key={img.id} image={img} />
            })
        }
        return <div className={'res-img-list'}>{images}</div>;
    }

    /*generateThumbs(){
        return this.state.unsplashRes.map(image => {
            return <img src={image.urls.thumb} alt=""/>;
        })
    }*/

    return (
        <div className={'res-img-con'}>
            Found {imagesCount} images
            {generateImages()}
        </div>
    );
};

export default ListImages;