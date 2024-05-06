import axios from 'axios';

const setAuthToken = (token) => {
    console.log("here is the token = " + token);
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;