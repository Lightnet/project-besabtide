/*
    Project Name: bes-threejs
    Link:https://github.com/Lightnet/bes-threejs
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/

var version = "1.0.0";
var fs = require('fs');
var configpath = __dirname + '/app/config.json';
//console.log(configpath);
var config;
var stat = fs.statSync(configpath);
//console.log(stat);
if (stat.size != 0) {
    console.log("config found!");
    config = require(configpath);
    //console.log('config file exists');
}
else
{
    console.log("config not found!");
    config = {
        blocalhost: true,
        host: "127.0.0.1",
		port:80,
        database:"",
		bdatabase:true,
        blocaldatabase:true,
		token:"",
		btoken:true,
		tokentype:""
    };
    //console.log("creating config file.");
    fs.writeFile(configpath, JSON.stringify(config, null, 4), function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("JSON saved to " + configpath);
        }
    });
}

//var plugin = require(__dirname + '/app/lib/plugin');
//var plugin = require(__dirname+'/app/libs/plugin');
//console.log(config);
var http = require('http');
import express from 'express';
//var favicon = require('serve-favicon');
var app = module.exports.app = exports.app = express();
var serverapp = http.Server(app);
//var io = require('socket.io')(http);
import path from 'path';

//file for index.html
app.use("/", express.static('./public'));
//app.use(favicon(__dirname + '/public/favicon.ico'));
var favicon = new Buffer('AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEQAAAAAREAEAAAAAAAAQAQAAARAAABAAAAAREQAAAAAAAREREAAAAAARERERAAAAAREREREQAAABERERERAAAAEREREREAAAAREQAREQAAAAEQAAEQAAAQAAAAAAABABAAAAAAAAEAERAAAAABEQAAAAAAAAAAD//wAAj/EAAL/9AAC+fQAA/D8AAPgfAADwDwAA4AcAAOAHAADgBwAA4YcAAPPPAAC//QAAv/0AAI/xAAD//wAA', 'base64');
app.get("/favicon.ico", function(req, res) {
  console.log("icon?");
  res.statusCode = 200;
  res.setHeader('Content-Length', favicon.length);
  res.setHeader('Content-Type', 'image/x-icon');
  //res.setHeader("Cache-Control", "public, max-age=2592000");                // expiers after a month
  res.setHeader("Cache-Control", "public, max-age=10");                // expiers after a month
  //res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
  res.setHeader("Expires", new Date(Date.now() + 10).toUTCString());
  res.end(favicon);
 });

var io = require('socket.io')(serverapp);

/*
io.use(function(socket, next){
	//console.log(socket.handshake);
  //if (socket.handshake.query && socket.handshake.query.token){
	  //console.log((socket.handshake);
    //jwt.verify(socket.handshake.query.token, 'SECRET_KEY', function(err, decoded) {
      //if(err) return next(new Error('Authentication error'));
      //socket.decoded = decoded;
      //next();
    //});
  //}
  //next(new Error('Authentication error'));
  next();
});
*/

// Create periodical which ends a message to the client every 5 seconds
//var interval = setInterval(function() {
	//client.send('This is a message from the server!  ' + new Date().getTime());
//},5000);

//import {Game} from './app/libs/threejsapi';
//var threejsgame = new Game();
//threejsgame.init();
//console.log("threejs init!");
//socket.io
//io.use(function(packet, next){
    //console.log(packet);
    //if (packet.doge === true) return next();
    //next(new Error('Not a doge error'));
//});

io.on('connection', function (socket) {
	console.log("client connect.");
	//threejsgame.connect(io,socket);
	socket.on('disconnect', function (data) {
		console.log('client disconnect');
		//threejsgame.disconnect(io,socket);
	});
});

var HOSTIP = process.env.IP || "0.0.0.0";
var HOSTPORT = process.env.PORT || 80;
//serverapp.listen(HOSTPORT, HOSTIP, function () {
serverapp.listen(HOSTPORT, function () {
    console.log('listening on:' + HOSTIP + ':' + HOSTPORT);
    console.log(new Date());
});

// Imports the `Gun` library
const Gun = require('gun');
// Imported for side effects, adds level adapters.
require('gun-level');
// Import the two libraries
const levelup = require('levelup');
const leveldown = require('leveldown');
// Create a new level instance which saves
// to the `data/` folder.
//const levelDB = levelup('data', {
    //db: leveldown,
//});
var levelDB;
if(config.blocaldatabase){//'mongodb://<dbuser>:<dbpassword>@ds139438.mlab.com:39438/rpggdb'//'localhost/my-database'
    levelDB = levelup('localhost/my-database',{
        db: require('mongodown')
    });
    console.log("local database");
}else{
    levelDB = levelup(config.database,{
        db: require('mongodown')
    });
    console.log("host database");
}

// create a new gun instance
//https://github.com/amark/gun/issues/139
var gun = new Gun({
    level: levelDB,
    file:false, //disable data.json save file
   //init: true,
});

// Read `thoughts`, saving it to a variable.
//var thoughts = gun.get('thoughts');
// Update the value on `thoughts`.
//thoughts.put({
   //hello: 'world',
//})
//var http = require('http');
//var server = new http.Server(app);
//var gundbfile = fs.readFileSync(__dirname+'/node_modules/gun/gun.js', "utf8");
//var request = http.get("http://127.0.0.1:8080/gun.js", function(response) {
//  response.pipe(file);
//});
serverapp.on('request', gun.wsp.server);
gun.wsp(serverapp);

//var WebSocketServer = require("ws").Server;
//var wss = new WebSocketServer({server: serverapp});
//gun.wsp(wss);

//var WebSocketServer = require("websocket").server;

// create the server
//var wsServer = new WebSocketServer({
    //httpServer: serverapp
//});

//gun.wsp(wsServer);

//wsServer.onmessage = function(msg){
	//gun.on('in', JSON.parse(msg.data));
//};

//server.on('request', gun.wsp.server);
  //Handle incoming gun traffic
  //from clients (that's where the
  //real-time goodness comes from).
//gun.wsp(server);
//console.log("Initialzie Gun Database");
/*
server.listen(8080, function () {
    console.log('listening on:' + '127.0.0.1' + ':' + '8080' + ' GunDB.js');
    console.log(new Date());
});
*/
