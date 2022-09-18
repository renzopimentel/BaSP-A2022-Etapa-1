console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar
    el valor de la suma de ambos números en una 3er variable. */

console.log('-Exercise 1.a:');
var numA, numB, sumResult;
numA = 40;
numB = 25;
sumResult = numA + numB;
console.log('The sum result is: ', sumResult);

/* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */

console.log('-Exercise 1.b');
var name, lastName, fullName;
name = 'Renzo';
lastName = ' Pimentel';
fullName = name.concat(lastName);
console.log('My full name is: ', fullName);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
    guardando el resultado de la suma en una 3er variable (utilizar length). */

console.log('-Exercise 1.c');
var myBrother, mySister, characterLenght;
myBrother = 'Tomas';
mySister = 'Sofia';
characterLenght = myBrother.length + mySister.length;
console.log('Amount of characters is: ', characterLenght);