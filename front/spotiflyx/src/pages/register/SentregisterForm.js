const axios = require('axios'); // Assuming axios is installed via npm
const url = "http://localhost:8080"

function checkValidityAddress(email) {
    let substring = "@";

    return email.includes(substring);
}

async function SendRegisterForm(firstname, lastname, email, password) {
    let DataUser;

    if (checkValidityAddress(email) === false) {
        throw new Error('Email invalid !')
    }

    // Check valid data
    if (firstname.length < 2 || lastname.length < 2 || email.length < 2) {
        throw new Error('First name, last name or email invalid !\n')
    }

    // Prepare user information
    DataUser = {
        "email": email,
        "firstName": firstname,
        "lastName": lastname,
        "password": password,
    };

    try {
        // Post user data
        const response = await axios.post(url + "/register/", DataUser);

        // Handle successful response
        if (response.data) {
            return "User Created successfully\n";
        } else {
            throw new Error('Oops an error occured\n');
        }
    } catch (error) {
        // Handle error
        console.error(error);
        return "error";
    }
}

export default SendRegisterForm;
