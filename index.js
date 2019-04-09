

module.exports = (req, res) => {
    const {
        name,
        email
    } = req.payload;

    console.log(req.payload);
    console.log(name);
    console.log(email);

}