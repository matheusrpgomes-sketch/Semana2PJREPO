type Product = {
    price: number
    name: string
}

const Produtos: Product[] = [
    { price: 10, name: `Manga` },
    { price: 7, name: `Tomate` },
    { price: 1, name: `Morango` },
    { price: 6, name: `Banana` },
    { price: 3, name: `Maca` },
    { price: 2, name: `Pera` }
]

// Soma total dos preços
export const totalPrice = Produtos.reduce((acc, curr) => acc + curr.price, 0)
console.log("Valor total:", totalPrice)

// Média dos preços
export const media = totalPrice / Produtos.length
console.log("Valor da média é", media)

// Item mais caro
export const caro = Produtos.reduce((maior, atual) => {
    if (maior.price > atual.price) {
        return maior
    } else {
        return atual
    }
})
console.log(`${caro.name} com R$${caro.price} é o item mais caro`)

// 10% de desconto em todos os preços
export const val = Produtos.map(item => item.price * 0.9)
console.log("Os produtos com 10% de desconto são", val)