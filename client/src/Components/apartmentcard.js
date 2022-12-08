import React from "react";
function ApartmentCard({ client }){
  const imageStyle = { width: "18rem"}

    return(
        
      <>
        {client?
        <div className="card">
            <img src={client.img_url} className="card-img-top" style={imageStyle} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{client.rooms}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{client.price}</li>
            <li className="list-group-item">{client.location}</li>
            <li className="list-group-item">{client.contact}</li>
          </ul>
        </div>: <p>No apartment</p>
        }
      </>
    )
};

export default ApartmentCard