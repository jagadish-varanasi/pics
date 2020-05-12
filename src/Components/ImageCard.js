import React from 'react';
//import ImageList from './ImageList';

class ImageCars extends React.Component{
    constructor(props){
        super(props);
       this.state={spans:0};
        this.imageRef=React.createRef();
    }

    componentDidMount(){
       // ull get undefined or 0 bcz...u just not loaded image..later u can see clientHeight in inspect...
        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    //setSpan callback function
    setSpans=()=>{
        const height=this.imageRef.current.clientHeight;
        const spans=Math.ceil(height/10);
        this.setState({spans});
    }

    render(){
        //const {description,urls}=this.props.image;
        return( <div style={{gridRowEnd:`span ${this.state.spans}`}}>
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
