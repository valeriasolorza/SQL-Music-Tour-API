const bands = require('express').Router()
const db = require('../models')
const { Band, Event, Meet_greet, Set_time, Stage_events, Stage } = db

// FIND ALL BANDS
bands.get('/', async (_req, res) => {
    try {
        const foundBands = await Band.findAll();
        const foundEvents = await Event.findAll();
        const foundMeet_greets = await Meet_greet.findAll();
        const foundSet_times = await Set_time.findAll();
        const foundStage_events = await Stage_events.findAll();
        const foundStages = await Stage.findAll();
        res.status(200).json({
            foundBands,
            foundEvents,
            foundMeet_greets,
            foundSet_times,
            foundStage_events,
            foundStages,
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC BAND
// bands.get('/:id', async (req, res) => {
//     try {
//         const foundBand = await Band.findOne({
//             where: { band_id: req.params.id }
//         })
//         res.status(200).json(foundBand)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

module.exports = bands
