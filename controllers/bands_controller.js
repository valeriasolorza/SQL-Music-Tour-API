const bands = require('express').Router()
const { Op } = require('sequelize')
const db = require('../models')
const { Band } = db

// SHOW ALL BANDS - GET
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll({
            order: [['available_start_time', 'ASC']],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundBands)
    } catch (error) {
        res.status(500).json(error)
    }
})


// FIND A SPECIFIC BAND - GET
bands.get('/:id', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: { band_id: req.params.id }
        })
        res.status(200).json(foundBand)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A NEW BAND - POST
bands.post('/', async (req, res) => {
    try {
        const NewBand = await Band.create(req.body)
        res.status(201).json({
            message: 'Successfully inserted a new Band!',
            data: NewBand
        })
    } catch {
        res.status(422).json(error)
    }
})

// UPDATE A BAND - PUT
bands.put('/:id', async (req, res) => {
    try {
        const updatedBands = await Band.update(req.body, {
            where: { band_id: req.params.id },
            returning: true
        })
        res.status(202).json({
            message: `Successfully updated ${updatedBands} band(s)`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// DELETE A BAND - DELETE
bands.delete('/:id', async (req, res) => {
    try {
        const deletedBands = await Band.destroy({
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedBands} band(s)`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = bands
