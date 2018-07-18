"use strict";

const $ = require('jquery');

function sayHello(){
    console.log("hellooooo");
}

sayHello();

$(document).ready(function(){
    $('body').append('<h1>Is this working?</h1>')
});

const message = require('./say-hello.js');
console.log(message);
