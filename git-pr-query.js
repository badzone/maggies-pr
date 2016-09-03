var http = require("http");
var https = require("https");

var prNum = 1; // mock input

var base = "api.github.com";
var repo = "badzone.github.io";
var url  = base + "/repos/badzone/" + repo + "/pulls/" + prNum;

var opts = {
  host: base,
  path: "/repos/badzone/" + repo + "/pulls/" + prNum,
  port: 443,
  method: "GET",
  accept: "*/*"
}

console.log("Querying:", url);
//console.log("Querying:", "http://api.github.com/repos/badzone/badzone.github.io/pulls/1");
https.get(opts, (res, req) => {
  console.log(`Response[${res.statusCode}]: ${res.statusMessage}`);
  res.resume();
}).on("error", (error) => {
  console.error(`Error: ${error.message}`);
});

