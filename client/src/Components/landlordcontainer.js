import React from "react";
import LandlordsCard from "./landlordcard";

function LandlordsContainer(props) {
    return (
        <section>
            <div className="apartments">
                {props.landlords?
                props.landlords.map(landlord=><LandlordsCard landlord={landlord} handleApartments={props.handleApartments}></LandlordsCard>)
                :<p>login</p>}
            </div>
        </section>
    )
}
export default LandlordsContainer