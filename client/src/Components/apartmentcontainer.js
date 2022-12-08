import React, { useEffect } from "react";
import ApartmentCard from "./apartmentcard";
import { useState } from "react";
import "../styles/apartmentcontainer.css"

function ApartnmentsContainer() {
    const[clients, setClients] = useState(null)

    useEffect(() => {
        fetch('/client')
        .then(res => res.json())
        .then(data => setClients(data))
    }, [])

    return(
        <div className="apartments">
            {clients?
            clients.map(client=><ApartmentCard client={client}></ApartmentCard>)
            :<p>login</p>}
        </div>
    )
}
export default ApartnmentsContainer