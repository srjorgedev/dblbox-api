import express from 'express'
import * as POST from '../controllers/postUnitControllers/postUnit.js'
import { getAllUnits, getUnitById, getAllUnitsBasic } from '../controllers/getUnitControllers/getUnits.js'

const Router = express.Router()

Router.post('/post/unit', async (req, res) => {
    try {
        const { basic, ability, abilityZ, arts } = req.body

        const { errorMessage: err1 } = await POST.postAbilityUnit(ability)
        const { errorMessage: err2 } = await POST.postArtsUnit(arts)
        const { errorMessage: err3 } = await POST.postBasicUnit(basic)
        const { errorMessage: err4 } = await POST.postZenkaiAbilityUnit(abilityZ)

        if (err1 || err2 || err3 || err4) throw new Error(err1)

        res.json(' aa ')

    } catch (error) {
        res.json(error.message)
    }
})

Router.get('/get/units/all-data', async (req, res) => {
    try {
        const units = await getAllUnits()

        res.json(units)

    } catch (error) {
        res.json({
            data: null,
            error: true,
            errorMessage: error.message,
            status: 'Fail'
        })
    }
})

Router.get('/get/units/all-basic', async (req, res) => {
    try {
        const units = await getAllUnitsBasic()

        res.json(units)

    } catch (error) {
        res.json({
            data: null,
            error: true,
            errorMessage: error.message,
            status: 'Fail'
        })
    }
})

Router.get('/get/unit/:id', async (req, res) => {
    try {
        const { id } = req.params
        const unit = await getUnitById(id)

        res.json(unit)

    } catch (error) {
        res.json({
            data: null,
            error: true,
            errorMessage: error.message,
            status: 'Fail'
        })
    }
})

export default Router