const jwt = require('jsonwebtoken');
const auth = async (req, res, next) => {

const header = req.headers['authorization'];
    //console.log(header);
    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        jwt.verify(token, process.env.JWT_SECRET , function(err, decoded) {
            if(err){
                console.log(err)
                res.sendStatus(403)
            }
            else{
                console.log(decoded)
                // res.json({
                //     message: 'Token verified!'
                // });
                req.user = decoded ;
                next() ;
            }
        }) //end of jwt.verify
    }
    else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    //missing token in the header
    }
}

module.exports = {auth}