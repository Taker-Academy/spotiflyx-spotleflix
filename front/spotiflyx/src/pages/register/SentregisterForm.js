const axios = require('axios');
const url = "http://localhost:8080";

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
        "firstName": firstname,
        "lastName": lastname,
        "email": email,
        "password": password,
    };

    try {
        console.log(DataUser);
        // Post user data
        const response = await axios.post(url + "/auth/register/", DataUser);

        // Handle successful response
        if (response.status === 201) {
            console.log("User Created successfully");
            return response;
        } else {
            throw new Error('Oops an error occurred\n');
            return response;
        }
    } catch (error) {
        // Handle error
        console.error(error);
        return response;
    }
}

export default SendRegisterForm;
