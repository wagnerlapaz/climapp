//api' keys
// AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM
// AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ
// AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8
// AIzaSyCroCERuudf2z02rCrVa6DTkeeneQuq8TA
// AIzaSyBkDYSVRVtQ6P2mf2Xrq0VBjps8GEcWsLU
// AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI
// AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y
// AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM
// AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY
// AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8

//mi api google maps
// AIzaSyBGJA1U1iJF10HSk1lWIRbrzUz6mrYl28w 
//

const lugar = require('./geoloc');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Ciudad',
        demand: true
    }
}).argv;

const getclima = async(pdireccion) => {

    try {

        let coors = await lugar.localizacion(pdireccion);
        let temp = await lugar.clicoor(coors.lat, coors.lon);

        return `la temperatura en ${coors.direccion} es de ${temp} grados`;

    } catch (e) {

        console.log('valores incorrectos pora visualizar el clima');

    }
}


getclima(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));
/*
lugar.localizacion(argv.direccion)
    .then(respuesta => {
        console.log(respuesta);
        lugar.clicoor(respuesta.lat, respuesta.lon)
            .then(clresp => {
                console.log(clresp);
            })
            .catch(error => console.log(error));

    })
    .catch(error => console.log(error));
    */