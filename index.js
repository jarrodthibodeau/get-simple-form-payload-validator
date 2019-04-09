const cors = require('micro-cors')();
const parse = require('urlencoded-body-parser');
const { post } = require('axios');
const redirect = require('micro-redirect')

const handler = async (req, res) => {
    const data = await parse(req);

    let formIsValid = true;

    console.log('the body: ', data);





    redirect(res, 302, data[redirect_to]);
}

module.exports = cors(handler);