'use strict'

const dynamoDB = require('../../main/database/dynamoDB')
const peopleTable = require('../../main/database/people_table')
const {v4: uuidv4} = require('uuid')
const mapping = require('../../main/mapper/mapping')

test('dynamoDB is object', () => {
    expect(typeof dynamoDB).toBe('object')
})

test('savePeople and getPeople are functions', () => {
    expect(typeof peopleTable.savePeople).toBe('function')
    expect(typeof peopleTable.getPeople).toBe('function')
})

test('savePeeple result is object and ID is string', async () => {
    let saveData = {
        "LANG" : "EN",
        "birth_year": "19 BBY",
        "eye_color": "Blue",
        "films": [
            "https://swapi.py4e.com/api/films/1/"
        ],
        "gender": "Male",
        "hair_color": "Blond",
        "height": "172",
        "homeworld": "https://swapi.py4e.com/api/planets/1/",
        "mass": "77",
        "name": "Luke Skywalker",
        "skin_color": "Fair",
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-10T13:52:43.172000Z",
        "species": [
            "https://swapi.py4e.com/api/species/1/"
        ],
        "starships": [
            "https://swapi.py4e.com/api/starships/12/"
        ],
        "url": "https://swapi.py4e.com/api/people/1/",
        "vehicles": [
            "https://swapi.py4e.com/api/vehicles/14/"
        ]
    }

    saveData.ID = uuidv4()

    peopleTable.setTable('people-table')
    expect.assertions(2)

    const data = await peopleTable.savePeople(saveData)
    
    expect(typeof data).toEqual('object')
    expect(typeof data.ID).toEqual('string')

}, 10000)

test('savePeeple result validate key transformation and compare value', async () => {
    const KEY_LANG = 'LANG'
    const LANG_EN = 'EN'

    let saveData2 = {
        "LANG" : "EN",
        "birth_year": "19 BBY",
        "eye_color": "Blue",
        "films": [
            "https://swapi.py4e.com/api/films/1/"
        ],
        "gender": "Male",
        "hair_color": "Blond",
        "height": "172",
        "homeworld": "https://swapi.py4e.com/api/planets/1/",
        "mass": "77",
        "name": "Luke Skywalker",
        "skin_color": "Fair",
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-10T13:52:43.172000Z",
        "species": [
            "https://swapi.py4e.com/api/species/1/"
        ],
        "starships": [
            "https://swapi.py4e.com/api/starships/12/"
        ],
        "url": "https://swapi.py4e.com/api/people/1/",
        "vehicles": [
            "https://swapi.py4e.com/api/vehicles/14/"
        ]
    }

    const lang = Object.entries(saveData2).filter(el => el[0] == KEY_LANG)
    if (lang.length > 0 && lang[0][1] == LANG_EN) {
        // english
        saveData2 = mapping.map(mapping.KEY_MAPPERS.PEOPLE, saveData2)
    }
    
    saveData2.ID = uuidv4()

    peopleTable.setTable('people-table')
    expect.assertions(1)

    const data = await peopleTable.savePeople(saveData2)
    
    expect(data.anio_nacimiento).toEqual('19 BBY')

}, 10000)