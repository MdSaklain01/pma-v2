const prescriptionService = require("../services/prescription.service");

const downloadPrescription = async (req, res) => {
    try {

        const { appointmentId } = req.params;

        const pdfBuffer = await prescriptionService.generatePrescription(
            appointmentId
        );

        res.setHeader("Content-Type", "application/pdf");

        res.setHeader(
            "Content-Disposition",
            `attachment; filename=Prescription-${appointmentId}.pdf`
        );

        res.send(pdfBuffer);

    } catch (error) {

        console.error("Prescription Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to generate prescription."
        });

    }
};

module.exports = {
    downloadPrescription,
};