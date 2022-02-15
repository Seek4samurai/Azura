const async = require('async');
const fs = require('fs');
const https = require('https');
const path = require("path");
const createReadStream = require('fs').createReadStream
const sleep = require('util').promisify(setTimeout);

require('dotenv').config();

// Azure Computer vision client
const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;

const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

// Credentials here
const key = process.env.KEY;
const endpoint = process.env.ENDPOINT;

// console.log(key);
// console.log(endpoint);

const computerVisionClient = new ComputerVisionClient(
    new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

function computerVision() {
    async.series([
        async function () {
            const describeURL = "https://i.ytimg.com/vi/FsdWNU--qsU/hq720.jpg";

            // Analyze URL image;
            // console.log('Analyzing...', describeURL.split('/').pop());
            const caption = (await computerVisionClient.describeImage(describeURL)).captions[0];
            // console.log(caption);

            console.log(`Following image seems to be ${caption.text} (${caption.confidence.toFixed(2)} confidence percent)`);

            // imageCaption = caption.text;
            // confidenceLevel = caption.confidence.toFixed(2);

            // return (imageCaption, confidenceLevel)
        },
        function () {
            return new Promise((resolve) => {
                resolve();
            })
        }
    ], (err) => {
        throw (err);
    });
}

computerVision();
