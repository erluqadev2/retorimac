'use strict'

const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

const TABLE_NAME = process.env.PEOPLE_TABLE_NAME

const savePeople = item => {
    const params = {
        TableName: TABLE_NAME,
        Item: item
    }

    return dynamo.put(params).promise()
        .then(() => {
            return item.ID
        })
}

const getPeople = itemId => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            ID: itemId
        }
    }

    return dynamo.get(params).promise()
        .then(result => {
            return result.Item
        })
}

module.exports = {
    savePeople: savePeople,
    getPeople: getPeople
}