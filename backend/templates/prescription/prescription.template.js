const styles = require("./styles");

const Header = require("./components/header");
const PatientInfo = require("./components/patientInfo");
const Vitals = require("./components/vitals");
const Complaints = require("./components/complaints");
const PrescriptionTable = require("./components/prescriptionTable");
const BottomSection = require("./components/bottomSection");
const Footer = require("./components/footer");

const generatePrescriptionHTML = (data) => {

    return `

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300,0..1,-25..200"
    rel="stylesheet"
/>

${styles}

</head>

<body>

<div class="page">

<div class="content">

${Header()}

${PatientInfo(data)}

<div class="main">

<div>

${Vitals(
    data.vitals,
    data.appointment.allergies
)}

</div>

<div>

${Complaints(
    data.appointment.chiefComplaints
)}

${PrescriptionTable(
    data.medicines
)}

</div>

</div>

${BottomSection(
    data.appointment
)}

</div>

${Footer()}

</div>

</body>

</html>

`;

};

module.exports = generatePrescriptionHTML;