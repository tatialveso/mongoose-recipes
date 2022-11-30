import express from 'express'
import Recipe from "../models/Recipe.model.js";
import data from '../data.json' assert { type: 'json' }

const router = express.Router()

router.post('/create', async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body)
        
        
        return res.status(201).json(newRecipe)
    } catch (error) {
        console.log(error)

        return res.status(500).json({ msg: 'Sorry, something is wrong. Try again later!'})
    }
})

router.post('/insert', async (req, res) => {
    try {
        const insertRecipes = await Recipe.insertMany(data)

        return res.status(201).json(insertRecipes)
    } catch (error) {
        console.log(error)

        return res.status(500).json({ msg: 'Sorry, something is wrong. Try again later!'})
    }
})

export default router