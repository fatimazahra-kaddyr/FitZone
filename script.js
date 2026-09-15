

let form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let plan = document.getElementById("plan").value;

    document.getElementById("message").textContent =
        "Thank you " + name + "! You chose the " + plan + " plan.";

});
function choosePlan(plan) {

    document.getElementById("plan").value = plan;

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });

}


