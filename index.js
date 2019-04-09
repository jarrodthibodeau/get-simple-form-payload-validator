const { send, createError, run, json } = require('micro');
const cors = require('micro-cors')();

const handler = async (req, res) => {
    const { myPostData } = await json(req);

    console.log('the body: ', myPostData);

    return send(res, 200, 'hihihihi');
}

module.exports = cors(handler);