

require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");
var inquirer = require('inquirer');
var command = process.argv[2];//command starting as the second process 
var search = process.argv.slice(3).join("+");//uses the input after the command for search parameter with + to fill spaces
var searchLog= "";//global search log variable to take search and remove the + from spaces and display to the user. 

var search = "";

for (var i = 3; i < inputValue.length; i++) {

    if (i > 3 && i < inputValue.length) {
      search = search + "+" + inputValue[i];
      searchlog = searchlog + " " + inputValue;
    } else {
      search += inputValue[i];
  
    }
  }
  
  //create a switch-case statement - if else statements will also work
//the switch-case will direct which function is used
switch (commands) {
    case "concert-this":
      //concertThis();
      console.log ("concert this called");
      break;
  
    case "spotify-this-song":
      //spotifyThisSong();
      console.log("spotify-this-song is called");
      break;
  
    case "movie-this":
     // movieThis();
      console.log("movie-this is called");
      break;
  
    case "do-what-it-says":
     // doWhatItSays();
      console.log("working on do what it says");
      break;
  
    default:
      console.log("Please enter a valid command.")
  }




