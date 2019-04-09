const cors = require('micro-cors')();
const parse = require('urlencoded-body-parser');
const { post } = require('axios');
const redirect = require('micro-redirect');
const validator = require('validator');

const handler = async (req, res) => {
    const {
        name,
        email,
        redirect_to,
        form_destination,
        message
    } = await parse(req);

    const formIsValid = validator.isAlpha(name) && validator.isEmail(email);

    if (formIsValid) {
        await post(form_destination, { name, email, message, redirect_to });
    }

    redirect(res, 302, redirect_to);
}

module.exports = cors(handler);