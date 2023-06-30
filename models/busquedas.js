const axios = require('axios');


class Busquedas{
    
    historial = ['Tegucigalpa','Madrid','Bogota'];

    constructor(){
        //TODO:Leer DB si existe
    }

    async ciudad(lugar = ''){
        try {
            //peticion HTTP
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/guadalajara.json?proximity=ip&language=es&access_token=pk.eyJ1IjoibG9wZXpsZW5hIiwiYSI6ImNsamkxcHg5cDBvOHUzcnJ1bDRidmF6eGcifQ.fbua-wSkvSNx2RUVGWjffg');
            console.log(resp.data)
            return[]
            
        } catch (error) {

            return [];
        }


        return [];//Regresar los lugares
    }



}

module.exports = Busquedas;