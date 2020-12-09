export default class App {

    factorial(numero) {
        let resultado = 1;

        for(let i = numero; i > 0; i = i - 1) {
            resultado = resultado * i;
        }

        return resultado
    }

    convertirAString(numero) {
        let numero 

        while(i <= 20) {

        }

        return numero;
    }

    obtenerDivisibles(numero) {
        let divisible = 0
        let i = numero;

        do{

            if(numero % i == 0){
                divisible = divisible + 1;
            }
            i = i -1;
        }while(i > 0);

        return divisibles; 
    }

    elevar(numero, potencia) {

    }
}

let app = new App();

console.log('Probando factorial');
console.log(app.factorial(5));
console.log('Probando convertirAString');
console.log()
console.log('Probando obtenerDivisibles');
console.log('Probando elevar');
