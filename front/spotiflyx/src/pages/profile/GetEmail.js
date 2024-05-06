const axios = require('axios');
const url = "http://localhost:8080";

async function GetEmail() {
    const url_send = url + "/profile";
    const jwtToken = localStorage.getItem("jwtToken");

    const headers = {
        Authorization: `Bearer ${jwtToken}`
    };

    try {

        // Post user data
        console.log("The ur is = " + url_send);
        const response = await axios.get(url_send, {headers});

        console.error("Status erros is " + response.status)
        // Handle successful response
        if (response.status === 200) {
            console.log("Profile data retrieve successfully");
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

export default GetEmail;
