// node modules to make life easier
const request = require("request");
const readline = require('readline-sync');

// Get user access token
mySecret = readline.question(``);
// Demo code below
const headers = {
  Authorization: `Bearer ${mySecret}`
};
// call the API
request(
  "https://api-eus.qrypt.com/api/v1/quantum-entropy",
  { json: true, headers },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    // base64 decode the response, display as random numbers between 0 and 255
    body.random.forEach((b64) =>
      Buffer.from(b64, "base64").forEach((c) => console.log(c))
    );
  }
);
