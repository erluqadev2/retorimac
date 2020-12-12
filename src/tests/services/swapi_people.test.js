'use strict'

const swapiPeopleSrv = require('../../main/services/swapi_people_srv')

test('swapiPeopleSrv is Object', () => {
    expect(typeof swapiPeopleSrv).toBe('object')
})

test('swapiPeopleSrv has function getPeople and getAndSavePeople', () => {
    expect(typeof swapiPeopleSrv.getPeople).toBe('function')
    expect(typeof swapiPeopleSrv.getAndSavePeople).toBe('function')
})

test('swapiPeopleSrv getPeople is working', async () => {
    expect.assertions(1)

    const data = await swapiPeopleSrv.getPeople(5)

    expect(data.nombre).toEqual('Leia Organa')
}, 10000)

test('swapiPeopleSrv getAndSavePeople is working', async () => {
    expect.assertions(2)

    const data = await swapiPeopleSrv.getAndSavePeople(3)

    expect(typeof data.ID).toEqual('string')
    expect(data.nombre).toEqual('R2-D2')
})