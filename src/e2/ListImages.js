import React from 'react';

const ListImages = ({images}) => {

    console.log(images);

    return (
        <div className={'images-con'}>
            {images}
        </div>
    );
};

export default ListImages;