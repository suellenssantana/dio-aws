"use strict";

const AWS = required("aws-sdk");
const fetchItems = async (event) = {

    const DynamoDB = new AWS.DynamoDB.DocumentClient();

    let items;

    try {

    } catch (error) {

        const results = await DynamoDB.scan({
            TableName: "ItemTableNew"
        }).promise();

        itens = results.Items

    } catch (error) {

        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(items)
    };

}

module.exports = {
    handler: fetchItems,
};