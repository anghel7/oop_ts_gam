// Void
function nothingInteresting(): void {
    let x = 'hello world';
    console.log(x);
}

nothingInteresting();

// Void
function retornaUnNumero(): number {
    let x: number = 123;
    return x;
}
let aux = retornaUnNumero();
console.log(aux);

function retornaUnString(): string {
    return "123";
}

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000 * i);
}