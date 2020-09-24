const express = require('express')
const path = require('path')

const router = express.Router();

const help = require('../models/help.js')
//route to submit page
router.get("/submit", function(req, res) {
    res.render('submit')
  });
//route to the home page
router.get('/', function(req, res) {
    help.all(function(data) {
        let hbsObj = {
            help: data
        };
        console.log(hbsObj);
        res.render('index', hbsObj)
    });
});



//allowing orginizations to add ther information to the data base
router.post('api/organization', function(req, res) {
    help.create([
        'name',
        'address',
        'city',
        'state',
        'zip',
        'phonenumber',
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
        req.body.phonenumber,
        req.body.website,
        req.body.food,
        req.body.health_care,
        req.body.daily_care,
        req.body.shelter,
        false
    ], function(results) {
        console.log(results)
     //giving an id to each company who choses to added ther company information
        res.json({id: res.insertID})
    }); 
    console.log(req.body, 'req.body')
})
//allowing the usert he ability to update there information
router.put('/api/organization/:id', function (req, res) {
    let condition = true
    console.log(condition, 'CONDITION');
    console.log(req.params, 'REQ PARAMS');
    help.update({
       condition: true
    }, condition, function(result) {
        if(result.changedRows === 0) {
            return res.status(400).end();
        }else {
            res.status(200).end();
        };
    });
});

module.exports = router;