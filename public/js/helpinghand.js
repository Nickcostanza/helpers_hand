
const router = require('../controller/handcontroller.js');
const connection = require('../config/connection.js');

// Food Need question tree
$("#food").click(function() {
    router.get('/', function(req, res) {
        connection.query('SELECT food FROM organization', function(err, data) {
            if (err) throw err;
            res.render('index', {food: data} ); 
        })
    })
    console.log('food info coming soon')
    
});


// Shelter Need question tree
$("#shelter").click(function() {
    firstQuestion.style.display = "none";
    shelterService.style.display = "";
    console.log('shelter info coming soon')
});


// Health Need question tree
$("#health").click(function() {
    firstQuestion.style.display = "none";
    healthService.style.display = "";
    console.log('shelter info coming soon')
});

