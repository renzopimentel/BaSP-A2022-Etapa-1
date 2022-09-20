console.log('--EXERCISE 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función
    y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log('-Exercise 6.a:');
var numberOne = 2;
var numberTwo = 4.3;
function sum(numberOne, numberTwo){
    return (numberOne + numberTwo);
};
var result = sum(numberOne,numberTwo);
console.log('The sum of the numbers is: ', result);

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
    de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor
    NaN como resultado. */

console.log('-Exercise 6.b:');
function sum(numberOne,numberTwo){
    if (typeof(numberOne) === 'number' && typeof(numberTwo) === 'number') {
        var result = numberOne + numberTwo;
        return result
      } else {
        alert('One of the values ​is not a number');
        return NaN;
    }
}
console.log(sum(numberOne,numberTwo));

// c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('-Exercise 6.c:');
function validateInteger(number){
    return Number.isInteger(number);
}
console.log(validateInteger(numberOne));
console.log(validateInteger(numberTwo));

/* d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean
    enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado). */

console.log('-Exercise 6.d:');
function sum(numberOne,numberTwo){
    if (typeof(numberOne) === 'number' && typeof(numberTwo) === 'number') {
        if(validateInteger(numberOne) == true && validateInteger(numberTwo) == true){
            return numberOne + numberTwo;
        }else{
            alert ('Both numbers are not integers; they have to be ' + Math.round(numberOne) + ' and ' + Math.round(numberTwo));
        }
    }else {
        alert('One of the values ​is not a number');
        return NaN;
    }
}
console.log(sum(numberOne,numberTwo));

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
    que todo siga funcionando igual. */

console.log('-Exercise 6.e:');
function validateNumbers(numberOne, numberTwo){
    return (validateInteger(numberOne) == true && validateInteger(numberTwo) == true)
}

function sumValidated(numberOne, numberTwo){
    if (typeof(numberOne) === 'number' && typeof(numberTwo) === 'number') {
        if (validateNumbers(numberOne, numberTwo)==true){
            return (numberOne + numberTwo);
        } else {
            alert ('Both numbers are not integers; they have to be ' + Math.round(numberOne) + ' and ' + Math.round(numberTwo));
        }
    } else {
        alert('One of the values ​is not a number');
        return NaN;
    }
}
var resultValidated = sumValidated(numberOne,numberTwo);
console.log(resultValidated);
