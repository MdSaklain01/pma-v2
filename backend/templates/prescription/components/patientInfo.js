const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

const PatientInfo = (data) => {

    const patient = data.patient;
    const appointment = data.appointment;

    return `

<div class="patient-bar">

    <div class="patient-item">
        <div class="label">Patient Name</div>
        <div class="value">${patient.fullName}</div>
    </div>

    <div class="patient-item">
        <div class="label">Age</div>
        <div class="value">${patient.age} Y</div>
    </div>

    <div class="patient-item">
        <div class="label">Sex</div>
        <div class="value">${patient.gender}</div>
    </div>

    <div class="patient-item">
        <div class="label">Pat. ID</div>
        <div class="value">${patient.patientId}</div>
    </div>

    <div class="patient-item">
        <div class="label">Date</div>
        <div class="value">${formatDate(appointment.date)}</div>
    </div>

</div>

`;

};

module.exports = PatientInfo;