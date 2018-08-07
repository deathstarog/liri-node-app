require("dotenv").config();
var keys = require('./keys.js')

var spotify = new Spotify(keys.spotify);
var request = require('request')
var Twitter = require('twitter')
var client = new Twitter(keys.twitter);
var fs = reqire('fs')

var arg = process.argv[2]
var search = process.argv[3]

switch(arg) {
    case 'tweets':
        twitter()
        break;
    case 'movie':
        imdb()
        break;
    case 'spotify':
        spotify()
        break;
    default:
        console.log("tweets, movie, spotify")
}

function twitter() {}
function imdb() {}
function spotify() {}

