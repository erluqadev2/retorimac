'use strict'

const swapiPeople = require('../integrations/swapi/swapi_people')
const peopleTable = require('../database/people_table')
const mapping = require('../mapper/mapping')
const {v4: uuidv4} = require('uuid')

const getPeople = (id) => {
    return swapiPeople.getPerson(id).then(result => {
        return mapping.map(mapping.KEY_MAPPERS.PEOPLE, result)
    })
}

const getAndSavePeople = (id) => {
    return getPeople(id).then(result => {
        result.ID = uuidv4()
        return peopleTable.savePeople(result)
    })
}

module.exports = {
    getPeople: getPeople,
    getAndSavePeople: getAndSavePeople
}