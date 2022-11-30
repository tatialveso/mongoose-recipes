import express from 'express'
import Recipe from "../models/Recipe.model.js";

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

export default router