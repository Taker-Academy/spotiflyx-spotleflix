const axios = require('axios');
const url = "http://localhost:8080";

async function GetVideoFav() {
    const url_requ = url + "/favorite/video/";
    const jwtToken = localStorage.getItem("jwtToken");

    const headers = {
        Authorization: `Bearer ${jwtToken}`
    };

    try {
        const response = await axios.get(url_requ, {headers});

        if (response.status === 200) {
            console.log("Video Find successfully");
            return response.data;
        } else {
            if (response.status === 400) {
                console.error("This is some parameter missing");
            }
            if (response.status === 401) {
                console.error("Bad JWT Token");
            }
            if (response.status === 500) {
                console.error("Internal Server Error");
            }
            console.error(response.status);
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default GetVideoFav;
