import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
const transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});
const sendEmail=async (to,subject,text,html)=>{
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

    try {
        await transport.sendMail(
            {
                from: process.env.EMAIL_USER,
                to,
                subject,
                text,
                html,
            }
        );
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:",error);
    }

}
export default sendEmail;