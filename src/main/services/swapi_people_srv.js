'use strict'

const swapiPeople = require('../integrations/swapi/swapi_people')
const {createResponse: createResponse} = require('../commons/helpers')

const getPeople = (event, context, callback) => {
    const id = event.pathParameters.id
    swapiPeople.getPerson(id).then(result => {
        callback(error, createResponse(200, result))
    })
}

module.exports = {
    getPeople: getPeople
}