import * as Pieces from '@pieces.app/pieces-os-client'
import os from 'os';

const platform = os.platform();
let port = 1000;

// Defining the port based on the operating system. For Linux, the port is 5323, and for macOS/Windows, the port is 1000.
if (platform === 'linux') {
  port = 5323;
} else {
  port = 1000;
}

// The `basePath` defaults to http://localhost:1000, however we need to change it to the correct port based on the operating system.
const configuration = new Pieces.Configuration({
  basePath: `http://localhost:${port}`
})
// Create an instance of the WellKnownApi class
const apiInstance = new Pieces.WellKnownApi(configuration);

console.log('Hello World');

// const qGPTApiInstance = new Pieces.QGPTApi(configuration);

// const question = "What is the capital of France?";

// const questionInput: Pieces.QuestionRequest = {
//     qGPTQuestionInput: question
// };

// qGPTApiInstance.question(questionInput).then((response: Pieces.QGPTQuestionOutput) => {
//   console.log('Response from LLM: ' + response) // ok
// }).catch((error: unknown) => {
//     console.error('Error asking question:', error);
// });

apiInstance.getWellKnownHealth().then((data: string) => {
  console.log(data) // ok
}).catch((error: unknown) => console.error(error));