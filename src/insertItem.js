# Criar primeira função Lambda

"use strict";

const {v4} = require("uuid")
const AWS = require("aws-sdk")

const insertItem = async (event) = {

    const {item} = JSON.parse(event.body);
    const createdAt = new Date().toISOString();
    const id = v4();

    const DynamoDB = new AWS.DynamoDB.DocumentClient();

    const newItem = {
        id,
        item,
        creatAt,
        itemStatus: false

    }

    await DynamoDB.put(
        {
            TableName: "IttemTableNew",
            Item: newItem
        }
    )

    return {
        statusCode: 200,
        body: JSON.stringify(newItem)

    };
}