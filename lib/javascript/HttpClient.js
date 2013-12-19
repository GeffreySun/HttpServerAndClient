/**
 * Created by Administrator on 13-12-18.
 */
var http = require("http");
//var path =  '/Default.aspx?Attion=0&Lparm=10&wangye=1';
//var path =  '/Default.aspx?Attion=1&Lid=10';
var path =  '/Default.aspx?Attion=2&Lid=10&Lkind=0&Lpm=10&fuck=1';

var options = {
    host: 'venpoo.com',
    path: path,
    port: 9090
};

var request = http.request(options, function (response) {
    console.log('STATUS is: ' + response.statusCode);
    console.log('HEADERS is :'+JSON.stringify(response.headers));
    response.setEncoding('UTF-8');
    response.on('data', function (data) {
        console.log(data);
    });
});

request.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// Write the parameters to the HTTP POST.
request.write('data\n');
//Close the HTTP connection...
request.end();