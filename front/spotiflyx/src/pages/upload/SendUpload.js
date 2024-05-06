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

        if (media === "Video") {
            const response_video = await axios.post(url + "/video/post/", DataUser);
            if (response_video.status === 201) {
                console.log("Video uploaded successfully");
                return response_video;
            } else {
                console.error('An error occured during the process of changing the password');
                return response_video;
            }
        } else if (media === "Music") {
            const response_music = await axios.post(url + "/music/post/", DataUser);
            if (response_music.status === 201) {
                console.log("Music uploaded successfully");
                return response_music;
            } else {
                console.error('An error occured during the process of changing the password');
                return response_music;
            }
        }

        // Handle successful response
    } catch (error) {
        // Handle error
        console.error(error);
        if (media === "Video") {
            return response_video;
        }
        return response_music;
    }
}

export default SendUpload;
