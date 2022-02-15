module.exports = (req, res, next) => {
    // Get Auth header value
    const bearerHeader = req.headers.authorization;
    //const bearerHeader = req.headers['authorization']
    // check if bearer is undefine
    if (typeof bearerHeader !== 'undefined') {
        // split at the space
        const bearer = bearerHeader.split(' ');
        // get token from array
        const bearerToken = bearer[1];
        req.token = bearerToken;
        // next middleware
        next();
    } else {
        // forbidden
        res.sendStatus(403);
    }
}