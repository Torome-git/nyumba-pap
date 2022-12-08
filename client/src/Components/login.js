import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import "../styles/login.css"
function LogIn() {
    const [error, setError] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            username: username,
            password: password,
        }

        fetch('', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log('r', data)
            if (data === null) {
                setError("Sign up failed. Try again")
            } else if (data.id) {
                localStorage.setItem('user', JSON.stringify(data))
                navigate('/apartmentscontainer', {
                    state: {
                        message: "Login Success"
                    }
                })
                navigate(0)
            } else {
                setError("Sign up failed. Try again")
            }
            setUserName('');
            setPassword('');
        })
    }
    return(
        <section className="main-section" >
            <div className="main-sec">
                <div className="col-sm-6">
                    <h2 className="mb-3">Login</h2>
                    {error ? <div className="alert alert-danger" role="alert">{error}</div> : null}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <p className="my-3">
                                Don't have an account?{' '}
                                <a href="#/" className="text-decoration-none"
                                onClick={() => navigate("/clientsignup")}>Sign up here</a>
                            </p>
                        </div>
                        <button type="submit" className="btn btn-dark">Login</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default LogIn