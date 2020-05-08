import React from 'react'
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component{
  onSearchSubmit(term){
      //request to api
      axios.get('https://api.unsplash.com/search/photos',{
          params:{query:term},
          headers:{
              Authorization:'Client-ID ZafDgQvrCjE38VNUJWyOhVmbWgbME-6dFc0vN5rILZA'
          }
      }).then(
          (response)=>{
              console.log(response.data.result);
          }
      )
      
  }
    render(){
   return(
       <div className="ui container" style={{marginTop:'10px'}}>
           <SearchBar onSubmit={this.onSearchSubmit}/>
       </div>
   );
   }

}

export default App;