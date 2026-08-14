const Appointment = require("../models/appointment.model");

// const generatePrescriptionHTML = require("../templates/prescription.template");
const generatePrescriptionHTML = require("../templates/prescription/prescription.template");
const { generatePDF } = require("./pdf.service");

const generatePrescription = async (appointmentId) => {
    // Fetch appointment with patient details
    const appointment = await Appointment.findById(appointmentId)
        .populate({
            path: "patientId",
            select: "patientId fullName age gender phone email address bloodGroup medicalHistory",
        });

    if (!appointment) {
        throw new Error("Appointment not found.");
    }

    // Build a clean prescription object
    // const prescriptionData = {
        // clinic: {
        //     name: "Dr. Khan's HomoeoCARE",
        //     tagline: "Homoeopathy For Health",
        //     doctor: appointment.doctorName || "Doctor",
        // },

    //     appointment: {
    //         id: appointment._id,
    //         tokenNumber: appointment.tokenNumber,
    //         date: appointment.appointmentDate,
    //         notes: appointment.notes || "",
    //     },

    // patient: {
    //     patientId: appointment.patientId.patientId,
    //     fullName: appointment.patientId.fullName,
    //     age: appointment.patientId.age,
    //     gender: appointment.patientId.gender,
    //     phone: appointment.patientId.phone,
    //     email: appointment.patientId.email,
    //     bloodGroup: appointment.patientId.bloodGroup,
    //     address: appointment.patientId.address,
    // },

    //     vitals: appointment.vitals,

    //     medicines: appointment.medicinesPrescribed || [],
    // };

    const prescriptionData = {

        clinic: {
            name: "Dr. Khan's HomoeoCARE",
            tagline: "Homoeopathy For Health",
        },

        patient: {
            patientId: appointment.patientId.patientId,
            fullName: appointment.patientId.fullName,
            age: appointment.patientId.age,
            gender: appointment.patientId.gender,
            phone: appointment.patientId.phone,
            email: appointment.patientId.email,
            bloodGroup: appointment.patientId.bloodGroup,
            address: appointment.patientId.address,
        },

        appointment: {
            date: appointment.appointmentDate,
            tokenNumber: appointment.tokenNumber,

            chiefComplaints: appointment.chiefComplaints,

            advice: appointment.advice,

            investigations: appointment.investigations,

            followUpDate: appointment.followUpDate,

            allergies: appointment.allergies,
        },

        vitals: appointment.vitals,

        medicines: appointment.medicinesPrescribed,

    };

    console.log("Prescription Data Ready");

    console.log(JSON.stringify(prescriptionData, null, 2));

    const html = generatePrescriptionHTML(prescriptionData);

    const pdfBuffer = await generatePDF(html);

    return pdfBuffer;


    // return Buffer.from("Prescription Generation Started");
};

module.exports = {
    generatePrescription,
};