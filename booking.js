//Booking Page Behaviours

//DECLARATIONS
var selectedDate, selectedTime, selectedDoctor, selectedName;

if(window.localStorage.getItem("appointments") === null) {                           //only create new appointments array if one does not already exist in cross page local storage
    var appointments = [];
}
else {
    var appointments = JSON.parse(window.localStorage.getItem("appointments"));     //if one exists, use it instead
}


//INITIALISE
//Retrieve patient object from localstorage.
var patient = JSON.parse(window.localStorage.getItem("Patient"));
//Custom Greeting //document.getElementById("patGreeting").innerHTML = "This appointment will be made for ";
//Prefill Name //document.getElementById("input-name").innerHTML = patient.fname ;


//CONSTRUCTOR FOR AN APPOINTMENT
function Appointment(inputDate, inputTime, inputDoctor,patient) {
    this.apptDate = inputDate;
    this.time = inputTime;
    this.doctor = inputDoctor;
    this.pat = patient;
}


//ONLICK FOR BOOK BUTTON
function book() {
    selectedDate = document.getElementById("date").value;
    selectedTime = document.getElementById("appt").value;
    selectedDoctor = document.getElementById("docs").value;
    selectedName = document.getElementById("input-name").value;

    if((selectedTime.charAt(3) != '3' || selectedTime.charAt(3) != '0') && selectedTime.charAt(4) != '0') {
        alert("Sorry, times must be in half hour intervals.")
        return;
    }
    if (appointments.length != null) {
        for(i = 0; i < appointments.length; i++) {
            if(appointments[i].doc == selectedDoctor && appointments[i].time == selectedTime && appointments[i].apptDate == selectedDate) {
                alert("Sorry, this time slot is already filled")
                return
            }
        }
    }
    
    appointments.push(new Appointment(selectedDate, selectedTime, selectedDoctor,selectedName));
    alert("Your appointment has been booked.");
    console.log(appointments);
}

//ONLICK FOR LOGOUT BUTTON
function logOut() {
    localStorage.setItem("appointments", JSON.stringify(appointments));     //set the current appointments, may need to delete current entry first, TEST THIS
    window.open('../root/index.html', '_self');
}