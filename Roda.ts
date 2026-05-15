import 'dotenv/config'

const DATABASE_URL = process.env.DATABASE_URL
const API_KEY = process.env.API_KEY
const PORT = process.env.PORT

if (!DATABASE_URL)
    throw new Error ("CRÍTICO: DATABASE_URL ausente na base de dados do arquivo .env")
if (!API_KEY)
    throw new Error ("CRÍTICO: API_KEY ausente na base de dados do arquivo .env")
if (!PORT)
    throw new Error ("CRÍTICO: PORT ausente na base de dados do arquivo .env")

console.log("BASE DE DADOS CONECATADA COM SUCESSO E DE FORMA COMPLETA")