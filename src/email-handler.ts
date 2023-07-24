"use strict";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtps.uhserver.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.email_user,
    pass: process.env.email_pass,
  }
});

export type EmailMessage = {
    email: string;
    name: string;
    phone: string;
    message: string;
}

export type EmailRequest = {
    html: string,
    from: string,
    to: string,
    subject: string,
}

export async function sendEmail(mailInfo: EmailMessage) {
    const mailOptions: EmailRequest = {
        from: '"TRO Express" <tro.express@troexpress.com.br>', // sender address
        to: mailInfo.email, // list of receivers
        subject: "Solicitação de contato de  "+mailInfo.name, // Subject line // plain text body
        html: `
        <p>Olá, segue solicitação de contato<p>
            <br>
        <p>Nome: ${mailInfo.name}<p> 
        <p>Telefone: ${mailInfo.phone}<p>
        <p>Mensagem: ${mailInfo.message}<p>
        `, // html body
      }  
  try{
    console.log('sending email...')
    const info = await transporter.sendMail(mailOptions);
    console.log('email sent!')
    transporter.close();
    return info.messageId;
  }catch(err){
    console.log(err)
  }
  
}
