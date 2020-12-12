'use strict'

const AWS = require('aws-sdk')

let options = {}

if (process.env.JEST_WORKER_ID) {
    options = {
        endpoint: 'localhost:8000',
        sslEnabled: false,
        region: 'local-env',
    }
}

const dynamo = new AWS.DynamoDB.DocumentClient(options)

const saveItem = (table, item) => {
    const params = {
        TableName: table,
        Item: item
    }
    return dynamo.put(params).promise()
        .then(() => {
            return item
        })
}

const getItem = (table, keys) => {
    const params = {
        TableName: table,
        Key: keys
    }
    console.log(params)
    return dynamo.get(params).promise()
        .then(result => {
            return result.Item
        })
}

const getAllItems = (table) => {
    const params = {
        TableName: table
    }
    return dynamo.scan(params).promise()
        .then(result => {
            return result.Items
        })
}

module.exports = {
    dynamo: dynamo,
    saveItem: saveItem,
    getItem: getItem,
    getAllItems: getAllItems
}