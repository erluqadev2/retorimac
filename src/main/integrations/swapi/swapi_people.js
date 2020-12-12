'use strict'

const swapi = require('swapi-node');

const getPerson = (id) => {
    return swapi.getPerson(id).then((result) => {
        return result
    })
}

module.exports = {
    getPerson: getPerson
}