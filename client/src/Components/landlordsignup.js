import React from "react";
import {useNavigate} from "react-router-dom";
function LandlordSignUp() {
    const navigate = useNavigate()
    return(
        <section className="main-section">
            <div className="main">
                <form>
                    <div class="input-group flex-nowrap">
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
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
                    <button type="submit" class="btn btn-dark" onClick={() => navigate("/landlordscontainer")}>SignIn</button>
                </form>
            </div>
        </section>
    )
}
export default LandlordSignUp