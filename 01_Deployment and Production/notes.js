//Express is the technology used to send request to the server from the client(Browser).
// It is also responsible for sending the response back from the server to the client(Browser)


//In the server side there must be a mechanism that listens the request from the client
//This listen mechanism is done by express
//It can be at more than one paths/routes
//Home Route is '/'
//Login Setup is '/login'


//There can be many types of request :-
// The basic one is 'get' request which we do in url through Browser





//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



//1) Making an empty node application :-

//==> Go to terminal
//==> Use 'npm init' which means to initialize an app using npm
//==> init is an utility for creating the package.json file





//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */

// 2) Creating scripts :-

//a) Normally to run a js file using node JS
// ==> First go to the directory where the JS file is present
// ==> Type 'ls' command and see if that file can be seen or not
// ==> If that file can be seen, type 'node fileName' to run it


//b) Running our JS file using package.json
//==> Make script commands in the package.json file
//==> These scripts help while running the files on our server
//==> In the package.json file, inside the "scrips" key, give your key-value pairs (key = command, value = actual command which will be implemented behind the scenes )

/* e.g :-
Inside package.json :-
{
  "scripts" : {
                "start" : "node index.js",
                ...,
                ...,
              }
}
*/

//Now type "npm run" + "script command" to run the actual command behind the scenes
//e.g :- npm run start === node index.js




//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */

//3) EXPRESS JS :- Fast minimilistic Web-framework for Node JS


//a) Installation :-
// ==> Type "npm install express"




//b) Importing Express
// i) ES Module JS :- (recommended)
// ==> import express from "express"

// ii) Common Module JS
// ==> const express = require("express");

// Note :- To use ES6 syntax of import, in the package.json file add the key-value pair "type": "module"




// c) Use express() factory function and store all its functionalities in a variable called 'app'
const app = express();

//Using this app we can use a variety of methods as its properties




// d) Create a virtual port (around more than 5000 freely available)
// ==> This is where our server will listen
const port = 4000;




// e) Make equests :-
// ==> use .get(a,b)
// ==> a = "route/path" (Always use '/' before the path name else we will not get our desired webpage)
// ==> b = callback function containing first parameter as request, second parameter as response

app.get("/", (req, res) => {
  // ...
})

//using app since we put all the functionalities of express in a variable called 'app'




// f) Sending response :-
// ==> Inside the callback, if we want to send a response as a string or any HTML tag like h1,p,etc (as a string)
// ==> Use res.send("Hello");
// ==> Use res.send("<h1> Hello Everyone </h1>")
// --> res is the second parameter name of the callback function




// g) Listening for the routes/paths
// ==> Use .listen(a,b) method from express
// ==> a = at which port no. (which we defined earlier)
// ==> b = callback function to send confirmation that our server is listening now

app.listen(port, () => {
  console.log("Listening on port ${port}");
})

//using app since we put all the functionalities of express in a variable called 'app'




// h) Starting the server :-
// ==> run the script for executing the JS file
// ==> Now the control will be taken by the console as our server will constantly listen
// ==> Go to Browser and type localhost:port_no , to get the response on the home route "/"





//***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


//4) Hot Reloading :-

//Whenever we change the source files, we need to process the code and then start the server again to get the updated code
//Hence on any changes in the source files, we need to stop the existing server and then again start the server

//Hence we use special node packages like 'nodemon' which stops and starts the server by itself when we save the file




//***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 5) Deploying production grade app

// ==> We cannot publish the whole source code in github, as sensitive info like passwords, URLS, Database username-password, will also be publically seen in the github repo

// ==> Port no. is another issue, it might be free o our system but it might not be free on someone else's app



//Hence to solve the above errors, install the package called 'dotenv' using 'npm i dotenv'

//Steps :-
// a) Install the 'dotenv' package
// b) Now create a file named '.env'
// c) Put all the sensitive data inside variables in the .env file
// d) All the variables should be named in CAPS (good practice)
// e) No need to use var, let while declaring variables
// e.g :- PORT = 4000


// f) In our main server file (main.js or index.js)
// ==> add 'require("dotenv").config()' or in ES6 use "import 'dotenv/config'" at the top of the file
// Note :- To use ES6 syntax of import, in the package.json file add the key-value pair "type": "module"

// ==> Wherever we want to use any of our environment variables we will use "process.env.variable_name"
// e.g:- while listening using .listen()

app.listen(process.env.PORT, () => {
  // ...
})

// But process.env.var_name will only work if we have imported 'dotenv/config' from above



//Why are we using environmental variables?
// ==> These env variables along wth its file .env are never pushed in the github repository
// ==> Hence, it is .env file is mentioned in '.gitignore' file
// ==> Because while deploying in any online cloud services like heroku, digital ocean, render, etc
// ==> We have to specify these environment variables manually where they are kept safe.
// ==> Behind the scenes, these websites tend to overwrite only the PORT variable, with their own free port, rest all the env variables are kept entact




//***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



//6) Deploying in online cloud services :-
// --> First push your code in the github repo
// --> Go to render, netlify, any online cloud service that is free, then create account
// --> Setup your app's github repo because any changes we make in the repo will automatically be triggered in the cloud
// --> Set the environment variables manually and then deploy to get the url where our server will be active
// --> Sometimes go to settings and change the default scripts in the website to our required scripts / starting commands







//***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 7) Sending JSON response with the help of express

// ==> Same like we were sending string or HTML tag as a response
// ==> Instead of using .send(), we will be using .json() inside the callback function of get() method

//e.g :-

const githubData = {
  "login": "ItsMe1104",
  "id": 78407494,
  "node_id": "MDQ6VXNlcjc4NDA3NDk0",
  "gravatar_id": ""
}

app.get("/github", (req, res) => {
  res.json(githubData);
})




//*************************************************************************************************************************************************************************************************************************** */