"use strict";

const AWS = required("aws-sdk");
const updateItem = async (event) = {

    const {itemStatus} =  JSON.parse(event.body);
    const {id} = event.pathParameters

    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    await dynamoDB.update({
        TableName: "ItemTableNew", 
        Key: {id},
        updateExpression: 'set itemStatus = itemStatus',
        ExpressionAttributeValues: (
                ':itemStatus' : 'itemStatus'
        ),
        ReturnValues: "ALL_NEW"    
    }).promise

    return {
        statusCode: 200,
        body: JSON.stringify(
            { msg: 'Item Updated'}
        ),
    };
}