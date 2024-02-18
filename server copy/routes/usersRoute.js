const express = require("express");
const router = express.Router();
const userdb = require("../model/userSchema");
const ownerdb = require("../model/ownerSchema");
const admindb = require("../model/adminSchema");

function getUser(email, password, type) {
  if (type === "admin") {
    return admindb.findOne({ email: email, password: password });
  } else if (type === "owner") {
    return ownerdb.findOne({ email: email, password: password });
  } else if (type === "user") {
    return userdb.findOne({ email: email, password: password });
  }
}

router.post("/login", async (req, res) => {
  const { email, password, type } = req.body;
  console.log(email, password, type);
  try {
    // const user= await userdb.findOne({email : req.body.email, password: req.body.password });

    const user = await getUser(email, password, type);

    // console.log(user.email);
    if (user) {
      res.send(user);
    } else {
      return res.status(400).json(error) // send nothing to client side
    }
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/register", async (req, res) => {
    try {
        type = req.body.type;
        if(type === "admin"){
            const newuser = new admindb(req.body);
            await newuser.save();
            res.send(newuser);
        }
        else if(type === "owner"){
            const newuser = new ownerdb(req.body);
            await newuser.save();
            res.send(newuser);
        }
        if(type === "user"){
            const newuser = new userdb(req.body);
            await newuser.save();
            res.send(newuser);
        }
    //   const newuser = new userdb(req.body);
    //   await newuser.save();
    //   res.send(newuser);
    } catch (error) {
      return res.status(400).json(error);
    }
  });
  
  module.exports = router;

  
// router.post("/register", async (req, res) => {
//     try {
//       const newuser = new userdb(req.body);
//       await newuser.save();
//       res.send("User registered successfully");
//     } catch (error) {
//       return res.status(400).json(error);
//     }
//   });
  
//   module.exports = router;
  