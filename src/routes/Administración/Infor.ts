import { Router, Request, Response, response } from 'express';
import { verifyToken } from '../../controllers/auth/authController'; 
import infor from '../../controllers/Administración/InforController';
import {dataApi} from '../../interfaces/dataApi';
import { encriptar } from '../../classes/Encriptacion';
import { error } from 'console';
const axios = require('axios');
import {parse, stringify, toJSON, fromJSON} from 'flatted';


const app: Router = Router();


/* Ver Mascaras */
app.get('/mascaras' ,  (req: Request, res:Response)=>{
    let admin = new infor();
        let params = req.body;
        admin.verMascaras( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* Ver Propietarios */
app.get('/propietarios' ,  (req: Request, res:Response)=>{
    let admin = new infor();
        let params = req.body;
        admin.verPropietarios( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })


    /* Insertar Propietario */
app.put('/Propietario' ,  (req: Request, res:Response)=>{
    let admin = new infor();
        let params = req.body;
        admin.insertarPropietario( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

        /* Insertar Mascara */
app.put('/Mascara' ,  (req: Request, res:Response)=>{
    let admin = new infor();
        let params = req.body;
        admin.insertarMascara( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

app.get('/propietariosInt', (req:Request, res:Response)=>{
    let admin = new infor();
    let params = req.query;
    admin.verPropietariosIntegracion( params ).then(async ( respuesta: any )=>{
        const result : dataApi = await respuesta;
        if(!result.hasError ){
            return res.status(200).send(respuesta)
        }else{
            return res.status(400).send(result)
        }
    })
})

app.get('/auth0Pro', (req:Request, res:Response)=>{
    let admin = new infor();
    let params = req.query;
    admin.cargarAuth0( params ).then(async ( respuesta: any )=>{
        const result : dataApi = await respuesta;
        if(!result.hasError ){
            return res.status(200).send(respuesta)
        }else{
            return res.status(400).send(result)
        }
    })
})

app.post('/auth0', (req:Request, res:Response)=>{
//  let url = 'https://api-wms.qas.ransaaplicaciones.com/auth/token';
 let usuario: string = req.body?.usuario;
 let contra : string = req.body?.contra;
 let url    : string = req.body?.url;
 let codificar = (usuario + ':'+contra)
// axios.defaults.headers.post['Authorization'] = ` Basic ZGlzdHJpYnVpZG9yYS1pbnRlZ3JhY2lvbi13bXM6UmFuc2EtMzYw`;
let base64Encoded = Buffer.from(codificar).toString('base64');
      let conf = {
        // auth : {
        //     username : req.body?.usuario,
        //     password : req.body?.contra
        // }
        headers: { 
        'Authorization':'Basic ' + base64Encoded,
        'Host' : 'api-wms.ransaaplicaciones.com'
        // 'Accept-Encoding': 'gzip, deflate, br',
        // 'Connection': 'keep-alive'
      }
      };
      
      let contenedores : any ; 
       axios.post(url,[],conf).then(
        (data:any)=>{
                contenedores = data?.data
            if( data ){ 
                return res.json({
                data:      contenedores ,
                errors :    [],
                hasError :  false
            })
            }else{
                return res.json({
                    data    :       contenedores ,
                    errors  :    [],
                    hasError :  false
                })
            }
        }
      ).catch( (error : any) =>{
        return res.json({
               data   : contenedores,
               errors : contenedores?.errors,
               hasError :  true
        }
        )
      }) ;
      
    //   contenedores = contenedores.data;
   
    //  console.log(contenedores);
      
})


app.post('/authLoadOrder', (req:Request, res:Response)=>{
    // let url = 'https://api-wms.qas.ransaaplicaciones.com/order';
    let data : string = req.body?.data;
    let token: string = req.body?.token;
    let url: string = req.body?.url;
    let response : any;
         let conf = {
           headers: { 
           'Authorization':'Bearer ' + token,
           'Host' : 'api-wms.ransaaplicaciones.com'
         }
         }; 
         let contenedores ; 
          axios.post(url,JSON.parse(data),conf).then(
           (data:any)=>{
            contenedores = data?.data
            response = data?.data
            if ( data?.data?.errors[0] ){
                // console.log(contenedores?.errors)
                return res.json({
                    data   : JSON.stringify(data) ,
                    errors : contenedores?.errors,
                    hasError :  true
                })
            }else{
                return res.json({
                    data     :   contenedores ,
                    errors   :   [],
                    hasError :  false
                })
            }
        }
         ).catch( (error : any) =>{
           return res.json({
               data   : response,
               errors : response?.errors,
               hasError :  true
           }
           )
         }) ;
         
    
   })

app.post('/authLoadAsn', (req:Request, res:Response)=>{
    // let url = 'https://api-wms.qas.ransaaplicaciones.com/asn';
    let data : string = req.body?.data;
    let token: string = req.body?.token;
    let url: string = req.body?.url;

    let response : any;
         let conf = {
           headers: { 
           'Authorization':'Bearer ' + token,
           'Host' : 'api-wms.ransaaplicaciones.com'
         }
         }; 
         let contenedores ; 
          axios.post(url,JSON.parse(data),conf).then(
            (data:any)=>{
             contenedores = data?.data
             if(data?.data?.errors[0]){
                 return res.json({
                     data   : data ,
                     errors : data,
                     hasError :  true
                 })
             }else{
                 return res.json({
                     data    :       contenedores ,
                     errors  :    [],
                     hasError :  false
                 })
             }
         }
          ).catch( (error : any) =>{
            return res.json({
                data   : response,
               errors  : response?.errors,
               hasError :  true
            }
            )
          }) ;
         
        //  contenedores = contenedores.data;
        // console.log(contenedores);
   
   })

app.get('/CpropietariosInt', (req:Request, res:Response)=>{
    let admin = new infor();
    let params = req.query;
    admin.verPropietariosIntegracionMod( params ).then(async ( respuesta: any )=>{
        const result : dataApi = await respuesta;
        if(!result.hasError ){
            return res.status(200).send(respuesta)
        }else{
            return res.status(400).send(result)
        }
    })
})


app.get('/CpropietariosInt', (req:Request, res:Response)=>{
    let admin = new infor();
    let params = req.query;
    admin.verPropietariosIntegracionMod( params ).then(async ( respuesta: any )=>{
        const result : dataApi = await respuesta;
        if(!result.hasError ){
            return res.status(200).send(respuesta)
        }else{
            return res.status(400).send(result)
        }
    })
})

app.post('/CpropietariosInt', (req:Request, res:Response)=>{
    let admin = new infor();
    let params = req.query;
    admin.AccionesPropietarios( params ).then(async ( respuesta: any )=>{
        const result : dataApi = await respuesta;
        if(!result.hasError ){
            return res.status(200).send(respuesta)
        }else{
            return res.status(400).send(result)
        }
    })
})

app.get('/CpropietariosIntEsp', (req:Request, res:Response)=>{
    let admin = new infor();
    let params = req.query;
    admin.PropietarioEspecifico( params ).then(async ( respuesta: any )=>{
        const result : dataApi = await respuesta;
        if(!result.hasError ){
            return res.status(200).send(respuesta)
        }else{
            return res.status(400).send(result)
        }
    })
})

    export default app;