const nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "EmailTestDump1234",
      pass: "Abcd123$"
    }
  })

// Defining methods for the emailController
module.exports = {
    sendEmail: function(req, res) {
        var mailOptions={
            to : req.body.to,
            subject : req.body.subject,
            text : req.body.text
        }
        console.log(mailOptions);
        smtpTransport.sendMail(mailOptions, function(error, response){
         if(error){
                console.log(error);
            res.end("error");
         }else{
                console.log("Message sent: " + response.message);
            res.end("sent");
             }
    });
    }
}