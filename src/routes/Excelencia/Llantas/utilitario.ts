import { Router, Request, Response } from 'express';
import { verifyToken } from '../../../controllers/auth/authController'; 

import Llantas from '../../../controllers/Excelencia/Llantas/llantasController';

import {dataApi} from '../../../interfaces/dataApi';
const app: Router = Router();

let llanta = new Llantas();

    //Tipos de llantas
    app.get('/tiposdeLlantas' , (req: Request, res:Response)=>{
        let params = req.body;
        llanta.tiposDeLlantas( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
        });
        })
    
        //Tipos de Maquina
    app.get('/tiposdeMaquina' ,  (req: Request, res:Response)=>{
        let params = req.body;
        llanta.tiposdeMaquina( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
        });
        })
    
        //Maquinas Ransa Corto
    app.get('/maquinasCorto' ,  (req: Request, res:Response)=>{
        let params = req.body;
        llanta.maquinasCorto( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
        });
        })
    
        //Maquinas Ransa Detalle
    app.get('/maquinasDetalle' ,  (req: Request, res:Response)=>{
        let params = req.body;
        llanta.maquinasDetalle( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
        });
        })
    

export default app;

