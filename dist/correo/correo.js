"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const primerIngreso_1 = __importDefault(require("./primerIngreso"));
const recuperacionP_1 = __importDefault(require("./recuperacionP"));
class EnviarEmail {
    constructor() {
        // private cuentaCorreo : string = 'soporteintelsahn@gmail.com';
        this.cuentaCorreo = 'rtnowhn@gmail.com';
        this.cuentaCorOut = 'mvelasquezb@ransa.net';
        // private cuentaCorreo : string = 'rtnow@ransa.net';
        this.contraCorreo = 'f re t c q sol mi q una f f t j k sol _';
        // private contraCorreo : string = 'Intelsa.123'
        // bekz rywb gktf gfxa
        // ServicioRansaIT654_$
        this.enviarCorreo = (tipo, mensaje) => {
            let asunto;
            let html;
            console.log(mensaje);
            // Primera vez
            if (tipo == 1) {
                var envio = new primerIngreso_1.default();
                asunto = 'Bienvenido a Ransa';
                html = envio.mensajePropio({
                    usuario: mensaje['usuario'],
                    nombre: mensaje['nombre'],
                    idUsuario: mensaje['idUsuario'],
                    contra: mensaje['contra']
                });
            }
            // Cambio de contraseña por Administrador
            if (tipo == 2) {
                var envio = new recuperacionP_1.default();
                asunto = 'Restablecimiento de Contraseña';
                html = envio.mensajePropio({
                    usuario: mensaje['usuario'],
                    nombre: mensaje['nombre'],
                    idUsuario: mensaje['idUsuario'],
                    contra: mensaje['contra']
                });
            }
            return new Promise((resolve, reject) => {
                let transporte = nodemailer_1.default.createTransport({
                    // service : 'Gmail',
                    //    host : 'smtp.gmail.com', 
                    //    port : 465,
                    //    secure : false,
                    //     auth :{
                    //         user: this.cuentaCorreo,
                    //         pass: this.contraCorreo,
                    //     },       
                    //     tls: {
                    //         rejectUnauthorized: false
                    //     },  
                    service: 'Outlook365',
                    host: 'smtp.office365.com',
                    port: 587,
                    tls: {
                        ciphers: 'SSLv3',
                        rejectUnauthorized: false
                    },
                    auth: {
                        user: this.cuentaCorOut,
                        pass: 'Jogabonito@8778'
                    }
                });
                // let mensajeUsuario: any;
                let mailOptions = {
                    from: this.cuentaCorOut,
                    to: mensaje['correo'],
                    subject: asunto,
                    html: html
                };
                transporte.sendMail(mailOptions, function (error) {
                    if (error) {
                        resolve({
                            hasError: true,
                            data: [{ mensaje: 'Correo sin Exito' }],
                            errors: []
                        });
                    }
                    else {
                        resolve({
                            hasError: false,
                            data: [{ mensaje: "Correo Enviado con exito" }],
                            errors: []
                        });
                    }
                });
            });
        };
    }
}
exports.default = EnviarEmail;