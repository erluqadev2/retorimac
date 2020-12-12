module.exports = {
    tables : [
        {
            TableName : 'people-table',
            AttributeDefinitions: [
                {
                    AttributeName: 'ID',
                    AttributeType: 'S'
                }
            ],
            KeySchema: [
                {
                    AttributeName: 'ID',
                    KeyType: 'HASH'
                }
            ],
            BillingMode: 'PAY_PER_REQUEST'
        }
    ]
}