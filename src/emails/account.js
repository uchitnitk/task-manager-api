const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_ENV_API)

const sendWelcomeEmail = (email,name) =>{
  sgMail.send({
    to : email,
    from : 'uchitnitk@gmail.com',
    subject : 'Thanks for signing up',
    text : `welcome to the application, ${name}.`
  })
}

const sendDeleteEmail = (email,name) =>{
  sgMail.send({
    to : email,
    from : 'uchitnitk@gmail.com',
    subject : 'thanks for deleting',
    text : `kyu kiya re ye hain ${name}`
  })
}
module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}
