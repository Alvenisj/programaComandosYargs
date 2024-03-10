const { crearArchivoTablaMultiplicar } = require('./helpers/multiplicar');

// IMPORTAMOS LA INSTANCIA DE yargs QUE CREAMOS EN EL DIRECTORIO DE config/yargs.js
const argv = require('./config/yargs');

require('colors');

// node app -b Y NO LE PASAMOS ARGUMENTOS; CON EL demandOption TENEMOS LO SIGUIENTE: Missing required argument: b 12

console.clear();
// console.log(argv)

// EJECUTAMOS LA FUNCIÓN QUE CREA EL ARCHIVO CON TODA LA TABLA DE MULTIPLICAR
crearArchivoTablaMultiplicar( argv.b, argv.l, argv.h )
    .then ( nombreArchivo => console.log(nombreArchivo.rainbow, 'CREADO EXITOSAMENTE'.green ) )
    .catch( err => console.log(err) )


// FORMA EFICIENTE DE HACERLO CON EL PAQUETE yargs
// EJECUTAMOS EL COMANDO: node app --base=6
// CON LA INSTANCIA CREADA DE yargs OBTENEMOS: { _: [], base: 6, '$0': 'app' }
// console.log( argv );
// console.log('La base yargs es: ', argv.base )


// FORMA CON FINES EDUCATIVOS PARA SABER DE DONDE VIENEN LOS VALORES QUE SE PASAN COMO ARGUMENTOS A UN COMANDO

// CON process.argv TENEMOS ACCESO A UN ARREGLO DE DOS POSICIONES, DONDE NOS MUESTRA LOS PATH DONDE SE ENCUENTRA EL EJECUTABLE DE node.exe Y EL PATH DE LA CARPETA DONDE ESTAMOS TRABAJANDO Y ADICIONALMENTE MUESTRA LOS VALORES QUE LE MANDAMOS COMO ARGUMENTOS, POR EJEMPLO: --base=9
// COMANDO:  node app --base=9
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\Alvenis\\Desktop\\nodeFinal\\02-basesNode\\app',
//     '--base=9'
// ]

// const [ , , arg3 = 'base=5' ] = process.argv;
// const splitted = arg3.split('=');
// const [ , base = 5 ] = splitted;
// console.log( base );


    // RECOMENDABLE USAR EL PAQUETA yargs YA QUE SE ENCUENTRA VALIDADO AL MÁXIMO PARA USAR ARGUMENTOS 


    // SE CONFIGURA EL PACKAGE.JSON EN EL ÁREA DE LOS "scripts": { "base6": "node app --base=6" }
    // CON npm run base6 PODEMOS EJECUTAR DICHO COMANDO

    // PARA INSTALAR UNA VERSIÓN ESPECÍFICA DE ALGÚN PAQUETE, SE HACE DE LA SIGUIENTE MANERA:
    // npm i colors@1.0.0
    // npm i yargs 
