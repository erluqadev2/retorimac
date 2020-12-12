'use strict'

const dynamoDB = require('./dynamoDB')

let TABLE_NAME = process.env.PEOPLE_TABLE_NAME

if (process.env.JEST_WORKER_ID) {
    const {tables: tables} = require('../../../jest-dynamodb-config')
    TABLE_NAME = tables[0].TableName
}

const savePeople = item => {
    return dynamoDB.saveItem(TABLE_NAME, item)
}

const getPeople = itemId => {
    const keys = {
        ID: itemId
    }
    return dynamoDB.getItem(TABLE_NAME, keys)
}

const getAllPeople = () => {
    return dynamoDB.getAllItems(TABLE_NAME)
}

module.exports = {
    savePeople: savePeople,
    getPeople: getPeople,
    getAllPeople: getAllPeople
}