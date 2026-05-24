import React, { useState } from 'react';

import axios from 'axios';

function AddPatient() {

    const [formData, setFormData] = useState({

        name: '',
        age: '',
        disease: '',
        tokenNumber: '',
        doctor: '',
        appointmentDate: '',
        appointmentTime: ''

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await axios.post(
            'http://localhost:5000/api/patients/add',
            formData
        );

        alert('Appointment Booked Successfully ✨');
    };

    return (

        <form onSubmit={handleSubmit}>

            <h2 className="form-title">
                Book Appointment
            </h2>

            <div className="input-group">

                <input
                    type="text"
                    name="name"
                    placeholder="Patient Name"
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="disease"
                    placeholder="Disease"
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="tokenNumber"
                    placeholder="Token Number"
                    onChange={handleChange}
                />

                {/* Doctor Selection */}

                <select
                    name="doctor"
                    onChange={handleChange}
                    className="select-box"
                >

                    <option value="">
                        Select Doctor
                    </option>

                    <option value="Dr. Sharma">
                        Dr. Sharma - Cardiologist
                    </option>

                    <option value="Dr. Mehta">
                        Dr. Mehta - Neurologist
                    </option>

                    <option value="Dr. Verma">
                        Dr. Verma - Orthopedic
                    </option>

                    <option value="Dr. Khan">
                        Dr. Khan - Dentist
                    </option>

                </select>

                {/* Date */}

                <input
                    type="date"
                    name="appointmentDate"
                    onChange={handleChange}
                />

                {/* Time */}

                <select
                    name="appointmentTime"
                    onChange={handleChange}
                    className="select-box"
                >

                    <option value="">
                        Select Time Slot
                    </option>

                    <option value="10:00 AM">
                        10:00 AM
                    </option>

                    <option value="11:00 AM">
                        11:00 AM
                    </option>

                    <option value="12:00 PM">
                        12:00 PM
                    </option>

                    <option value="2:00 PM">
                        2:00 PM
                    </option>

                    <option value="4:00 PM">
                        4:00 PM
                    </option>

                </select>

            </div>

            <button className="submit-btn" type="submit">

                Confirm Appointment ✨

            </button>

        </form>
    );
}

export default AddPatient;