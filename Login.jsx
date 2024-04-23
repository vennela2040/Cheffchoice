import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if(result.data === "Success"){
                    navigate('/home');
                }
            })
            .catch(err => console.log(err));
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
                <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="Email" style={{ display: 'block', fontWeight: 'bold' }}>Email</label>
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
                        Login
                    </button>
                </form>

                <p style={{ marginTop: '15px', textAlign: 'center' }}>Don't have an account?</p>
                <Link
                    to="/Register"
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
                    Register here
                </Link>
            </div>
        </div>
    );
}

export default Login;
