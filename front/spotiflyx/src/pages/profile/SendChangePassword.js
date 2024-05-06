const axios = require('axios');
const url = "http://localhost:8080";

async function SendChangePassword(password, new_password) {
    let DataUser;

    // Prepare user information
    DataUser = {
        "password": password,
        "new_password": new_password,
    };

    const jwtToken = localStorage.getItem("jwtToken");

    const headers = {
        Authorization: `Bearer ${jwtToken}`
    };

    try {
        // Post user data
        const response = await axios.put(url + "/profile/password/modify", DataUser, {headers});

        // Handle successful response
        if (response.status === 200) {
            console.log("Password changed successfully");
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

export default SendChangePassword;
