'use strict'

const peopleSrv = require('../../main/services/people_srv')

test('peopleSrv is object', () => {
    expect(typeof peopleSrv).toBe('object')
})

test('peopleSrv has functions savePeople, getPeople and getAllPeople', () => {
    expect(typeof peopleSrv.savePeople).toBe('function')
    expect(typeof peopleSrv.getPeople).toBe('function')
    expect(typeof peopleSrv.getAllPeople).toBe('function')
})

test('peopleSrv savePeople is working', async () => {
    let item = {
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

    expect.assertions(2)

    const data = await peopleSrv.savePeople(item)

    expect(typeof data).toEqual('object')
    expect(data.color_ojos).toEqual('Blue')

}, 10000)

test('peopleSrv getAllPeople is working', async () => {
    expect.assertions(2)

    const data = await peopleSrv.getAllPeople()

    expect(typeof data).toEqual('object')
    expect(typeof data[0].ID).toEqual('string')
})