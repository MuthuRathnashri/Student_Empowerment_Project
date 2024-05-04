const express = require('express')
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser')
const multer = require('multer')
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const Product = require('./Product');
const twilio = require('twilio');

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
mongoose.connect('mongodb://localhost:27017')

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

const accountSid = "AC10b5785cecac0bd43c5262f9c351f4f3";
const authToken = "39f5a883758f372a96d76eff368ee664";
const twilioClient = twilio(accountSid, authToken);

// Route to send message using Twilio
app.post('/send-message', async (req, res) => {
  const { name, contact, message, productId } = req.body;

  try {
    // Fetch the product from the database
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).send('Product not found');
    }

    // Get the phone number from the product details
    const phone = product.price;
    const phoneNumber = '+91' + phone;

    // Construct the message using form data
    const composedMessage = `Name: ${name}\nContact: ${contact}\nMessage: ${message}`;

    // Send message using Twilio
    twilioClient.messages
      .create({
        body: composedMessage,
        from: '+13203001602', // your Twilio phone number
        to: phoneNumber
      })
      .then(message => {
        console.log('Message sent successfully:', message.sid);
        res.send('Message sent successfully');
      })
      .catch(error => {
        console.error('Error sending message:', error);
        res.status(500).send('Failed to send message');
      });
  } catch (error) {
    console.error('Internal server error:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
