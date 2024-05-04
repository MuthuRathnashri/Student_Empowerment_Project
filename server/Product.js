const mongoose = require('mongoose');

    const productSchema = new mongoose.Schema({
        pname: String, 
        pdesc: String, 
        price: String,
        category: String, 
        pimage: String,
        pimage2: String,
        addedby: mongoose.Schema.Types.ObjectId
    });
    
    const Product = mongoose.model('Product', productSchema);
    
    module.exports = Product;