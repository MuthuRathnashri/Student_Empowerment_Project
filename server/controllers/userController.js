
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const Users = mongoose.model('Users', { 
    username: String,
    password:String,
    likedProducts : [{ type : mongoose.Schema.Types.ObjectId, ref :'Products' }]
  });


module.exports.likeProducts = (req,res)=>{

    let productId = req.body.productId;
    let userId = req.body.userId;
  
    Users.updateOne({ _id: userId},{ $addToSet: { likedProducts: productId} })
    .then((result) => {
      res.send({ message: 'liked success.' })
    })
    .catch((err) =>{
      res.send({message : 'server err'})
    })
  }

module.exports.dislikeProducts = (req,res)=>{

    let productId = req.body.productId;
    let userId = req.body.userId;
  
    Users.updateOne({ _id: userId},{ $pull: { likedProducts: productId} })
    .then((result) => {
      res.send({ message: 'Disliked success.' })
    })
    .catch((err) =>{
      res.send({message : 'server err'})
    })
  }


module.exports.likedProducts = (req,res)=>{

    Users.findOne({ _id : req.body.userId }).populate('likedProducts')
    .then((result) => {
      res.send({message : 'success.',products : result.likedProducts})
    })
    .catch((err) =>{
      res.send({message : 'server err'})
    })
  }

module.exports.signup = (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const user = new Users({ username : username,password : password});
    user.save()
    .then(() => {
        res.send({message : 'saved success.'})
    })
    .catch(() => {
        res.end({message : 'server err'})
    })

}

module.exports.myProfileById = (req,res)=>{
  
    let uid = req.params.userId;
    Users.findOne({ _id : uid})
    .then((result) => {
        res.send({message : ' success.',user:{
          username: result.username
        }})
    })
    .catch(() => {
        res.end({message : 'server err'})
    })
  
  }

module.exports.login = (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    
    Users.findOne({ username : username })
      .then((result) => {
          if(!result){
            res.send({message : 'user not found'})
          }
          else{
  
            if(result.password == password){
              const token = jwt.sign({
                data: result
              }, 'MYKEY', { expiresIn: '1h' });
              res.send({message : 'find success.',token : token, userId : result._id})
            }
            if(result.password != password){
              res.send({message : 'password not match'})
            }
          }
          
      })
      .catch(() => {
          res.send({message : 'server err'})
      })
  
  }