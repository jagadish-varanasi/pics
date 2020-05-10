import axious from 'axios';
//creates an instance of axious
export default axious.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID ZafDgQvrCjE38VNUJWyOhVmbWgbME-6dFc0vN5rILZA'
    }
});
