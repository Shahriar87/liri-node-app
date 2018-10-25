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

var nodeArgs = process.argv;
var item = "";

// ---------Loop through all the words in the node argument
// ---------And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {
  if (i > 3 && i < nodeArgs.length) {
    item = item + "+" + nodeArgs[i];
  }
  else {
    item += nodeArgs[i];
  }
}

var queryUrl = "https://rest.bandsintown.com/artists/" + item + "/events?app_id=codingbootcamp"
var queryUrl2 = "http://www.omdbapi.com/?t=" + item + "&y=&plot=short&apikey=trilogy";

// --------Bands in Town Artist Events API 

if (action === "concert-this") {
    request(queryUrl, function (error, response, body) {
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

// --------OMDB API 

else if (action === "movie-this") {
    request(queryUrl2, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var content = JSON.parse(body);
            var ratingsIndex = content.Ratings.findIndex(x => x.Source =="Rotten Tomatoes");
            var rottenTomato = "";

            if (ratingsIndex > -1){
                rottenTomato = content.Ratings[ratingsIndex].Value;
            } else {
                rottenTomato = "N/A"
            }

            console.log("===================================================================");
            console.log(content.Title
                + "\n\nYear of release: " + content.Year 
                + "\nIMDB Rating: " + content.imdbRating
                + "\nRotten Tomatoes Rating: " + rottenTomato
                + "\nCountry: " + content.Country
                + "\nLanguage: " + content.Language
                + "\nPlot: " + content.Plot
                + "\nActors: " + content.Actors);
            console.log("===================================================================");
        }
    });
};
