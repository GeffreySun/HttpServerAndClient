/**
 * Created by Administrator on 13-12-18.
 */
var http = require("http");
//var path =  '/Default.aspx?Attion=0&Lparm=10&wangye=1';
//var path =  '/Default.aspx?Attion=1&Lid=10';
var path =  '/Default.aspx?Attion=2&Lid=10&Lkind=0&Lpm=10&fuck=1';
var parameters = "";
var options = {
    host: 'venpoo.com',
    path: path,
    method: 'GET',
    port: 9090,
    headers: {"content-type": "application/x-www-form-urlencoded",
        "content-length": parameters.length}
};
var request = http.request(options, function (response) {
    response.setEncoding('UTF-8');
    response.on('data', function (data) {
        console.log(data);
    });
});
// Write the parameters to the HTTP POST.
request.write(parameters);
//Close the HTTP connection.
request.end();