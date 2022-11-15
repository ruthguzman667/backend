const nodemailer= require("nodemailer"); 

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "a330e44346304c",
          pass: "e4da09b3613a7c"
        }
      });
    const mensaje={
        from: "GummyToys <noreply@gummytoys.com",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }
    await transport.sendMail(mensaje)
}

module.exports= sendEmail;