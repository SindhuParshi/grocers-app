let user = require("../model/user.model");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");


let register = async (req,res)=> {
    let salt = await bcrypt.genSalt(10);

    let hashPassword = await bcrypt.hash(req.body.password,salt);
    console.log(hashPassword);

    let userRef = new user({
        email:req.body.email,
        password:hashPassword,
        name:req.body.name,
        user_type:req.body.user_type
    });

    //store record in database
    user.insertMany(userRef,(err,result)=> {
        if(!err){
            res.send("Account Created...")
        }else {
            res.send("Account didn't create")
        }
    })


}

let signIn = async (req,res) => {
    //raj@gmail.com, 123
    user.findOne({email:req.body.email},  async(err,u)=> {
        // console.log(u);
        if(!err){
            if(u==null){
                return res.send("Email Id is wrong")
            }
            let validPassword = await bcrypt.compare(req.body.password,u.password);

            if(!validPassword) {
                return res.send("Password is wrong")
            }

            //create the token
            //payload contains id as well as type of user
            let payload = {id:u._id,user_type:u.user_type}
            let token = jwt.sign(payload,"secretKey");
            res.send({"token":token});
        }
    })
}

module.exports={register,signIn}