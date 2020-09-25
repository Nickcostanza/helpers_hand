const firstQuestion = document.getElementById("first-question");
const foodResults = document.getElementById("food-results");
const shelterResults = document.getElementById("shelter-results");
const healthResults = document.getElementById("health-results");
const dailyResults = document.getElementById("daily-results");

$("#food").click(function () {
    firstQuestion.style.display = "none";
    foodResults.style.display = "";
});

$("#shelter").click(function () {
    firstQuestion.style.display = "none";
    shelterResults.style.display = "";
});

$("#health").click(function () {
    firstQuestion.style.display = "none";
    healthResults.style.display = "";
});

$('#daily').click(function () {
    firstQuestion.style.display = "none";
    dailyResults.style.display = "";

    $.ajax("/api/results", {
        type: "GET",
        
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

    $.ajax("/api/organizations", {
        type: "POST",
        data: newOrganization
    }).then(
        function () {
            console.log("created new organization");
            location.reload();
        }
    );
});