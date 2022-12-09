import LogIn from './Components/login';
import ClientSignUp from './Components/clientsignup';
import ApartmentCard from './Components/apartmentcard';
import ApartnmentsContainer from './Components/apartmentcontainer';
import LandlordSignUp from './Components/landlordsignup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/homepage';
import LandlordsContainer from './Components/landlordcontainer';
import LandlordsCard from './Components/landlordcard';
import Footer from './Components/footer';
import './App.css'
import TestNav from './Components/testnav';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() =>{
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => SpeechSynthesisUtterance(user));
      }
    })
  }, []);
  

  return (
    <div className='App'>
      {user?
      (<h2>Welcome, {user.username}!</h2>)
      :

      <Router>
        <TestNav/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LogIn onLogin={setUser}/>}/>
            <Route path='/clientsignup' element={<ClientSignUp/>}/>
            <Route path ='/apartmentcard' element={<ApartmentCard/>}/>
            <Route path ='/apartmentscontainer' element={<ApartnmentsContainer/>}/>
            <Route path='/landlordsignup' element={<LandlordSignUp/>}/>
            <Route path='/landlordscontainer' element={<LandlordsContainer/>}/>
            <Route path='/landlordscard' element={<LandlordsCard/>} />
        </Routes>
        <Footer/>
      </Router>
}
    </div>
  );
}

export default App;
