// require("dotenv").config();

// --------Connecting with keys.js
var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

// --------Importing request from npm
var request = require("request");

// --------Importing moment from npm
var moment = require('moment')


// --------CLI input
var action = process.argv[2];
var artist = process.argv[3];

var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"


// --------Bands in Town Artist Events API 

if (action === "concert-this"){
    request(queryUrl, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var content = JSON.parse(body);
            content.forEach(element => {
                console.log("===================================================================");
                console.log("Name of the venue: " + element.venue.name + "\nVenue location: " + element.venue.city + ", " + element.venue.country 
                + "\nDate of Event: " + moment(element.datetime).format("MM/DD/YYYY"));
                console.log("===================================================================");
            });       
          }
    });
}
