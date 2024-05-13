const axios = require('axios');
const url = "http://localhost:8080";

async function GetHomeMusic() {
    const url_requ = url + "/spotify/popular";
    const jwtToken = localStorage.getItem("jwtToken");

    const headers = {
        Authorization: `Bearer ${jwtToken}`
    };

    try {
        const response = await axios.get(url_requ, {headers});

        if (response.status === 200) {
            console.log("Music Find successfully");
            return response.data;
        } else {
            if (response.status === 400) {
                console.error("There is some parameter missing");
            }
            if (response.status === 401) {
                console.error("Bad JWT Token");
            }
            if (response.status === 500) {
                console.error("Internal Server Error");
            }
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default GetHomeMusic;
