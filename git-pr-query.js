var request = require("request");

/*
 * Usage:
 *  nodejs git-pr-query.js <CLIENT_SECRET>
 */

var clientSecret = process.argv[2] || '';
console.log(clientSecret);

var prNum = 1; // mock input

var base = "http://api.github.com";
var repo = "badzone.github.io";
var path = "/repos/badzone/" + repo + "/pulls/" + prNum;

var clientId = 'baf3427f23847e495c3a';

var opts = {
    uri: base + '/applications/'+clientId+'/',
    port: 443,
    method: "GET",
    accept: "*/*",
    json: true,
    headers: {
        'User-Agent': 'NodeJS script',
    },
    app: {
        url: "http://jmjanzen.com/",
        client_id: clientId,
        client_secret: clientSecret
    }
}
function sendRequest(opts, callback) {

    request(opts, function (error, res, body) {
        if (error) throw new Error(error);

        /*XXX*/console.log('API message:\t', body.message);
        //*XXX*/console.log('Title:\t\t', body.body);
        //*XXX*/console.log('Num Commits:\t', body.commits);
        //*XXX*/console.log('Link:\t\t', body.html_url);

    });
}

var iterations = 1;

for (var i = 0; i < iterations; i++) {
    sendRequest(opts);
}
