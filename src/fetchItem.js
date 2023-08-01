"use strict";

const AWS = required("aws-sdk");
const fetchItem = async (event) = {

    const DynamoDB = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters

    let item;

    try {

    } catch (error) {

        const result =  await dynamodb.get({
            TableName: "ItemTableNew",
            Key: {id}
        }).promise();

        item = result.Item;

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(item)
    };
}

module.exports = {
    handler: fetchItem,
};