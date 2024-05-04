const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    pname: String, 
    pdesc: String, 
    price: String,
    category: String, 
    pimage: String,
    pimage2: String,
    addedby: mongoose.Schema.Types.ObjectId
  });
  
  const Products = mongoose.model('Products', schema);

module.exports.addProduct = (req,res)=>{
    console.log(req.files);
    console.log(req.body);
    
    const pname = req.body.pname;
    const pdesc = req.body.pdesc;
    const price = req.body.price;
    const category = req.body.category;
    const addedby = req.body.userId;
  
    let pimage = null;
    let pimage2 = null;
        
        if (req.files['pimage']) {
          pimage = req.files.pimage[0].path
        }
        
        if (req.files['pimage2']) {
          pimage2 = req.files.pimage2[0].path;
        }
    
  const product = new Products({ pname , pdesc , price  ,category , pimage , pimage2 ,addedby});
    product.save()
      .then(() => {
          res.send({message : 'saved success.'})
      })
      .catch(() => {
          res.send({message : 'server err'})
      })
  
  }

module.exports.editProduct = (req,res)=>{
    console.log(req.files);
    console.log(req.body);
    
    const pid = req.body.pid;
    const pname = req.body.pname;
    const pdesc = req.body.pdesc;
    const price = req.body.price;
    const category = req.body.category;
    //const addedby = req.body.userId;
  
    let pimage = null;
    let pimage2 = null;
      if(req.files && req.files.pimage && req.files.pimage.length > 0){  
        if (req.files['pimage']) {
          pimage = req.files?.pimage[0].path
        }
      }  
      if(req.files && req.files.pimage2 && req.files.pimage2.length > 0){  
        if (req.files['pimage2']) {
          pimage2 = req.files?.pimage2[0].path;
        }
      }
    
  //const product = new Products({ pname , pdesc , price  ,category , pimage , pimage2 ,addedby});
      
    let editObj = {};

    if(pname){
      editObj.pname = pname;
    }
    if(pdesc){
      editObj.pdesc = pdesc;
    }
    if(price){
      editObj.price = price;
    }
    if(category){
      editObj.category = category;
    }
    if(pimage){
      editObj.pimage = pimage;
    }
    if(pimage2){
      editObj.pimage2 = pimage2;
    }
    Products.updateOne({ _id : pid}, editObj ,{ new: true })
        .then((result) => {
            res.send({message : 'saved success.' , product : result})
        })
        .catch(() => {
            res.send({message : 'server err'})
        })
    
    }

module.exports.getProducts = (req,res)=>{

    Products.find()
    .then((result) => {
      res.send({message : 'success.',products : result})
    })
    .catch((err) =>{
      res.send({message : 'server err'})
    })
  }

module.exports.getProductsById = (req,res)=>{
    console.log(req.params);
    Products.findOne({  _id : req.params.pId })
    .then((result) => {
      console.log(result,"user data")
      res.send({message : 'success.',product : result})
    })
    .catch((err) =>{
      res.send({message : 'server err'})
    })
}

module.exports.myProducts = (req, res) => {
    const userId = req.body.userId; 
    console.log(userId);
    Products.find({ addedby: userId })
      .then((result) => {
        res.send({ message: 'success', products: result });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'server error' });
      });
  }

module.exports.deleteProducts = (req,res) => {
 
  Products.findOne({_id : req.body.pid})
  .then((result) => {
    if(result.addedby == req.body.userId){
      Products.deleteOne({ _id : req.body.pid})
        .then((deleteResult) => {
          if(deleteResult.acknowledged){
            res.send({message: 'Success'})
          }
        })
        .catch(() => {
          res.send({message: 'Server Error'})
        })
    }
  })
  .catch(() => {
    res.send({message: 'Server Error'})
  })
}