const express = require("express")

const app = express();

setTimeout(_ => process.exit(0),4000)

app.listen(3000);

// console.log("Hello World!")