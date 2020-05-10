import React from 'react';

const ImageList =(props)=>{
    const images=props.image.map((image)=>{
       return <img alt={image.description} src={image.urls.regular} key={image.id} />
    });
return <div>{images}</div>
};

export default ImageList;