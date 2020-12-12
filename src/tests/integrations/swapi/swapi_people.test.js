const swapiPeople = require('../../../main/integrations/swapi/swapi_people')
const mapping = require('../../../main/mapper/mapping')

test('swapi_people typeof result object', async () => {
    expect.assertions(1)
    const data = await swapiPeople.getPerson(1)
    expect(typeof data).toEqual('object')
}, 10000)

test('swapi_people validate translation', async () => {
    expect.assertions(1)
    let data = await swapiPeople.getPerson(1)
    data = mapping.map(mapping.KEY_MAPPERS.PEOPLE, data)
    expect(data.nombre).toEqual('Luke Skywalker')
}, 10000)