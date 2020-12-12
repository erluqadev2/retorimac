'use strict'

const {peopleMap: peopleMap} = require('./people')

const KEY_MAPPERS = {
    PEOPLE : 'PEOPLE'
}

const map = (mapperType, item) => {
    let result = {}
    if (mapperType == KEY_MAPPERS.PEOPLE) {
        Object.entries(item).forEach(el => {
            let newKey = peopleMap[el[0]]
            if (typeof newKey != 'undefined') {
                result[newKey] = el[1]
            }
        })
    }

    return result
}

module.exports = {
    KEY_MAPPERS: KEY_MAPPERS,
    map: map
}