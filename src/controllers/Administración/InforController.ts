import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';

export default class infor{
    
     /* Ver Mascaras */
     async verMascaras( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_verMascaras`);
        if (!respuesta.hasError ){
                return { 
                  data :      respuesta.data,
                  errors :    respuesta.errors,
                  hasError :  respuesta.hasError
                  }
        }else{
          return respuesta;
        }
     } catch ( error ) {
             errorMensaje(error)
     }
     }

          /* Ver Propietarios */
     async verPropietarios( parametros ?: any  ) {  
            try {
             let conexionSql = new DbHelper();
             if ( parametros ) {
    
                     conexionSql.parametros = [ ]
             }
        
             let respuesta: any = await conexionSql.Ejecutar(`sp_verPropietariosInfor`);
            if (!respuesta.hasError ){
                    return { 
                      data :      respuesta.data,
                      errors :    respuesta.errors,
                      hasError :  respuesta.hasError
                      }
            }else{
              return respuesta;
            }
         } catch ( error ) {
                 errorMensaje(error)
         }
         }

     /* Insertar Propietario */
     async insertarPropietario( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [
                   {
                     parametro : 'idPropietario',
                     valor : parametros.idPropietario
                   }, 
                   {
                    parametro : 'Propietario',
                    valor : parametros.Propietario
                   },
                   {
                    parametro : 'sede',
                    valor : parametros.sede
                   },
                   {
                    parametro : 'usuario',
                    valor : parametros.usuario
                   },
                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_insertPropietarioInfor`);
        if (!respuesta.hasError ){
                return { 
                  data :      respuesta.data,
                  errors :    respuesta.errors,
                  hasError :  respuesta.hasError
                  }
        }else{
          return respuesta;
        }
     } catch ( error ) {
             errorMensaje(error)
     }
     }

       /* Insertar Mascara */
       async insertarMascara( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [
                   {
                     parametro : 'Propietario',
                     valor : parametros.Propietario
                   }, 
                   {
                    parametro : 'idPropietario',
                    valor : parametros.idPropietario
                   },
                   {
                    parametro : 'tipoOperacion',
                    valor : parametros.tipoOperacion
                   },
                   {
                    parametro : 'idtipoOperacion',
                    valor : parametros.idtipoOperacion
                   },
                   {
                    parametro : 'usuario',
                    valor : parametros.usuario
                   },
                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_insertMascara`);
        if (!respuesta.hasError ){
                return { 
                  data :      respuesta.data,
                  errors :    respuesta.errors,
                  hasError :  respuesta.hasError
                  }
        }else{
          return respuesta;
        }
     } catch ( error ) {
             errorMensaje(error)
     }
     }

           /* Cargar Auth0 */
   async cargarAuth0( parametros ?: any  ) {  
                try {
                 let conexionSql = new DbHelper();
                 if ( parametros ) {
                        
                         conexionSql.parametros = [
                           {
                             parametro : 'propietario',
                             valor : parametros.propietario
                           }, 
                         ]
                 }
                 let respuesta: any = await conexionSql.Ejecutar(`sp_cargarAuth0Us`);
                if (!respuesta.hasError ){
                        return { 
                          data :      respuesta.data,
                          errors :    respuesta.errors,
                          hasError :  respuesta.hasError
                          }
                }else{
                  return respuesta;
                }
             } catch ( error ) {
                     errorMensaje(error)
             }
             }


     /* Integraciones */
          /* Ver Propietarios */
    async verPropietariosIntegracion( parametros ?: any  ) {  
            try {
             let conexionSql = new DbHelper();
             if ( parametros ) {
    
                     conexionSql.parametros = [ ]
             }
        
            let respuesta: any = await conexionSql.Ejecutar(`sp_verPropietariosIntegracion`);
            if (!respuesta.hasError ){
                    return { 
                      data :      respuesta.data,
                      errors :    respuesta.errors,
                      hasError :  respuesta.hasError
                      }
            }else{
              return respuesta;
            }
         } catch ( error ) {
                 errorMensaje(error)
         }
         }

             /* Ver Propietarios */
async verPropietariosIntegracionMod( parametros ?: any  ) {  
   try {
    let conexionSql = new DbHelper();
    if ( parametros ) {
            conexionSql.parametros = [ ]
    }

   let respuesta: any = await conexionSql.Ejecutar(`sp_cargarClientesintegracion`);
   if (!respuesta.hasError ){
           return { 
             data :      respuesta.data,
             errors :    respuesta.errors,
             hasError :  respuesta.hasError
             }
   }else{
     return respuesta;
   }
} catch ( error ) {
        errorMensaje(error)
}
             }


/* Acciones Propietarios */
async AccionesPropietarios( parametros ?: any  ) {  
   try {
    let conexionSql = new DbHelper();
    if ( parametros ) {
            conexionSql.parametros = [
                {
                        parametro : 'tipo',
                        valor     : parametros.tipo
                       },  {
                        parametro : 'id',
                        valor     : parametros.id
                       },  {
                        parametro : 'propietario',
                        valor     : parametros.propietario
                       },  {
                        parametro : 'usuarioAuth0',
                        valor     : parametros.usuarioAuth0
                       },  {
                        parametro : 'propietarioQA',
                        valor     : parametros.propietarioQA
                       },  
                       {
                        parametro : 'usuarioAuth0QA',
                        valor     : parametros.usuarioAuth0QA
                       },
                       {
                        parametro : 'pwdPRD',
                        valor     : parametros.pwdPRD
                       },
                       {
                        parametro : 'pwdQA',
                        valor     : parametros.pwdQA
                       }
             ]
    }

   let respuesta: any = await conexionSql.Ejecutar(`Sp_ClienteIntegracion`);
   if (!respuesta.hasError ){
           return { 
             data :      respuesta.data,
             errors :    respuesta.errors,
             hasError :  respuesta.hasError
             }
   }else{
     return respuesta;
   }
} catch ( error ) {
        errorMensaje(error)
}
             }


             /* Ver Propietarios */
async PropietarioEspecifico( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
                 conexionSql.parametros = [
                     {
                      parametro : 'propietario',
                      valor     : parametros.propietario
                     },
                  ]
         }
     
        let respuesta: any = await conexionSql.Ejecutar(`sp_propietarioEspecifico`);
        if (!respuesta.hasError ){
                return { 
                  data :      respuesta.data,
                  errors :    respuesta.errors,
                  hasError :  respuesta.hasError
                  }
        }else{
          return respuesta;
        }
     } catch ( error ) {
             errorMensaje(error)
     }
                  }
}