/**
 * Created by Avinash Theppala on 4/27/2017.
 */
var express = require("express");
var app = express();




app.use(express.static('public'));

app.listen(8080, function () {
    console.log('express is on 8080')
});