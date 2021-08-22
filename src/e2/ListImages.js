import React from 'react';

const ListImages = ({imagesUrls}) => {

    const generateImages =() => {
        let images;
        if(imagesUrls.length > 0) {
            let index = 0;
            images = imagesUrls.map(img => {
                return <div className={'res-img'}><img key={'img_gal' + index++} src={img} alt=""/></div>;
            })
        }
        console.log(images);
        return images || 'Sorry - no images';
    }

    /*generateThumbs(){
        return this.state.unsplashRes.map(image => {
            return <img src={image.urls.thumb} alt=""/>;
        })
    }*/

    return (
        <div className={'res-img-con'}>
            {generateImages()}
        </div>
    );
};

export default ListImages;