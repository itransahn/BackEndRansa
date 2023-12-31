class recuperacion{
    public mensajeP : string = "";
    public imagenRansa : string =  "https://www.ransa.biz/wp-content/uploads/2019/07/logo-1.png";
    public urlLo  : string = 'http://localhost:4200';
    public urlSer : string = 'http://10.130.65.223:4200';

    mensajePropio(data?:any){
        this.mensajeP = `
        <!DOCTYPE html>
   <html lang="es">
   <head>
       <meta charset="utf-8">
       <title>Ransa HN</title>
   </head>
   <body style="background-color: white ">
   
   <table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse; frame ="box" border="color-green" >
       <tr>
       </tr>
   
       <tr>
           <td style="padding: 0" align="center">
               <img style="padding: 0; align ="center" display: block" src=${this.imagenRansa} width="30%">
           </td>
       </tr>
       
       <tr>
           <td style="background-color: white">
               <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                   <h2 style="color: #006F1D; margin: 0 0 7px">Estimado ${data.nombre}</h2>

                   <p style="margin: 2px; font-size: 15px; color: #00A72C !important;">
                   Se hace envió de código para poder cambiar contraseña
                       </p>
                       <p style="margin: 2px; font-size: 15px; color: #00A72C !important;"> 
                       Recuperación Contraseña  <br>
                       Código : ${data.contra}
                       </p>

                   <div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">
                //    <a title="Facebook" href="https://es-la.facebook.com/ransa.comercialsa/"><img style="padding: 0; width: 20px; margin: 5px" src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook">
                   </div>
                   <div style="width: 100%; text-align: center">
                       <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #006F1D" href="${this.urlLo}/#/cambiocontra/${data.idUsuario}">Ingresar</a>	
                   </div>
                   <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Código válido por 10 minutos a partir de la generación</p>
               </div>
           </td>
       </tr>
   </table>
   
   </body>
   </html>
   `;
        return this.mensajeP;
    }
   }
   export = recuperacion;