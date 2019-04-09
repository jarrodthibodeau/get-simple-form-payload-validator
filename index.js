const { send, createError, run, json } = require('micro');
const cors = require('micro-cors')();

const handler = async (req, res) => {
    console.log(req);
    let myPostData;

    try {
        myPostData  = await json(req);
    } catch (e) {
        return send(res, 400, 'you suck bitch');
    }


    console.log('the body: ', myPostData);

    return send(res, 200, 'hihihihi');
}

module.exports = cors(handler);