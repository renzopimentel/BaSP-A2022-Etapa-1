console.log('--EXERCISE 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir
    todo el texto en mayúscula (utilizar toUpperCase). */

console.log('-Exercise 2.a:');
var sport = 'basketball';
sport = sport.toUpperCase();
console.log('My favourite sport is: ',sport);

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
    con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 2.b:');
var brand, newBrand;
brand = 'Victorinox';
newBrand = brand.substring(0, 4);
console.log('The new brand is: ',newBrand);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
    3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('-Exercise 2.c:');
var animal, shortAnimal;
animal = 'Rhinoceros';
shortAnimal = animal.substring(animal.length -3, animal.length);
console.log('The short animal is: ',shortAnimal);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
    en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
    toLowerCase y el operador +). */

console.log('-Exercise 2.d:');
var myComputer, myComputerCap;
myComputer = 'my computer color is Space Gray';
myComputerCap = myComputer.substring(0, 1).toUpperCase() + myComputer.substring(1).toLowerCase();
console.log(myComputerCap);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
    primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log('-Exercise 2.e:');
var phrase, phraseSpace;
phrase = 'I like learning Javascript';
phraseSpace = phrase.indexOf(' ');
console.log('The first space is in: ',phraseSpace);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).Utilizar
    los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en
    mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

console.log('-Exercise 2.f:');
var newPhrase, capitalLetter, newPhraseCap;
newPhrase = 'incredible atmosphere';
capitalLetter = newPhrase.indexOf(' ');
newPhraseCap = newPhrase.toUpperCase().substring(0,1) + newPhrase.toLowerCase().substring(1,capitalLetter+1) +
newPhrase.toUpperCase().substring(capitalLetter+1, capitalLetter+2) + newPhrase.toLowerCase().substring(12,21);
console.log(newPhraseCap);



