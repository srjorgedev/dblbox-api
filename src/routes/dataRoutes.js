import express from "express"
import { getAllAffinity, getAffinityById } from "../controllers/getDataControllers/getAffinity.js"
import { getAllType, getTypeById } from "../controllers/getDataControllers/getType.js"
import { getAllChapter, getChapterById } from "../controllers/getDataControllers/getChapter.js"
import { getAllRarity, getRarityById } from "../controllers/getDataControllers/getRarity.js"
import { getAllTag, getTagById } from "../controllers/getDataControllers/getTag.js"

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

router.get('/type', async (req, res) => {
    try {
        const { data } = await getAllType()

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

router.get('/type/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { data, errorMessage, error } = await getTypeById(id)

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

router.get('/chapter', async (req, res) => {
    try {
        const { data } = await getAllChapter()

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

router.get('/chapter/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { data, errorMessage, error } = await getChapterById(id)

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

router.get('/tag', async (req, res) => {
    try {
        const { data } = await getAllTag()

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

router.get('/tag/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { data, errorMessage, error } = await getTagById(id)

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

router.get('/rarity', async (req, res) => {
    try {
        const { data } = await getAllRarity()

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

router.get('/rarity/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { data, errorMessage, error } = await getRarityById(id)

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