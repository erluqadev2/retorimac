'use strict'

const peopleTable = require('../database/people_table')
const {v4: uuidv4} = require('uuid')
const {createResponse: createResponse} = require('../commons/helpers')
const mapping = require('../mapper/mapping')

const KEY_LANG = process.env.KEY_LANG
const LANG_ES = process.env.LANG_ES
const LANG_EN = process.env.LANG_EN

const savePeople = (event, context, callback) => {
    console.log('savePeople')
    let item = JSON.parse(event.body)
    console.log(item)

    const lang = Object.entries(item).filter(el => el[0] == KEY_LANG)
    if (lang.length > 0 && lang[0][1] == LANG_EN) {
        // english
        item = mapping.map(mapping.KEY_MAPPERS.PEOPLE, item)
    }

    item.ID = uuidv4()

    peopleTable.savePeople(item).then(response => {
        console.log('response : ' + response)
        callback(null, createResponse(200, response))
    })
};

const getPeople = (event, context, callback) => {
    console.log('getPeople')
    const peopleId = event.pathParameters.ID
    console.log('id : ' + peopleId)

    peopleTable.getPeople(peopleId).then(response => {
        if (typeof response == 'undefined') {
            response = 'People no encontrado'
        }
        console.log('response : ' + response)
        
        callback(null, createResponse(200, response))
    })
}

module.exports = {
    savePeople: savePeople,
    getPeople: getPeople
}
