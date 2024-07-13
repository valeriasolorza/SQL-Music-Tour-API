const events = require('express').Router()
const { Op } = require('sequelize')
const db = require('../models')
const { Event } = db

// SHOW ALL EVENTs - GET
events.get('/', async (req, res) => {
    try {
        const foundEvent = await Event.findAll({
            order: [['date', 'ASC']],
            where: {
                event_name: { [Op.like]: `%${req.query.event_name ? req.query.event_name : ''}%` }
            }
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})


// FIND A SPECIFIC EVENT - GET
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A NEW EVENT - POST
events.post('/', async (req, res) => {
    try {
        const NewEvent = await Event.create(req.body)
        res.status(201).json({
            message: 'Successfully inserted a new Event!',
            data: NewEvent
        })
    } catch {
        res.status(422).json(error)
    }
})

// UPDATE A EVENT - PUT
events.put('/:id', async (req, res) => {
    try {
        const updatedEvent = await Event.update(req.body, {
            where: { event_id: req.params.id },
            returning: true
        })
        res.status(202).json({
            message: `Successfully updated ${updatedEvent} Event(s)`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// DELETE A STAGE - DELETE
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvent = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvent} Event(s)`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = events
