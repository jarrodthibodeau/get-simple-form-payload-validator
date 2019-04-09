

module.exports = (req, res) => {
 
    console.log('req: ', req);
    console.log('payloadddd: ', req.query);
    console.log('params? :', req.params);

    res.send(200);
}