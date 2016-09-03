var request = require("request");

var prNum = 1; // mock input

var base = "http://api.github.com";
var repo = "badzone.github.io";
var path = "/repos/badzone/" + repo + "/pulls/" + prNum;

var opts = {
    uri: base + path,
    port: 443,
    method: "GET",
    accept: "*/*",
    json: true,

    headers: {
        'User-Agent': 'NodeJS script'
    }
}
function sendRequest(opts, callback) {

    request(opts, function (error, res, body) {
        if (error) throw new Error(error);

        /*XXX*/console.log('Title:\t\t', body.body);
        /*XXX*/console.log('Num Commits:\t', body.commits);
        /*XXX*/console.log('Link:\t\t', body.html_url);

    });
}
sendRequest(opts);
