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

    try {
        // Post user data
        const response = await axios.post(url + "/auth/login/", DataUser);

        // Handle successful response
        if (response.status === 200) {
            console.log("Log In successfully");
            return 0;
        } else {
            console.error('It seems you do not have an account');
            return 1;
        }
    } catch (error) {
        // Handle error
        console.error(error);
        return 1;
    }
}

export default SendLogInForm;
