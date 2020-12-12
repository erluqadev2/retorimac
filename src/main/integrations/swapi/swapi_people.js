'use strict'

const swapi = require('swapi-node');

const getPerson = () => {
    return swapi.getPerson(1).then((result) => {
        return result
    })
}

module.exports = {
    getPerson: getPerson
}