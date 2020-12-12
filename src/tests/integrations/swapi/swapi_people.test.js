const swapiPeople = require('../../../main/integrations/swapi/swapi_people')

test('swapi_people typeof result object', async () => {
    expect.assertions(1)
    const data = await swapiPeople.getPerson()
    expect(typeof data).toEqual('object')
}, 10000)