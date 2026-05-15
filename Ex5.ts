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

export function groupBy<T>(array: T[], keyPath: string): Record<string, T[]> {
    return array.reduce((grupo, item) => {
        const valorChave = keyPath.split('.').reduce((obj: unknown, k: string) => {
            if (obj && typeof obj === 'object' && k in obj) {
                return (obj as Record<string, unknown>)[k]
            }
            return undefined
        }, item) as string | undefined

        if (valorChave !== undefined) {
            if (!grupo[valorChave]) {
                grupo[valorChave] = []
            }
            grupo[valorChave].push(item)
        }
        return grupo

    }, {} as Record<string, T[]>)
}

const resultado = groupBy(info, "city")
console.log(resultado)