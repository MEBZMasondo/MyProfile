
function loadHeader() {
    fetch("pages/header.html")
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            document.getElementById("header").innerHTML = data;
        })
        .catch(function (error) {
            console.error("Header failed to load", error);
        });
}
