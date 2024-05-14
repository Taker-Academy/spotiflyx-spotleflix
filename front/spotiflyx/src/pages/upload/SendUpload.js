const axios = require('axios');
const url = "http://localhost:8080";

async function SendUpload(title, link, media) {
    let DataUser;
    const jwtToken = localStorage.getItem("jwtToken");

    const headers = {
        Authorization: `Bearer ${jwtToken}`
    };

    DataUser = {
        "title": title,
        "videoUrl": link,
    };

    if (media === "Video") {
        try {
            const response_video = await axios.post(url + "/video/post/", DataUser, {headers});
            console.log(response_video.status);
            if (response_video.status === 201) {
                console.log("Video uploaded successfully");
                return response_video;
            } else {
                console.error('An error occured during the process of changing the password');
                return response_video;
            }
        } catch (error) {
            console.error(error);
            return response;
        }
    } else if (media === "Music") {
        try {
            const response_music = await axios.post(url + "/music/post/", DataUser, {headers});
            if (response_music.status === 201) {
                console.log("Music uploaded successfully");
                return response_music;
            } else {
                console.error('An error occured during the process of changing the password');
                return response_music;
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export default SendUpload;
