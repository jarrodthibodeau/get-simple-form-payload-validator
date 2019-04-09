const { send, createError, run, json } = require('micro');

const handler = async (req, res) => {
    const { myPostData } = await json(req);

    console.log(myPostData);
}

module.exports = handler;