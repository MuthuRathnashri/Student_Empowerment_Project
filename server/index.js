const express = require('express')
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser')
const multer = require('multer')
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const twilioService = require('./twilioService');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

const app = express()
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = 4000
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rathnashri2004:DYohGaoTJKaRGShn@cluster0.cwbjxv6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const test = require('./test');
const helping = require('./helping');
const sign = require('./sign');

app.get('/', (req, res) => {
  res.send('hello...')
})

app.post('/like-product' ,userController.likeProducts)
app.post('/dislike-product' ,userController.dislikeProducts)
app.post('/add-product', upload.fields([ { name : 'pimage' } , { name : 'pimage2' } ]), productController.addProduct)
app.post('/edit-product', upload.fields([ { name : 'pimage' } , { name : 'pimage2' } ]), productController.editProduct)
app.get('/get-products' ,productController.getProducts)
app.post('/delete-product' ,productController.deleteProducts)
app.post('/liked-products' ,userController.likedProducts)
app.post('/my-products', productController.myProducts)
app.get('/get-product/:pId' ,productController.getProductsById)
app.post('/signup',userController.signup)
app.get('/my-profile/:userId',userController.myProfileById)
app.post('/login',userController.login)
app.post('/send-message', twilioService.sendMessage);

app.use('/test', test);
app.use('/helping', helping);
app.use('/sign', sign);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
