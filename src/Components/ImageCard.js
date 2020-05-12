import React from 'react';
//import ImageList from './ImageList';

class ImageCars extends React.Component{
    constructor(props){
        super(props);

        this.imageRef=React.createRef();
    }

    componentDidMount(){
        console.log(this.imageRef);
       // ull get undefined or 0 bcz...u just not loaded image..later u can see clientHeight in inspect...
        console.log(this.imageRef.current.clientHeigth);
    }

    render(){
        //const {description,urls}=this.props.image;
        return( <div>
        <img
            //  ref is jsx tag its not a dom element
            ref={this.imageRef}
            alt={this.props.image.description}
            src={this.props.image.urls.regular}
        
        />
            {/* <img
            alt={description}
            src={regular}
        
        /> */}

        </div>);
    }
}


export default ImageCars;
