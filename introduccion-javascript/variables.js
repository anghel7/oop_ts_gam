var disabled = true; //true or false
console.log(disabled);
var firtsName = "angel";
console.log(firtsName);
var greeting = "hello " + firtsName;
console.log(greeting);
var list = [3, 7];
console.log(list);
var nombre = "Juan Perez";
function ejemplo() {
    var x = 100;
    for (var m = 0; m < 10; m++) {
        var y = 200;
        console.log("variable x dentro del for", x);
        console.log("variable y dentro del for", y);
    }
    console.log("variable x fuera del for", x);
    // console.log("variable y fuera del for",y); // error por el el tipo de declaracion
}
ejemplo();
// Template Strings
var name1 = "Luis";
var sentence = "Hello, my name is " + name1;
var betterSentence = "Hello, \n    my name is " + name1 + ".";
console.log(betterSentence);
