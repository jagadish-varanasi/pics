import React from 'react';

class SearchBar extends React.Component{
//callback is called ...event object contains buch of uinfo that has just occured
// onInputChange is wantedly given name...Input is the element and chnge is the event...its is communiuty convention to make more meaningful and understandable
    onInputChange(event){
        console.log(event.target.value)
    }

    // onInputClick(){
    //     console.log('The input was clicked!!')
    // }


    
    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                   <div className="field">
                    <label>Image Search</label>   
                    <input type="text" onChange={this.onInputChange}/>
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