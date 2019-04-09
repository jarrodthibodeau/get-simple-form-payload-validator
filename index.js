const { send, createError, run, json } = require('micro');

module.exports = async (req, res) => {
    const { myPostData } = await json(req);

    console.log('the body: ', myPostData);

    return 'yayayayayaya';
}