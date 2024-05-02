const axios = require('axios');
const url = "http://localhost:8080";

async function GetVideo() {
    try {
        const response = await axios.get(url + "/");
    } catch(error) {
        console.error(error);
        return 1;
    }
}

export default GetVideo;