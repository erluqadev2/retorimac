'use strict'

const {createResponse: createResponse} = require('../commons/helpers')
const swapiPeopleSrv = require('../services/swapi_people_srv')

const getPeople = (event, context, callback) => {
    const id = event.pathParameters.id
    swapiPeopleSrv.getPeople(id).then(result => {
        callback(null, createResponse(200, result))
    })
}

const getAndSavePeople = (event, context, callback) => {
    const id = event.pathParameters.id
    swapiPeopleSrv.getAndSavePeople(id).then(result => {
        callback(null, createResponse(200, result))
    })
}

module.exports = {
    getPeople: getPeople,
    getAndSavePeople: getAndSavePeople
}