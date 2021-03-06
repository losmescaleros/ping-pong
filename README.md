Mitchell Neville

[CSC 591 - Ping Pong Lab](http://github.com/losmescaleros/ping-pong 
"GitHub Project")

# Ping Pong Lab

## Introduction

The goal of this application is to explore bi-directional communication using
Socket.IO and Node.js.  

## Dependencies

This application requires [Node.js][node], [Socket.IO][socket io],
[Express.js][express], [Jade][jade], [jQuery][jquery], and [Bootstrap]
[Bootstrap]. While the Node.js portions of these dependencies are addressed in
the ```packages.json``` file, Bootstrap and jQuery dependencies are expected
to be in ```public``` folder. ```jquery.min.js```, ```bootstrap.min.js```, 
```bootstrap-theme.min.js``` are expected to be in ```public/javascripts/```. 
CSS dependencies, including ```bootstrap.min.css``` and 
```bootstrap-theme.min.css``` are expected to be in ```public/stylesheets```.

## Source File Structure

The file structure for this project was created using the Express.js web
framework. The code for the server is located in ```app.js```, while 
client-side JavaScript code is located in ```client.socket.io.js```.Jade 
template files for the HTML front-end are located in the ```views``` folder. 
JavaScript front-end files are located in ```public/javascripts```, while CSS 
files are located in ```public/views```. The ```routes``` is largely unused 
by this project, but it describes how HTTP routing is done. 

## Running the Application

In order to run the program, you should have a Node.js environment set up. 
Creating this environment is beyond the scope of this README. After creating
the environment, you may use 

```$ npm install```

to install the Node.js dependencies. After this, you may run the program 
using the ```app.js``` entry point:

```$ node app.js```  

The server will listen on the localhost's port 3000, so you can navigate to
```http://localhost:3000``` to connect.

## Interpreting the Results

Once the server is running, it will emit a PING message to the client at 
random intervals between 5 and 10 seconds. The client will respond with a
PONG, which the server will output to the console when it receives it. 

On the client side, the user may click a button to send a PING message to the
server, to which the server will respond with a PONG. Once the client receives
the response, it will print it to the web console. 


[bootstrap]: http://getbootstrap.com	"Bootstrap"
[jquery]: http://jquery.com	 	"jQuery"
[node]: http://nodejs.org		"Node.js"
[express]: http://expressjs.com		"Express.js"
[jade]: http://jade-lang.com		"Jade"
[socket io]: http://socket.io		"Socket.io"
