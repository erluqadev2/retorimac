'use strict'

const peopleTable = require('../database/people_table')
const {v4: uuidv4} = require('uuid')
const mapping = require('../mapper/mapping')

const KEY_LANG = process.env.KEY_LANG || 'LANG'
const LANG_ES = process.env.LANG_ES || 'ES'
const LANG_EN = process.env.LANG_EN || 'EN'

const savePeople = (item) => {
    const lang = Object.entries(item).filter(el => el[0] == KEY_LANG)
    if (lang.length > 0 && lang[0][1] == LANG_EN) {
        // english
        item = mapping.map(mapping.KEY_MAPPERS.PEOPLE, item)
    }

    item.ID = uuidv4()

    return peopleTable.savePeople(item).then(response => {
        return response
    })
};

const getPeople = (peopleId) => {
    return peopleTable.getPeople(peopleId).then(response => {
        if (response == 'undefined' || typeof response != 'object') {
            response = 'People not found'
        }
        //console.log('response : ', response)
        return response
    })
}

const getAllPeople = () => {
    return peopleTable.getAllPeople()
}

module.exports = {
    savePeople: savePeople,
    getPeople: getPeople,
    getAllPeople: getAllPeople
}
