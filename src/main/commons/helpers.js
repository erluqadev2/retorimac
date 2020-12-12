'use strict'

const createResponse = (statusCode, response) => {
    return {
        statusCode: statusCode,
        body: JSON.stringify(response),
    };
}

module.exports = {
    createResponse: createResponse
}