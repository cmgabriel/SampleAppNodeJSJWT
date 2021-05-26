const jwt = require("jsonwebtoken");
const {
    items,
    user,
    readPrivateKey
} = require('./helper');



exports.getAllItems = (req,res,next) => {
    //Check if the user information is available
    if(!req.user) {
        return res.status(403).json({
            success: false,
            message: "Access denied to the resource!"
        });
    }

    res.status(200).json({
        success: true,
        data: items
    })
}

//Generates and provide the access token to the application
exports.getAccessToken = (req,res,next) => {
    
    // ----------------- TODO STARTS -------------------------
    // User validation must go here to make sure it is a valid user.
    // User can be validated on the basis of credentials that was used to register with the application
    // ----------------- TODO ENDS -------------------------

    //Returns the private key for the generating the token.
    let privateKey = readPrivateKey()
    if(!privateKey){
        res.status(500).json({
            success: false,
            message: "Cannot generate the access token. Internal Server Error"
        });
    }

    // Prepare the payload consisting of the claims
    let payload = {
        id: user.userId
    }
    
    //Prepare the options for the access token
    let jwtOptions = {
        algorithm: "RS256",
        issuer: "http://example.abc.com",
        audience: "http://example.xyz.com",
        expiresIn: (30 * 60),
        subject: payload.id,
        jwtid: `${(Math.floor(Date.now))}`
    }

    //Generate the access token
    let accessToken = jwt.sign(payload,privateKey, jwtOptions);

    //Add the information to the response header.
    res.header("x-access-token",accessToken)
    res.status(200).json({
        success: true,
        message:"You have been authenticated successfully"
    });
}