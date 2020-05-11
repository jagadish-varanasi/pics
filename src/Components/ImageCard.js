import React from 'react';
//import ImageList from './ImageList';

class ImageCars extends React.Component{

    render(){
        //const {description,urls}=this.props.image;
        return( <div>
        <img
            alt={this.props.image.description}
            src={this.props.image.urls.regular}
        
        />
            {/* <img
            alt={description}
            src={this.props.image.urls.regular}
        
        /> */}

        </div>);
    }
}


export default ImageCars;
