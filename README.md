## Application deployed to heroku :
### https://hidden-waters-17492.herokuapp.com/


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## This Project is used to display the images searched by user :rocket:

>Styling is done with sematic-ui
* [Semantic-ui](https://semantic-ui.com/)

>Made use of UnSplash API
* [Unsplash](https://unsplash.com/developers)
* Register-->Create Application-->Go to Documentation-->search for Search Photos

>AJAX client is used to make request over API.
* axios--3rd party package
* fetch--function built in modern browers(requires lot of code than axios)

>U can install axious with npm
`npm install --save axios`

```
onSearchSubmit(term){
      //request to api
      axios.get('https://api.unsplash.com/search/photos',{
          params:{query:term},
          headers:{
              Authorization:'---- YOUR API ACCCESS KEY------'
          }
      });
      
  }
  ```

  #### Using .then to fetch images 
  ```  onSearchSubmit(term){
      //request to api
      axios.get('https://api.unsplash.com/search/photos',{
          params:{query:term},
          headers:{
              Authorization:'---- YOUR API ACCCESS KEY------'
          }
      }).then(
          (response)=>{
              console.log(response.data.results);
          }
      )
      
  }
  ```

  ### Using async await Syntax
  ```
  async onSearchSubmit(term){
      //request to api
     const response=await axios.get('https://api.unsplash.com/search/photos',{
          params:{query:term},
          headers:{
              Authorization:'---- YOUR API ACCCESS KEY------'
          }
      });
      console.log(response.data.results);
    ```  


