import React from "react";
import {useNavigate} from "react-router-dom";
function LandlordSignUp() {
    const navigate = useNavigate()
    return(
        <section className="main-section">
            <div className="main">
                <form>
                    <div className="input-group flex-nowrap">
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2"/>
                    </div>
                    <button type="submit" className="btn btn-dark" onClick={() => navigate("/landlordscontainer")}>SignIn</button>
                </form>
            </div>
        </section>
    )
}
export default LandlordSignUp