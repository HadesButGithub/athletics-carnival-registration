function studentReportFlow() {
    var selectedOption = document.getElementById("studentSelect").value;
    var enrolledEvents = "Unknown";
    var age = "Unknown";
    var gender = "Unknown";

    if (selectedOption == "Ava Sullivan") {
        enrolledEvents = "100m Sprint, 200m Sprint, Relays";
        age = "16";
        gender = "Female"
    } else if (selectedOption == "Ethan Anderson") {
        enrolledEvents = "Relays, Shotput";
        age = "17";
        gender = "Male"
    }
    var studentData = document.getElementById("studentReport");
    studentData.innerHTML = "Name: " + selectedOption + "<br>Age: " + age + "<br>Enrolled Events: " + enrolledEvents + "<br>Gender: " + gender + "<br>";
}