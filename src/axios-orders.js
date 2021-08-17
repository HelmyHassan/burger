import axios from 'axios';


const instance = axios.create({
    baseURL:'https://my-burger-24f92-default-rtdb.firebaseio.com/'
});

export default instance;