'use strict'

const dynamoDB = require('./dynamoDB')

let TABLE_NAME = process.env.PEOPLE_TABLE_NAME

const savePeople = item => {
    return dynamoDB.saveItem(TABLE_NAME, item)
}

const getPeople = itemId => {
    console.log('people_table.getPeople')
    const keys = {
        ID: itemId
    }
    return dynamoDB.getItem(TABLE_NAME, keys)
}

const setTable = (tableName) => {
    TABLE_NAME = tableName
}

module.exports = {
    savePeople: savePeople,
    getPeople: getPeople,
    setTable: setTable
}