function studentReportFlow() {
    var selectedOption = document.getElementById("studentSelect").value;
    var enrolledEvents = "Unknown";
    var age = "Unknown";
    var gender = "Unknown";

    if (selectedOption == "Ava Sullivan") {
        enrolledEvents = "100m Sprint, 200m Sprint, Relays";
        age = "16";
        gender = "Female";
    } else if (selectedOption == "Ethan Anderson") {
        enrolledEvents = "Relays, Shotput";
        age = "17";
        gender = "Male";
    } else if (selectedOption == "James Smith") {
        enrolledEvents = "100m Sprint, Javelin, High Jump, Long Jump, Triple Jump";
        age = "15";
        gender = "Male";
    } else if (selectedOption == "Olivia Jones") {
        enrolledEvents = "800m Sprint, 1500m Sprint, Relays";
        age = "16";
        gender = "Female";
    } else if (selectedOption == "William Brown") {
        enrolledEvents = "400m Sprint, 800m Sprint, 1500m Sprint, Relays";
        age = "15";
        gender = "Male";
    }
    
    var studentData = document.getElementById("studentReport");
    studentData.innerHTML = "Name: " + selectedOption + "<br>Age: " + age + "<br>Enrolled Events: " + enrolledEvents + "<br>Gender: " + gender + "<br>";
}