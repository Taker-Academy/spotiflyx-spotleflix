const axios = require('axios');

async function addToFav(url) {
    const url_requ = "http://localhost:8080" + "/favorite/video/post";
    const jwtToken = localStorage.getItem("jwtToken");

    const headers = {
        Authorization: `Bearer ${jwtToken}`
    };

    const DataUser = {
        url: url
    }

    try {
        const response = await axios.post(url_requ, DataUser, {headers});

        if (response.status === 201) {
            console.log("Video successfully added so fav");
            return response;
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
            return response;
        }
    } catch (error) {
        console.error(error);
        return response;
    }
}

export default addToFav;
