const express = require('express')
const path = require('path')

const router = express.Router();

const help = require('../models/help.js')

router.get("/submit", function(req, res) {
    res.render('submit');
});

router.get('/', function(req, res) {
    help.allFood(function(data) {
        let hbsObj = {
            help: data
        };
        console.log(hbsObj);
        res.render('index', hbsObj)
    });
});

router.get('/', function(req, res) {
    help.allHealth(function(data) {
        let hbsObj = {
            help: data
        };
        console.log(hbsObj);
        res.render('index', hbsObj)
    });
});

router.get('/', function(req, res) {
    help.allShelter(function(data) {
        let hbsObj = {
            help: data
        };
        console.log(hbsObj);
        res.render('index', hbsObj)
    });
});

router.get('/', function(req, res) {
    help.allDaily(function(data) {
        let hbsObj = {
            help: data
        };
        console.log(hbsObj);
        res.render('index', hbsObj)
    });
});

router.post('api/organization', function(req, res) {
    help.create([
        'name',
        'address',
        'city',
        'state',
        'zip',
        'phone',
        'website',
        'food',
        'health_care',
        'daily_care',
        'shelter',
        'condition'
    ],
    [
        req.body.name,
        req.body.address,
        req.body.city,
        req.body.state,
        req.body.zip,
        req.body.phone,
        req.body.website,
        req.body.food,
        req.body.health_care,
        req.body.daily_care,
        req.body.shelter,
        false
    ], function(results) {
     //giving an id to each company who choses to added ther company information
        res.json({id: results.insertId})
    }); 
});

module.exports = router;