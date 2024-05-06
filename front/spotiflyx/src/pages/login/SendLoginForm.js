const axios = require('axios');
const url = "http://localhost:8080";

function checkValidityAddress(email) {
    let substring = "@";

    return email.includes(substring);
}

async function SendLogInForm(email, password) {
    let DataUser;

    // Prepare user information
    DataUser = {
        "email": email,
        "password": password,
    };

    console.error(DataUser.email);
    console.error(DataUser.password);

    try {
        // Post user data
        const response = await axios.post(url + "/auth/login/", DataUser);

        console.log("Response return a status of " + response.status);
        // Handle successful response
        if (response.status === 200) {
            console.log("Log In successfully");
            return response;
        } else {
            console.error('It seems you do not have an account');
            return response;
        }
    } catch (error) {
        // Handle error
        console.error(error);
        return response;
    }
}

export default SendLogInForm;
