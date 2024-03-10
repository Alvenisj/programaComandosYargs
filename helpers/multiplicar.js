const fs = require('fs');
const colors = require('colors');

const crearArchivoTablaMultiplicar = async ( base = 9, listar = false, hasta = 10 ) => {     
        try {
         
            let resultado = '';
            let consola = '';
            for( let i = 1; i <= hasta; i++ ) {
                resultado += `${base} x ${i} = ${base * i }\n`;
                consola += `${base} ${ 'x'.green } ${i} ${ '='.green } ${base * i }\n`;
            }

            // GRABAMOS USANDO EL fs file System de nodejs
            // fs.writeFile(`tabla-${base}.txt`, resultado, (err)=>{
            //     if ( err ) throw err;cls
            // })
            // GRABAMOS USANDO EL fs file System de nodejs; EL ERROR SE CAPTA CON try catch
            if( listar ) {
                console.log('====================================='.green );
                console.log('         Tabla del '.green, colors.red(base) )
                console.log('====================================='.green );
                console.log(consola);
            }

            fs.writeFileSync(`./salidaPrograma/tabla-${base}.txt`, resultado );

            return `Archivo tabla-${base}.txt`;

          } catch ( error ) {
               
                console.log(error)

          }

  
}


module.exports = {
    crearArchivoTablaMultiplicar
}




