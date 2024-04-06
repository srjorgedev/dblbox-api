import express from "express"
import { getAllAffinity, getAffinityById } from "../controllers/getDataControllers/getAffinity.js"

const router = express.Router()

router.get('/affinity', async (req, res) => {
    try {
        const { data } = await getAllAffinity()

        res.json(data)
    } catch (error) {
        res.json(
            {
                error: true,
                message: 'Ha ocurrido un error',
                errorMessage: error.message
            }
        )
    }
})

router.get('/affinity/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { data, errorMessage, error } = await getAffinityById(id)

        if (error) {
            throw new Error(errorMessage)
        }

        res.json(data)
    } catch (error) {
        res.json(
            {
                error: true,
                message: 'Ha ocurrido un error',
                errorMessage: error.message
            }
        )
    }
})

export default router