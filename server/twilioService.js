const twilio = require('twilio');
const Product = require('./Product');

const accountSid = "AC10b5785cecac0bd43c5262f9c351f4f3";
const authToken = "f460ead30aa29ed3e30006b6ffc92293";
const twilioClient = twilio(accountSid, authToken);

async function sendMessage(req, res) {
    const { name, contact, message, productId } = req.body;

    try {
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).send('Product not found');
        }
        const phone = product.price;
        const phoneNumber = '+91' + phone;

        // Construct the message using form data
        const composedMessage = `Name: ${name}\nContact: ${contact}\nMessage: ${message}`;

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