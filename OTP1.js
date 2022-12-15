//Node mailer module to send mail 
var nodemailer = require('nodemailer');

//Setting up  mail account
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'indianalytica@gmail.com',                                                                //Set your own mail 
        pass: 'Pratik@1010'                                                                                         //Set password for mail 
    }
});


function generateOTP() {

    // Declare a digits variable 
    // which stores all digits
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

var otp = generateOTP(); 

//Details to send mail 
var mailOptions = {
    from: 'indianalytica@gmail.com',
    to: 'pratikaj1010@gmail.com',
    subject: 'Your one time verification password  ',
    text: `${otp}` ; 
};



//Test of shared mail 
transporter.sendMail(mailOptions, (error, info) => {                                       
    if (error) {
        console.log("Error is : " + error); 
    }
    else {
        console.log("Mail send sucessfully !!")
    }
});