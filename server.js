const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./emailService'); // Ensure this imports the sendEmail function

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
    const { name, email, mobile, message } = req.body;
  
    if (!name || !email || !mobile || !message) {
      return res.status(400).send('All fields are required');
    }
  
    const subject = `Contact Form Submission from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`;
  
    try {
      // Respond to the client immediately
      res.status(200).send('Form submitted successfully');
  
      // Send emails in the background
      Promise.all([
        sendEmail('guptasujeet462@gmail.com', subject, '', text, true), // Email to admin
        sendEmail(email, 'We received your message', name, 'Thank you for contacting us. We will get back to you shortly.') // Email to user
      ]).catch((error) => {
        console.error('Failed to send emails:', error);
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to process the request');
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
