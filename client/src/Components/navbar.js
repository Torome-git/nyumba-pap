// import React from "react";
// import {useNavigate} from "react-router-dom";
// function Navbar() {
//     let navigate = useNavigate()

//     return (
//         <section>
//             <div>
//                 <nav className="navbar navbar-expand-lg fs-5 mb-sm-5 mb-3 py-3">
//                     <div className="container-fluid">
//                         <a className="navbar-brand" href="#/" onClick={() => navigate("/")}>NYUMBA-PAP</a>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <a className="nav-link active" aria-current="page" href="#/" onClick={() => navigate("/login")}>Log in</a>
//                                 </li>
//                                 <li className="nav-item dropdown">
//                                     <a className="nav-link dropdown-toggle" href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                         SignUp
//                                     </a>
//                                     <ul className="dropdown-menu">
//                                         <li><a className="dropdown-item" href="#/" onClick={() => navigate("/clientsignup")}>Client SignUp</a></li>
//                                         <li><a className="dropdown-item" href="#/">Landlord SignUp</a></li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                             <form className="d-flex" role="search">
//                                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                                 <button className="btn btn-outline-dark" type="submit">Search</button>
//                             </form>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </section>
//     )
// }
// export default Navbar