import { useState, useEffect } from "react";
import api from "../../api/axios";
import "../../style/updateModal.css";
import LocationInput from "../LocationAutoComplete";

const UpdatePatientModal = ({ isOpen, onClose, patient, onUpdateSuccess }) => {

    const [formData, setFormData] = useState({
        patientId: "",
        fullName: "",
        age: "",
        gender: "",
        phone: "",
        email: "",
        address: {
            address: "",
            lat: "",
            lng: "",
            placeId: ""
        },
        bloodGroup: "",
        medicalHistory: "",
    });

    // Prefill data when modal opens
    useEffect(() => {
        if (patient) {
            setFormData(patient);
        }
    }, [patient]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await api.patch(`/patients/${patient._id}`, formData);
            alert("Patient updated successfully ✅");

            onUpdateSuccess();  // refresh parent list
            onClose();          // close modal
        } catch (error) {
            console.error("Update error:", error);
            alert("Failed to update patient ❌");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2>Update Patient</h2>

                <form onSubmit={handleUpdate} className="modal-form">
                    <div className="form-grid">

                        <input
                            name="patientId"
                            placeholder="Patient ID"
                            value={formData.patientId}
                            onChange={handleChange}
                            required
                        />

                        <input
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />

                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>

                        <input
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        <input
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <select
                            name="bloodGroup"
                            value={formData.bloodGroup}
                            onChange={handleChange}
                        >
                            <option value="">Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>

                        <LocationInput
                        value={formData.address}
                        onChange={(location) =>
                            setFormData({ ...formData, address: location })
                        }
                    />

                        <textarea
                            className="full-width"
                            name="medicalHistory"
                            placeholder="Medical History"
                            value={formData.medicalHistory}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="modal-buttons">
                        <button type="submit" className="update-btn">Update</button>
                        <button type="button" className="delete-btn" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePatientModal;