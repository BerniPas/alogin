
//importamos el pack del envio del mail 
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const MAIL_EMPRESA = process.env.MAIL_EMPRESA;
const PASS_MAIL_EMPRESA = process.env.PASS_MAIL_EMPRESA;
//const LINK_DEPLOY = process.env.LINK_DEPLOY;

const enviarMail = async (email, nombre) => {

    //creamos el transporter
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: MAIL_EMPRESA,
            pass: PASS_MAIL_EMPRESA
        }
    })

    //escribimos el mail de respuesta automática
    let emailData = await transporter.sendMail({
        from: `Empresa < ${MAIL_EMPRESA} >`,
        to: email,
        subject: 'Registro exitoso',
        text: `<h2>Hola ${nombre}, te has registrado correctamente</h2> <br>`
        `<p>Gracias por registrarte en nuestra plataforma, estamos contentos de 
        tenerte con nosotros!!</p>`
        //`<a href= ${LINK_DEPLOY} >Inicia sesión</a>`,
        //link a host local, cambiar por el host de producción
    })

    console.log(`5. Enviando mail a ${email} - ${nombre}`);
    console.log('6. Mail enviado correctamente');

}


export default enviarMail;