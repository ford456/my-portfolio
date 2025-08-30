import nodemailer from "nodemailer"

const emails = process.env.EMAIL;
const pass = process.env.NEXT_PUBLIC_PASSWORD;

const emailSend = process.env.EMAIL_SEND; 
const pass2 = process.env.NEXT_PUBLIC_PASSWORD2;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:emails,
        pass:pass
    },
});

export const mailOptions = {
    from: emails,
    to: emails
};

export const generateMailOptions = ({ from, to, subject, html }) => ({
    from: from || emails,
    to: to || emails,
    subject,
    html,
  });