const pass = "bmiyiugibbuxeasp"
import nodemailer from 'nodemailer';
var mailOptions1 = {
    from: 'info.webcycle@gmail.com',
    subject: "Webcycle log in",
    to: "",
    text: "Thanks for logging in to webcycle, here is the verification code",
    html: '',
}
var mailOptions2 = {
    from: 'info.webcycle@gmail.com',
    subject: "Webcycle Review",
    to: "",
    text: "Thanks for submitting form",
}
var mailOptions3 = {
    from: 'info.webcycle@gmail.com',
    subject: "Password Reset",
    to: "",
    text: "Here is the verification code to reset password",
    html: '',
}

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    auth: {
        user: 'info.webcycle@gmail.com',
        pass: pass
    }
});

function signupauth(email, code) {
    const obj = mailOptions1
    console.log(obj);
    obj["to"] = email;
    obj["html"] = `<h1>${code}</h1>`;
    console.log(obj);
    transporter.sendMail(obj, function (error, info) {
        if (error) {
            console.log(error);
            return false;
        } else {
            console.log("Email sent successfully");
            return true;
        }
    });
}

function review(email) {
    const obj = mailOptions2;
    obj["to"] = email;
    transporter.sendMail(obj, function (error, info) {
        if (error) {
            return false;
        } else {
            return true;
        }
    });
}

function resetpass(email, code) {
    const obj = mailOptions3
    obj["to"] = email;
    obj["html"] = `<h1>${code}</h1>`;

    transporter.sendMail(obj, function (error, info) {
        if (error) {
            console.log("error");
            return false;

        } else {
            console.log("Email sent successfully");
            return true;
        }
    });
}
export { resetpass, review, signupauth };