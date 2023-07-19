function studentReportFlow() {
    var selectedOption = document.getElementById("studentSelect").value;
    var enrolledEvents = "Unknown"; // Sets variables to default "Unknown" value
    var age = "Unknown";
    var gender = "Unknown";

    if (selectedOption == "Ava Sullivan") { // Checks for the student being selected
        enrolledEvents = "100m Sprint, 200m Sprint, Relays"; // Sets variables to the student's data
        age = "16";
        gender = "Female"
    } else if (selectedOption == "Ethan Anderson") {
        enrolledEvents = "Relays, Shotput";
        age = "17";
        gender = "Male"
    }
    
    // Displays the student's data
    var studentData = document.getElementById("studentReport");
    studentData.innerHTML = "Name: " + selectedOption + "<br>Age: " + age + "<br>Enrolled Events: " + enrolledEvents + "<br>Gender: " + gender + "<br>";
}