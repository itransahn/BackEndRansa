"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const InforController_1 = __importDefault(require("../../controllers/Administraci\u00F3n/InforController"));
const axios = require('axios');
const app = (0, express_1.Router)();
/* Ver Mascaras */
app.get('/mascaras', (req, res) => {
    let admin = new InforController_1.default();
    let params = req.body;
    admin.verMascaras(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver Propietarios */
app.get('/propietarios', (req, res) => {
    let admin = new InforController_1.default();
    let params = req.body;
    admin.verPropietarios(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Propietario */
app.put('/Propietario', (req, res) => {
    let admin = new InforController_1.default();
    let params = req.body;
    admin.insertarPropietario(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Mascara */
app.put('/Mascara', (req, res) => {
    let admin = new InforController_1.default();
    let params = req.body;
    admin.insertarMascara(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
app.get('/propietariosInt', (req, res) => {
    let admin = new InforController_1.default();
    let params = req.query;
    admin.verPropietariosIntegracion(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
app.get('/auth0Pro', (req, res) => {
    let admin = new InforController_1.default();
    let params = req.query;
    admin.cargarAuth0(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
app.post('/auth0', (req, res) => {
    var _a, _b, _c;
    //  let url = 'https://api-wms.qas.ransaaplicaciones.com/auth/token';
    let usuario = (_a = req.body) === null || _a === void 0 ? void 0 : _a.usuario;
    let contra = (_b = req.body) === null || _b === void 0 ? void 0 : _b.contra;
    let url = (_c = req.body) === null || _c === void 0 ? void 0 : _c.url;
    let codificar = (usuario + ':' + contra);
    // axios.defaults.headers.post['Authorization'] = ` Basic ZGlzdHJpYnVpZG9yYS1pbnRlZ3JhY2lvbi13bXM6UmFuc2EtMzYw`;
    let base64Encoded = Buffer.from(codificar).toString('base64');
    let conf = {
        // auth : {
        //     username : req.body?.usuario,
        //     password : req.body?.contra
        // }
        headers: {
            'Authorization': 'Basic ' + base64Encoded,
            'Host': 'api-wms.ransaaplicaciones.com'
            // 'Accept-Encoding': 'gzip, deflate, br',
            // 'Connection': 'keep-alive'
        }
    };
    let contenedores;
    axios.post(url, [], conf).then((data) => {
        contenedores = data === null || data === void 0 ? void 0 : data.data;
        if (data) {
            return res.json({
                data: contenedores,
                errors: [],
                hasError: false
            });
        }
        else {
            return res.json({
                data: contenedores,
                errors: [],
                hasError: false
            });
        }
    }).catch((error) => {
        var _a, _b, _c;
        return res.json({
            data: (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data,
            errors: (_c = (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.message,
            hasError: true
        });
    });
    //   contenedores = contenedores.data;
    //  console.log(contenedores);
});
app.post('/authLoadOrder', (req, res) => {
    var _a, _b, _c;
    // let url = 'https://api-wms.qas.ransaaplicaciones.com/order';
    let data = (_a = req.body) === null || _a === void 0 ? void 0 : _a.data;
    let token = (_b = req.body) === null || _b === void 0 ? void 0 : _b.token;
    let url = (_c = req.body) === null || _c === void 0 ? void 0 : _c.url;
    let response;
    let conf = {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Host': 'api-wms.ransaaplicaciones.com'
        }
    };
    let contenedores;
    axios.post(url, JSON.parse(data), conf).then((data) => {
        var _a;
        contenedores = data === null || data === void 0 ? void 0 : data.data;
        response = data === null || data === void 0 ? void 0 : data.data;
        if ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.errors[0]) {
            return res.json({
                // data   : JSON.stringify(data) ,
                data: contenedores,
                errors: contenedores === null || contenedores === void 0 ? void 0 : contenedores.errors,
                hasError: true
            });
        }
        else {
            return res.json({
                data: contenedores,
                errors: [],
                hasError: false
            });
        }
    }).catch((error) => {
        var _a, _b, _c;
        return res.json({
            data: (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data,
            errors: (_c = (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.message,
            hasError: true
        });
    });
});
app.post('/authLoadAsn', (req, res) => {
    var _a, _b, _c;
    // let url = 'https://api-wms.qas.ransaaplicaciones.com/asn';
    let data = (_a = req.body) === null || _a === void 0 ? void 0 : _a.data;
    let token = (_b = req.body) === null || _b === void 0 ? void 0 : _b.token;
    let url = (_c = req.body) === null || _c === void 0 ? void 0 : _c.url;
    let response;
    let conf = {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Host': 'api-wms.ransaaplicaciones.com'
        }
    };
    let contenedores;
    axios.post(url, JSON.parse(data), conf).then((data) => {
        var _a;
        contenedores = data === null || data === void 0 ? void 0 : data.data;
        if ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.errors[0]) {
            return res.json({
                data: data,
                errors: data,
                hasError: true
            });
        }
        else {
            return res.json({
                data: contenedores,
                errors: [],
                hasError: false
            });
        }
    }).catch((error) => {
        return res.json({
            data: response,
            errors: response === null || response === void 0 ? void 0 : response.errors,
            hasError: true
        });
    });
    //  contenedores = contenedores.data;
    // console.log(contenedores);
});
app.get('/CpropietariosInt', (req, res) => {
    let admin = new InforController_1.default();
    let params = req.query;
    admin.verPropietariosIntegracionMod(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
app.get('/CpropietariosInt', (req, res) => {
    let admin = new InforController_1.default();
    let params = req.query;
    admin.verPropietariosIntegracionMod(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
app.post('/CpropietariosInt', (req, res) => {
    let admin = new InforController_1.default();
    let params = req.body;
    admin.AccionesPropietarios(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
app.get('/CpropietariosIntEsp', (req, res) => {
    let admin = new InforController_1.default();
    let params = req.query;
    admin.PropietarioEspecifico(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
exports.default = app;
