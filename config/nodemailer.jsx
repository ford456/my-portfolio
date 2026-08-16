import nodemailer from "nodemailer"

const emails = process.env.EMAIL;
const pass = process.env.EMAIL_PASSWORD;

const emailSend = process.env.EMAIL_SEND; 
const pass2 = process.env.EMAIL_PASSWORD2;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:emailSend,
        pass:pass2
    },
});

export const mailOptions = {
    from: emailSend,
    to: [emails,emailSend]
};

export const generateMailOptions = ({ from, to, subject, html }) => ({
    from: from || emailSend,
    to: to || [emails,emailSend],
    subject,
    html,
  });