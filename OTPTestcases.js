
class SendOTP {
    constructor(senderaddress, password) {
        this.senderaddress = senderaddress;
        this.password = password
    }

    ValidateEmail(receiveremail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
            return (true)
        }
        console.log("You have entered an invalid email address!")
        return (false)
    }

    setAccount() {
        //Take user input mail 
        const receiveremail = prompt("Enter your mail ?");
        if (ValidateEmail(receiveremail)) {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'indianalytica@gmail.com',                                                                //Set your own mail 
                    pass: 'Pratik@1010'                                                                                         //Set password for mail 
                }
            });
        }
    }

    generateOTP() {

        // Declare a digits variable 
        // which stores all digits
        var digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 4; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
    }
    sendOTP() {
        //Get genereted OTP 
        var otp = generateOTP();
        const receiveremail = prompt("Enter your mail ?");
        if (ValidateEmail(receiveremail)) {
            //Details to send mail 
            this.setAccount();
            var mailOptions = {
                from: 'indianalytica@gmail.com',
                to: receiveremail,
                subject: 'Your one time verification password  ',
                text: otp ;
            };
        }
    }

}

var otp1 = new sendOTP('indianalytica@gmail.com', 'Pratik@1010');
otp1.sendOTP(); 


//Case 1
receiveremail: ramesh.mail 

//Case 2 
receiveremail: ramesh.mail.gmail.com

//Case 3 


