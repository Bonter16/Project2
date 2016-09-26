/**
 *   @author Bonter, Brian (Bonterb@student.ncmich.edu)
 *   @version 0.0.3
 *   @summary Project 1 d || created: 09.21.2016
 *   @todo
 */

"use strict";
const prompt = require('readline-sync');

let bedRoom;
let bathRoom;
let cars;
let price = 0;
const BASEPRICE = 50000;
const BEDROOMPRICE = 17000;
const BATHPRICE = 12500;
const CARPRICE = 6000;

function main (){
    setBedRoom();
    setBathRoom();
    setCars();
    Total();
}

main();

function setBedRoom(){
    bedRoom = prompt.question('\nhow many bedrooms:');
    let bedroomTotal = bedRoom * BEDROOMPRICE;
    price = price + bedroomTotal
    console.log(bedroomTotal)
}

function setBathRoom(){
    bathRoom = prompt.question ('\nhow many bathrooms')
    let bathroomTotal = bathRoom * BATHPRICE
    price = price + bathroomTotal
    console.log(bathroomTotal)
}

function setCars(){
    cars = prompt.question ('\nhow many cars')
    let carsTotal = cars * CARPRICE
    price = price + carsTotal
    console.log(carsTotal)
}
function Total(){
    let allTotal = BASEPRICE + price
    console.log("the total is: " + allTotal)
}



