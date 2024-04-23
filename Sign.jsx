import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Sign() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form...");
    
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                toast.success("Registration successful!");
                navigate('/login');
            })
            .catch(err => {
                console.error("Error:", err.response ? err.response.data : err.message);
                const errorMessage = err.response ? err.response.data.message : "Registration failed. Please try again.";
                toast.error(errorMessage);
            });
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#FFFF',
            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)'
        }}>
            <div style={{
                backgroundColor: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                width: '100%', // Make the width 100% for responsiveness
                maxWidth: '400px', // Set maximum width for larger screens
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                margin: '20px' // Add some margin for better spacing
            }}>
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold' }}>Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', backgroundColor: 'peru', color: '#fff', border: 'none', cursor: 'pointer' }}
                    >
                        Register
                    </button>
                </form>

                {/* Toast Container */}
                <ToastContainer />

                <p style={{ marginTop: '15px', textAlign: 'center' }}>Already Have an Account</p>
                <Link
                    to="/Login"
                    style={{
                        display: 'block',
                        width: '100%',
                        padding: '10px',
                        borderRadius: '4px',
                        backgroundColor: '#FFFF',
                        color: 'peru',
                        fontWeight: 'bold',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'center'
                    }}
                >
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Sign;
