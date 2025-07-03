const jwt = require('jsonwebtoken')
const {User} = require('./model')
// req, res, next>> forwarding/return to the caller
const tokenCheck = async(req,res,next) =>{
    const token = req.headers.authorization?.split(" ")[1]
    if(!token) 
        res.status(401).send("Unauthorized/ token not found")
    try{
        const verification = jwt.verify(token,process.env.SECRET_KEY)
        req.user = await User.findOne({username:verification.user}).select("-password")
        next()
    }
    catch(err){
        res.status(403).send("forbidden")
    }
}

const roleCheck = (allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) return res.sendStatus(403);
    next();
  };
};

module.exports = {tokenCheck,roleCheck}
