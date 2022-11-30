import express from 'express'
import * as dotenv from 'dotenv'
import dbConnection from './config/db.config.js'
import recipeRouter from './routes/recipes.routes.js'

dotenv.config()

dbConnection()

const app = express()
app.use(express.json())

app.use('/recipes', recipeRouter)

app.listen(Number(process.env.PORT), () => {
  console.log(`server listening on PORT`, process.env.PORT)
})