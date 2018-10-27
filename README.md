# LIRI (a CLI Search App)

### Check out Video Demonstration:
[![LIRI BOT!](https://i.ytimg.com/vi/WLQYbDtiivM/2.jpg?time=1540611149489)](https://youtu.be/WLQYbDtiivM)

## Project Brief

A CLI Application name LIRI which takes in user arguments for commands and parameter and display results from APIs

## Project Walkthrough

### Instruction to Run This App in CLI

* You will need to run the command `npm install` in order to install all dependent Node Packages needed for this app to run
* Next, create a file named `.env`, add the following to it, replacing the values with your API keys (no quotes) once you have them:

    ```js
    # Spotify API keys

    SPOTIFY_ID=your-spotify-id
    SPOTIFY_SECRET=your-spotify-secret

    ```
* The app is now ready for you to use with below instructions. 

### MVP:

* User can type the below commands in CLI along with input parameters:
   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

    #### What Each Command Should Do

    1. `node liri.js concert-this <artist/band name here>`

        * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

            * Name of the venue

            * Venue location

            * Date of the Event (use moment to format this as "MM/DD/YYYY")

    2. `node liri.js spotify-this-song '<song name here>'`

        * This will show the following information about the song in your terminal/bash window

            * Artist(s)

            * The song's name

            * A preview link of the song from Spotify

            * The album that the song is from

        * `node liri.js spotify-this-song` If no song is provided then your program will default to "The Sign" by Ace of Base.

    3. `node liri.js movie-this '<movie name here>'`

        * This will output the following information to your terminal/bash window:

            ```
            * Title of the movie.
            * Year the movie came out.
            * IMDB Rating of the movie.
            * Rotten Tomatoes Rating of the movie.
            * Country where the movie was produced.
            * Language of the movie.
            * Plot of the movie.
            * Actors in the movie.
            ```

        * `node liri.js movie-this` If the user doesn't type a movie in, the program will output data for the movie 'Mr Nobody'.

    4. `node liri.js do-what-it-says`

        * LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

        * It should run `spotify-this-song` for "Cowboys from Hell" as follows the text in `random.txt`

## Technologies Used: 
  
  * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)          
  * [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)           
  * [OMDb API](http://www.omdbapi.com/)           
  * [Moment](https://www.npmjs.com/package/moment)           
  * [Request](https://www.npmjs.com/package/request)           
  * [DotEnv](https://www.npmjs.com/package/dotenv)







