//Node mailer module to send mail 
var nodemailer = require('nodemailer');
const prompt = require("prompt-sync");


//function to validate email 
function ValidateEmail(receiveremail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
        return (true)
    }
    console.log("You have entered an invalid email address!")
    return (false)
}

function setAccount() {
    //Take user input mail 
   
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'indianalytica@gmail.com',                                                                //Set your own mail 
                pass: 'Pratik@1010'                                                                                         //Set password for mail 
            }
        });
}

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


function sendOTP() {
    //Get genereted OTP 
    var otp = generateOTP();
    const receiveremail = prompt("Enter your mail ?");
    if (ValidateEmail(receiveremail)) {
        //Details to send mail 
        var mailOptions = {
            from: 'indianalytica@gmail.com',
            to: receiveremail,
            subject: 'Your one time verification password  ',
            text: otp ;
        };
    }
}

setAccount(); 
sendOTP(); 