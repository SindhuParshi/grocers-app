let jwt = require("jsonwebtoken");

let verifyuserToken = (req,res,next)=> {
    let token = req.headers.authorization;
    if(!token){
        return res.send("Access Denied / Unauthorized Request");
    }

    try {
        let verifyuser = jwt.verify(token,"secretKey");
        if(!verifyuser){
            return res.send("Unauthorized Request")
        }
        req.user = verifyuser;
        next();

    }catch(Exp){
        return res.send("Invalid Token");
    }

}

let isuser = async (req,res,next)=> {
    console.log(req.user);
    if(req.user.user_type === "user"){
        next();
    }else {
        return res.send("Unauthorized user")
    }
}

let isAdmin = async(req,res,next)=> {
    console.log(req.user);
    if(req.user.user_type === "admin"){
        console.log("admin yes")
        next();
    }else {
        console.log("admin no")
        return res.send("Unauthorized user")
    }
}
module.exports={verifyuserToken,isuser,isAdmin}