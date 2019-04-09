const cors = require('micro-cors')();
const parse = require('urlencoded-body-parser');


const handler = async (req, res) => {
   const data = await parse(req);

    console.log('the body: ', data);

    return send(res, 200, 'hihihihi');
}

module.exports = cors(handler);