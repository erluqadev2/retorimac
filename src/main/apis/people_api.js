'use strict'

const peopleSrv = require('../services/people_srv')
const {createResponse: createResponse} = require('../commons/helpers')

const savePeople = (event, context, callback) => {
    let item = JSON.parse(event.body)
    peopleSrv.savePeople(item).then(response => {
        callback(null, createResponse(200, response))
    })
}

const getPeople = (event, context, callback) => {
    const id = event.pathParameters.ID
    peopleSrv.getPeople(id).then((response) => {
        callback(null, createResponse(200, response))
    })
}

const getAllPeople = (event, context, callback) => {
    peopleSrv.getAllPeople().then(response => {
        callback(null, createResponse(200, response))
    })
}

module.exports = {
    savePeople: savePeople,
    getPeople: getPeople,
    getAllPeople: getAllPeople
}