   interface dataApi {

    data: any[] | any,
    errors: any[],
    hasError: boolean
}


  interface loginI{
        data : {
            token ?: any,
            dataUsuario : {},
            modulosPermitidos : {
                id_modulo : number,
                modulo    : string,
                imagen    : string
            }[]
        },
        errors : [],
        hasError : boolean
}


export {
    loginI,
    dataApi
}