const request = require("request");

const fs = require("fs");

const url = process.argv[2];
const localPath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  }

  fs.writeFile(localPath, body, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    }
  });
});
