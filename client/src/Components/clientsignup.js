import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "../styles/clientsignup.css"
function ClientSignUp({ onLogin}) {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username })
        })
        .then((r) => r.json())
        .then((user) => onLogin(user))
    }
    return(
        <section className="main-section">
            <div className="main">
                <form onSubmit={handleSubmit}>
                    <div class="input-group flex-nowrap">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" class="btn btn-dark" onClick={() => navigate("/landlordscard")}>SignIn</button>
                </form>
            </div>
        </section>
    )
}
export default ClientSignUp