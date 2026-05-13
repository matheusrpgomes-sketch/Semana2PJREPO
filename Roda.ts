require('dotenv').config()



const DATABASE_URL = process.env.DATABASE_URL
const API_KEY = process.env.API_KEY
const PORT = process.env.PORT

if (DATABASE_URL === undefined)
    throw new Error ("ERRO")
if (API_KEY === undefined)
    throw new Error ("ERRO")
if (PORT === undefined)
    throw new Error ("ERRO")

console.log(DATABASE_URL)