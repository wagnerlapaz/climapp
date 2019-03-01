const axios = require('axios');

const localizacion = async(direccion) => {


    let norURL = encodeURI(direccion);

    //throw new error(`${direccion} es un argumento invalido`);

    ///*
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${norURL},+CA&key=AIzaSyBGJA1U1iJF10HSk1lWIRbrzUz6mrYl28w `);

    if (respuesta.data.status === 'ZERO_RESULTS') {
        //console.log(`argumento invalido`);
        throw new Error(`argumento invalido`);
    }

    let loc = respuesta.data.results[0];
    return {
        direccion: loc.formatted_address,
        lat: loc.geometry.location.lat,
        lon: loc.geometry.location.lng
    }

    //*/
}

const clicoor = async(plat, plon) => {

    let norURL = encodeURI(`&lat=${plat}&lon=${plon}&`);
    // console.log(norURL);

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric${norURL}APPID=46664ed3b4c37337540516fd9b4c566a`);
    //let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=xxx&lon=37.6041761&APPID=46664ed3b4c37337540516fd9b4c566a`);

    //console.log(respuesta.status);

    if (respuesta.data.cod === 400) {
        throw new Error(`Error en el servicio: ${respuesta.message}`);
    }


    let rmain = respuesta.data.main.temp;
    return rmain;
    /*
    return {
        temp: rmain.temp,
        pressure: rmain.pressure,
        humidity: rmain.humidity,
        temp_min: rmain.temp_min,
        temp_max: rmain.temp_max
    }*/
}

module.exports = {
    localizacion,
    clicoor
}