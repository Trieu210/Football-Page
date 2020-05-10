var appointments =JSON.parse(window.localStorage.getItem("appointments"));
document.getElementsByClassName('.apptDate').innerHTML = appointments[0].apptDate;