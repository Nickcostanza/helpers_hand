const firstQuestion = document.getElementById("first-question");
const foodResults = document.getElementById("food-results");
const shelterResults = document.getElementById("shelter-results");
const healthResults = document.getElementById("health-results");
const dailyResults = document.getElementById("daily-results");

$("#food").click(function () {
    firstQuestion.style.display = "food";
    foodResults.style.display = "";
    console.log('coming soon')
    $.ajax('/api/food/', {
        type: 'GET',
        data: this.data
    }).then(function() {
        console.log('data for food added')        
    })
});

$("#shelter").click(function () {
    firstQuestion.style.display = "none";
    shelterResults.style.display = "";
    $.ajax('/api/shelter/', {
        type: 'GET',
        data: this.data
    }).then(function() {
        console.log('data for shelter added')        
    })
});

$("#health").click(function () {
    firstQuestion.style.display = "none";
    healthResults.style.display = "";
    $.ajax('/api/health_care/', {
        type: 'GET',
        data: this.data
    }).then(function() {
        console.log('data for healthcare added')        
    })
});

$('#daily').click(function () {
    firstQuestion.style.display = "none";
    dailyResults.style.display = "";

    $.ajax('/api/daily_care/', {
        type: 'GET',
        data: this.data
    }).then(function() {
        console.log('data fordailycare added')        
    })
});

$("#new-org").on("click", function (event) {
    event.preventDefault();

    const newOrganization = {
        name: $("#org-name").val().trim(),
        address: $("#address").val().trim(),
        city: $("#inputCity").val().trim(),
        state: $("#inputState").val().trim(),
        zip: $("#inputZip").val().trim(),
        phone_number: $("#phone").val().trim(),
        website: $("#website").val().trim()
    };
    console.log(newOrganization);

    $.ajax("/api/organization", {
        type: "POST",
        data: newOrganization
    }).then(
        function () {
            console.log("created new organization");
            location.reload();
        }
    );
});