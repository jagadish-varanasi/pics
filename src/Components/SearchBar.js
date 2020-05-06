import React from 'react';

class SearchBar extends React.Component{
    state={term:''};
//callback is called ...event object contains buch of uinfo that has just occured
// onInputChange is wantedly given name...Input is the element and chnge is the event...its is communiuty convention to make more meaningful and understandable
    // onInputChange(event){
    //     console.log(event.target.value)
    // }

    // onInputClick(){
    //     console.log('The input was clicked!!')
    // }
    onFormSubmit=(event)=>{
        // whenever u click enter on form it is going to render again to avoid this...submit and refreash the page
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        console.log(this.state.term); //this line produces one imp error do check it out!!!! we are trying to ref undefind.state
        //1.bind *this* in constructor
        //2.arrow function...so that u hold this value....that is this func did
        //3.
    }


    
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={(event)=>this.onFormSubmit(event)} className="ui form">
                   <div className="field">
                    <label>Image Search</label>   
                    {/* know this? uncontrolled and controlled events */}
                    {/* store info in React component state rather that in html dom */}
                    <input type="text" value={this.state.value}
                    onChange={(e)=>this.setState({term:e.target.value})}/>
                    {/* once user types input onchage is evoked..i.e callback...we pull the value using event obj..and setstate it..due to setstate render( is rerenderd for 2nd time 
                    now we take this.state.term as value is to show in inputt...check by keep something in value ull se it in brower */}
                    {/* <input type='text' onClick={this.onInputClick} /> */}
                                      {/* onChange is a prop name...different events are goinging to wired to difff prop.... like onClick..onSubmit*/}
                    {/* u should not put onInputChange() parantesis bcz...if u put that as soon as render method is called onInputChange is also called.That should not happen ..so it should be a callback func that is called only when input is given*/}
                  </div>
                </form>
            </div>
        );
    }


}


export default SearchBar;