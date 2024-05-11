const twilio = require('twilio');
const Product = require('./Product');

const accountSid = "AC10b5785cecac0bd43c5262f9c351f4f3";
const authToken = "4f081585cff4d9d4ef02acfb095bd855";
const twilioClient = twilio(accountSid, authToken);

// Function to send a message using Twilio
async function sendMessage(req, res) {
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
        const composedMessage = Name: ${name}\nContact: ${contact}\nMessage: ${message};

        // Send message using Twilio
        const messageResponse = await twilioClient.messages.create({
            body: composedMessage,
            from: '+13203001602', // your Twilio phone number
            to: phoneNumber
        });

        console.log('Message sent successfully:', messageResponse.sid);
        res.send('Message sent successfully');
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).send('Failed to send message');
    }
}

module.exports = {
    sendMessage
};