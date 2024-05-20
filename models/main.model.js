require('dotenv').config();
const nodeMailer = require('nodemailer');

export function contact({ username, email, message }) {
    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!email || !email.match(emailRegex)) {
        return { message: "Email is invalid." };
    }

}