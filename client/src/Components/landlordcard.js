import React from "react";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
function LandlordsCard({handleApartments, landlord}) {
    const navigate = useNavigate()
    const [added, setAdded] = useState(false)
    //const imageStyle = { width: "18rem"}
    const [rooms, setRooms] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [img_url, setImg_url] = useState('');
    const [contact, setContact] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        let data
        data = {
        rooms: rooms,
        location: location,
        price: price,
        img_url: img_url,
        contact: contact
        }
        fetch("/client", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        }).then(res => {
        console.log(res)
        if (res.ok) {
            setSuccess("Added successfully")
            navigate('/apartmentscontainer', {
            state: {
                message: "Successfully added!"
            }
            })
        }else {
            setError("adding failed")
        }
        setContact('');
        setRooms('');
        setPrice('');
        setImg_url('');
        setLocation('');
        })
    }

    function addApartment() {
        console.log(landlord)
        setAdded(!added)
    }
    return(
        <div className="col-sm-6">
            <h2 className="mb-3">Add your apartment</h2>
            {error ? <div className="alert alert-danger" role="alert">{error}</div> : null}
            {success ? <div className="alert alert-success" role="alert">{success}</div> : null}
            <form onSubmit={handleSubmit}>
                <div className="row mb-2">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="contact"
                            placeholder="Contact"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="rooms"
                            placeholder="Rooms i.e (two-bedrooms, three-bedrooms...)"
                            value={rooms}
                            onChange={(e) => setRooms(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="img_url"
                            placeholder="Image URL"
                            value={img_url}
                            onChange={(e) => setImg_url(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            placeholder="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                <div>
                    
                    <p className="my-3">
                        Sign up as a {' '}
                        <a href="#/" className="text-decoration-none" onClick={() => navigate("/clientsignup")}>
                            Client
                        </a>
                    </p>
                </div>
                <button type="submit" className="btn btn-danger" onClick={() => (addApartment) }>
                {added ? "ADDED":"ADD"}
                </button>
            </form>
        </div>
        // <React.Fragment>
        //     {landlord?
        //     <div className="card">
        //         <img src={landlord.img_url} className="card-img-top" style={imageStyle} alt="..."/>
        //     <div className="card-body">
        //         <h5 className="card-title">{landlord.rooms}</h5>
        //     </div>
        //         <ul className="list-group list-group-flush">
        //             <li className="list-group-item">{landlord.price}</li>
        //             <li className="list-group-item">{landlord.location}</li>
        //             <li className="list-group-item">{landlord.contact}</li>
        //         </ul>
        //      </div>: <p>No apartment</p>}
        //      <div>
        //         <button onClick={() => navigate("/apartmentscontainer")(addApartment)} type="button" className="btn btn-primary">
        //             {added ? "ADDED":"ADD"}
        //         </button>
        //         </div>
        // </React.Fragment>
    )
}
export default LandlordsCard