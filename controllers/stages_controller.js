const stages = require('express').Router()
const { Op } = require('sequelize')
const db = require('../models')
const { Stage } = db


// SHOW ALL STAGEs - GET
stages.get('/', async (req, res) => {
  try {
    const foundStage = await Stage.findAll({
      order: [['stage_name', 'ASC']],
      where: {
        stage_name: { [Op.like]: `%${req.query.stage_name ? req.query.stage_name : ''}%` }
      }
    })
    res.status(200).json(foundStage)
  } catch (error) {
    res.status(500).json(error)
  }
})



// FIND A SPECIFIC STAGEs - GET
stages.get('/:id', async (req, res) => {
  try {
    const foundStage = await Stage.findOne({
      where: { stage_id: req.params.id }
    })
    res.status(200).json(foundStage)
  } catch (error) {
    res.status(500).json(error)
  }
})

// CREATE A NEW STAGE - POST
stages.post('/', async (req, res) => {
  try {
    const NewStage = await Stage.create(req.body)
    res.status(201).json({
      message: 'Successfully inserted a new Stage!',
      data: NewStage
    })
  } catch {
    res.status(422).json(error)
  }
})

// UPDATE A STAGE - PUT
stages.put('/:id', async (req, res) => {
  try {
    const updatedStage = await Stage.update(req.body, {
      where: { stage_id: req.params.id },
      returning: true
    })
    res.status(202).json({
      message: `Successfully updated ${updatedStage} Stage(s)`
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

// DELETE A STAGE - DELETE
stages.delete('/:id', async (req, res) => {
  try {
    const deletedStage = await Stage.destroy({
      where: {
        stage_id: req.params.id
      }
    })
    res.status(200).json({
      message: `Successfully deleted ${deletedStage} Stage(s)`
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = stages;
