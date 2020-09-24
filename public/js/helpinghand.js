// redo variables and show/hide code
// const firstQuestion = document.getElementById("first-question");
// const foodService = document.getElementById("food-service");
// const shelterService = document.getElementById("shelter-service");
// const healthService = document.getElementById("health-service");
// const chooseGender = document.getElementById("gender");
// const chooseAge = document.getElementById("age");
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
    // firstQuestion.style.display = "none";
    // foodService.style.display = "";
});

// $("#food-bank").click(function() {
//     foodService.style.display = "none";
//     chooseGender.style.display = "";
// });

// $("#served-meal").click(function() {
//     foodService.style.display = "none";
//     chooseGender.style.display = "";
// });

// $("#male").click(function() {
//     chooseGender.style.display = "none";
//     chooseAge.style.display = "";
// });

// $("#female").click(function() {
//     chooseGender.style.display = "none";
//     chooseAge.style.display = "";
// });

// $("#prefer-not").click(function() {
//     chooseGender.style.display = "none";
//     chooseAge.style.display = "";
// });

// $("#family").click(function() {
//     chooseGender.style.display = "none";
//     // display results
// });

// $("#age-submit").click(function() {
//     chooseAge.style.display = "none";
//     // display results
// })

// Shelter Need question tree
$("#shelter").click(function() {
    firstQuestion.style.display = "none";
    shelterService.style.display = "";
});

// $("#immediate").click(function() {
//     shelterService.style.display = "none";
//     chooseGender.style.display = "";
// });

// $("#longer-term").click(function() {
//     shelterService.style.display = "none";
//     chooseGender.style.display = "";
// });

// $("#male").click(function() {
//     chooseGender.style.display = "none";
//     chooseAge.style.display = "";
// });

// $("#female").click(function() {
//     chooseGender.style.display = "none";
//     chooseAge.style.display = "";
// });

// $("#prefer-not").click(function() {
//     chooseGender.style.display = "none";
//     chooseAge.style.display = "";
// });

// $("#family").click(function() {
//     chooseGender.style.display = "none";
//     // display results
// });

// $("#age-submit").click(function() {
//     chooseAge.style.display = "none";
//     // display results
// });

// Health Need question tree
$("#health").click(function() {
    firstQuestion.style.display = "none";
    healthService.style.display = "";
});

// $("#urgent").click(function() {
//     healthService.style.display = "";
//     // display results
// })

// $("#dental").click(function() {
//     healthService.style.display = "none";
//     chooseAge.style.display = "";
// })

// $("#mental").click(function() {
//     healthService.style.display = "none";
//     chooseAge.style.display = "";
// })

// $("#age-submit").click(function() {
//     chooseAge.style.display = "none";
//     // display results
// });

// //Daily Care Need question tree
// $("#daily").click(function() {
//     firstQuestion.style.display = "none";
//     chooseGender.style.display = "";
// });

// $("#male").click(function() {
//     chooseGender.style.display = "none";
//     chooseAge.style.display = "";
// });

// $("#female").click(function() {
//     chooseGender.style.display = "none";
//     chooseAge.style.display = "";
// });

// $("#prefer-not").click(function() {
//     chooseGender.style.display = "none";
//     chooseAge.style.display = "";
// });

// $("#family").click(function() {
//     chooseGender.style.display = "none";
//     // display results
// });

// $("#age-submit").click(function() {
//     chooseAge.style.display = "none";
//     // display results
// });