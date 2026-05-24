import React, { useEffect, useState } from 'react';

import axios from 'axios';

function PatientList() {

    const [patients, setPatients] = useState([]);

    useEffect(() => {

        fetchPatients();

    }, []);

    const fetchPatients = async () => {

        const res = await axios.get(
            'http://localhost:5000/api/patients'
        );

        setPatients(res.data);
    };

    return (

        <div>

            <h2>Patient Queue</h2>

            {

                patients.map((p) => (

                    <div className="patient-card" key={p._id}>

                        <div>

                            <h3>{p.name}</h3>

                            <p>Age: {p.age}</p>

                            <p>Disease: {p.disease}</p>

                        </div>

                        <div className="token">

                            Token #{p.tokenNumber}

                        </div>

                    </div>
                ))
            }

        </div>
    );
}

export default PatientList;