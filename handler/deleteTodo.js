const AWS = require("aws-sdk");

const TODO_TABLE = process.env.TODO_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.deleteTodo = (event, context, callback) => {
    const params = {
        TableName: TODO_TABLE,
        key: {
            id: event.pathParameters.id
        }
    }

    dynamoDb.delete(params, (error, data) => {
        if(error){
            console.error(error);
            callback(new Error(error));
            return;
        }
        //response
        const response = {
            statusCode: 200,
            body: JSON.stringify({message: "Delete Success"})
        }
        callback(null, response);
    });

}