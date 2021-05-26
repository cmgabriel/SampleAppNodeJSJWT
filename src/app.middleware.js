const jwt = require('jsonwebtoken')
const {
    readPublicKey,
    user
} = require('./helper')

//Verfies the token provided
exports.validateToken = async (req,res,next) => {
    let token;

    if(req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(" ")[1]
    }

    //Check if token exists
    if(!token) {
        res.status(403).json({
            success: false,
            message: "Access Denied to the resource!"
        });
        return
    }

    let publicKey = readPublicKey()
    if(!publicKey) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error. Cannot read the public key"
        });
        return
    }

    //Verify the token 
    try {
        let tokenInfo = await jwt.verify(token, publicKey);
        console.log(tokenInfo)
        // Check if the token subject matches the user information to make sure it is the correct token.
        // In case of real system, this information will be compared with the information in database.
        if(tokenInfo.id !== user.userId) {
            res.status(403).json({
                success: false,
                message: "Access Denied to the resource!"
            });
            return
        }
        req.user = user;
        
        //MUST call next for further processing.
        
        next();

    } catch (error) {
        console.log(error)
        res.status(403).json({
            success: false,
            message: "Acces denied to the resource!"
        })
    }
}