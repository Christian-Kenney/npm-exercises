"use strict";

const $ = require('jquery');

function sayHello(){
    console.log("hello");
}

sayHello();

$(document).ready(function(){
    $('body').append('<h1>Is this working?</h1>')
});

