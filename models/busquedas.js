const axios = require('axios');


class Busquedas{
    
    historial = ['Tegucigalpa','Madrid','Bogota'];

    constructor(){
        //TODO:Leer DB si existe
    }

    get paramsMapbox(){
        return {
            'access_token':process.env.MAPBOX_KEY,
            'limit':5,
            'language':'es'
        }
    }

    async ciudad(lugar = ''){
        try {
            //peticion HTTP
            const intance = axios.create({
                baseURL:`https://api.mapbox.com/`,
                params:this.paramsMapbox
            });
            const resp = await intance.get(`geocoding/v5/mapbox.places/${lugar}.json`);
            console.log(resp.data)
            return[]
            
        } catch (error) {

            return [];
        }


        return [];//Regresar los lugares
    }



}

module.exports = Busquedas;