// Ex 5 em typescript
type cidade = {
    city: string
    nome: string
}

const info: cidade[] = [
    { city: "BH", nome: "GG" },
    { city: "Vitoria", nome: "Mathias" },
    { city: "SP", nome: "Matheus" },
    { city: "Vitoria", nome: "Gabriel" }
]

export function groupBy<T>(array: T[], key: keyof T) { 
    const Reduce = array.reduce((grupo, item) => {
        const Chave = item[key] as string

        if (grupo[Chave] === undefined) {
            grupo[Chave] = []
        }
        grupo[Chave].push(item)
        return grupo

    }, {} as { [key: string]: T[] })

    console.log(Reduce)
}
// Exercicio 5 - groupBy generico
        
groupBy(info, "city")