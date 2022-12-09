import React from "react"
//import house from '../assets/house.jpg';
import '../styles/homepage.css'
import { useNavigate } from "react-router-dom"
function HomePage() {
    const navigate = useNavigate()
    return (
        <>
        <section  >
            <div className="selling">
                <div className="selling-left">
                    <div className="selling-inner-left">
                        <h1>Finding rental apartments has never been easier</h1>
                        <p>Nyumba-Pap is here to have you sorted. We connect landlords to clients. Get your apartment today! </p>
                        <button className="explore-more" type="submit" onClick={() => navigate("/clientsignup")}>Explore More</button>
                    </div>
                </div>
                {/* <div className="selling-right">
                    <img src={house} alt="house"/>
                </div> */}
            </div>
            <div className="selling-bottom">
                <div className="selling-bottom-container">
                    <div className="vendors">
                        <h2>200+</h2>
                        <h2>Verified Landlords</h2>
                    </div>
                    <div className="vendors">
                        <h2>105+</h2>
                        <h2>Happy Customers</h2>
                    </div>
                    <div className="vendors">
                        <h2>2000+</h2>
                        <h2>Nationwide Customers</h2>
                    </div>
                </div>
            </div>
        </section>
        <section className="why-exist">
            <div className="why-left">
                <div className="why-container">
                    <h2 className="why">Why we exist
                        <hr className="horizontal-rule"/>
                    </h2>
                    <p className="why">We are built to make your work easier. Like any online ecommerce, Nyumba-Pap provides a
                        great
                        platform to reach your customers throughout the country. We have made it easier to search from
                        anywhere
                        through the platform.</p>
                </div>
            </div>
            <div className="why-right">
                <img src="" alt=""/>
            </div>
        </section>
        </>
    )
}

export default HomePage