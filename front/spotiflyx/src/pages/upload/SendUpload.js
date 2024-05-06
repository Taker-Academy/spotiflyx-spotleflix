const axios = require('axios');
const url = "http://localhost:8080";

async function SendUpload(title, link, media) {
    let DataUser;

    DataUser = {
        "title": title,
        "link": link,
    };

    try {
        // Post user data
        const response = '';

        if (media === "Video") {
            response = await axios.post(url + "/video/post/", DataUser);
        } else if (media === "Music") {
            response = await axios.post(url + "/music/post/", DataUser);
        }

        // Handle successful response
        if (response.status === 201) {
            console.log("Video uploaded successfully");
            return response;
        } else {
            console.error('An error occured during the process of changing the password');
            return response;
        }
    } catch (error) {
        // Handle error
        console.error(error);
        return response;
    }
}

export default SendUpload;
