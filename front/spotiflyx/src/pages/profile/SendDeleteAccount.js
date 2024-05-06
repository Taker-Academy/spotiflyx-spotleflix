const axios = require('axios');
const url = "http://localhost:8080";

async function SendDeleteAccount() {

    try {
        // Post user data
        const response = await axios.delete(url + "/profile/delete/");

        // Handle successful response
        if (response.status === 200) {
            console.log("Profile deleted successfully");
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

export default SendDeleteAccount;
