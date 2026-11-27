
// Function to display Visakhapatnam location
function showLocation() {

    const map = document.getElementById("school-map");
    const mapContainer = document.getElementById("map-container");

    // Show only Visakhapatnam on Google Maps
    const schoolAddress = "Visakhapatnam, Andhra Pradesh, India";

    const mapURL =
        "https://maps.google.com/maps?q=" +
        encodeURIComponent(schoolAddress) +
        "&z=12&output=embed";

    // Load Google Map
    map.src = mapURL;

    // Display map container
    mapContainer.style.display = "block";
}


// Function to submit contact form
function submitContact(event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value;

    alert("Thank you " + name + "! Your message has been received.");

}
