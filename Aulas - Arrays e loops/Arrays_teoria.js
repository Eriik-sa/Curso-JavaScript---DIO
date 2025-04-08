const lista = [1, 2, 3, 4]
lista.push("erik") // adiciona um item ao final do array
lista.push(57)

lista[2] = "teste" // substitui o item do array

lista.pop() // remove o ultimo item do array 
console.log(lista.pop()) // imprimiu item que o pop removeu 

console.log(lista.shift())// mesma coisa que o pop, mas com o primeiro item ao invés do último
console.log(lista);

