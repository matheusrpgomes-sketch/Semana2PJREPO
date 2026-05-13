  type product = {
        price: number
        name: string
    }
const Produtos : product [] = [ {price: 10, name: `Manga`}, {price: 7, name:`Tomate`},{price: 1, name: `Morango`}, {price: 6, name:`Banana`},{price: 3, name: `Maca`}, {price: 2, name:`Pera`}
] 
export const total = Produtos.map(item => item.price)
console.log(total)
export const soma = total.reduce<number>((acc, curr) => acc + curr, 0)/total.length
console.log("Valor da media é", soma)
console.log("O item mais caro tem o valor de " )
export const caro = total.reduce<number>((Maior, Atual) => {   
    if (Maior>Atual) {
       return Maior;
    }
    else {
        return Atual;
    }  
}, 0);
console.log(`${caro}`,"É o item mais caro")

export const val = total.map(item => item = item*0.9)

console.log("Os produtos com 10% de desconto é ",val)