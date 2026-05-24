import React from 'react';

import './App.css';

import AddPatient from './components/AddPatient';
import PatientList from './components/PatientList';

function App() {

  return (

    <div className="container">

      {/* HERO SECTION */}

      <div className="hero">

        <h1>🏥 MediNova Hospital</h1>

        <p>
          Smart Healthcare • Queue Management • Emergency Support • Modern Care
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Book Appointment
          </button>

          <button className="secondary-btn">
            Emergency Support
          </button>

        </div>

      </div>

      {/* STATS SECTION */}

      <div className="stats">

        <div className="stat-card">

          <h2>500+</h2>

          <p>Patients Treated Daily</p>

        </div>

        <div className="stat-card">

          <h2>50+</h2>

          <p>Experienced Doctors</p>

        </div>

        <div className="stat-card">

          <h2>24/7</h2>

          <p>Emergency Services</p>

        </div>

        <div className="stat-card">

          <h2>100%</h2>

          <p>Digital Queue System</p>

        </div>

      </div>

      {/* IMAGE SECTION */}

      <div
        style={{
          marginBottom: '40px',
          borderRadius: '30px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}
      >

        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop"
          alt="hospital"
          style={{
            width: '100%',
            height: '450px',
            objectFit: 'cover'
          }}
        />

      </div>

      {/* ADD PATIENT FORM */}

      <AddPatient />

      {/* PATIENT LIST */}

      <PatientList />

      {/* FEATURES */}

      <div className="features">

        <div className="feature-card">

          <h3>🩺 Smart Queue</h3>

          <p>
            Real-time digital queue system for faster patient management.
          </p>

        </div>

        <div className="feature-card">

          <h3>💊 Emergency Care</h3>

          <p>
            24x7 ambulance and emergency support with instant response.
          </p>

        </div>

        <div className="feature-card">

          <h3>📱 Online Booking</h3>

          <p>
            Book appointments digitally without waiting in long queues.
          </p>

        </div>

        <div className="feature-card">

          <h3>🧠 AI Reports</h3>

          <p>
            Smart patient data management and quick medical history access.
          </p>

        </div>

      </div>

      {/* DOCTOR SECTION */}

      <div
        style={{
          marginTop: '60px'
        }}
      >

        <h1
          style={{
            fontSize: '40px',
            marginBottom: '30px',
            color: '#4f46e5'
          }}
        >
          Meet Our Specialists
        </h1>

        <div className="features">

          <div className="feature-card">

            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop"
              alt=""
              style={{
                width: '100%',
                borderRadius: '20px',
                marginBottom: '20px',
                height: '250px',
                objectFit: 'cover'
              }}
            />

            <h3>Dr. Aryan Mehta</h3>

            <p>Senior Cardiologist</p>

          </div>

          <div className="feature-card">

            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
              alt=""
              style={{
                width: '100%',
                borderRadius: '20px',
                marginBottom: '20px',
                height: '250px',
                objectFit: 'cover'
              }}
            />

            <h3>Dr. Priya Sharma</h3>

            <p>Neurology Specialist</p>

          </div>

          <div className="feature-card">

            <img
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop"
              alt=""
              style={{
                width: '100%',
                borderRadius: '20px',
                marginBottom: '20px',
                height: '250px',
                objectFit: 'cover'
              }}
            />

            <h3>Dr. Rahul Verma</h3>

            <p>Orthopedic Surgeon</p>

          </div>

        </div>

      </div>

      {/* CONTACT SECTION */}

      <div className="contact">

        <h2>Contact Us</h2>

        <p>
          Need emergency help or appointment booking? Reach us instantly.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}
        >

          <button>

            📞 +91 9876543210

          </button>

          <button>

            ✉️ support@medinova.com

          </button>

          <button>

            📍 Mumbai, India

          </button>

        </div>

      </div>

      {/* FOOTER */}

      <div
        style={{
          textAlign: 'center',
          marginTop: '40px',
          color: '#6b7280',
          paddingBottom: '30px'
        }}
      >

        © 2026 MediNova Hospital Management System • Built with MERN Stack

      </div>

    </div>

  );
}

export default App;