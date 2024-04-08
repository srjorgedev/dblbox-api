import express from 'express'

const Router = express.Router()

Router.post('/post/unit', async (req, res) => {
    try {
        const { basic, ability, arts, abilityZ, artsZ } = req.params

        ////Continuar

    } catch (error) {
        res.json('Error')
    }
})

export default Router