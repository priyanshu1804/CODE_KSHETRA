import { useState } from 'react'
import './App.css'
import HomeComponent from './routes/Home'
import LoginSelection from "./routes/LoginSelection";
import SignupSelection from "./routes/SignupSelection";
import RestaurantLogin from "./components/RestaurantLogin";
import NGOLogin from "./components/NGOLogin";
import IndividualLogin from "./components/IndividualLogin";
import RestaurantSignup from "./components/RestaurantSignup";
import NGOSignup from "./components/NGOSignup";
import IndividualSignup from "./components/IndividualSignup";
import Donation from './routes/Donation';
import Request from './routes/Request';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center'>
        <BrowserRouter>
          <Routes>
            <>
              <Route path="/" element={<HomeComponent/>} />
              <Route path="/login" element={<LoginSelection />} />
              <Route path="/restaurant-login" element={<RestaurantLogin />} />
              <Route path="/NGO-login" element={<NGOLogin />} />
              <Route path="/individual-login" element={<IndividualLogin />} />
              <Route path="/signup" element={<SignupSelection />} />
              <Route path="/restaurant-signup" element={<RestaurantSignup />} />
              <Route path="/NGO-signup" element={<NGOSignup />} />
              <Route path="/individual-signup" element={<IndividualSignup />} />
              <Route path="/donate" element={<Donation />} />
              <Route path="/request" element={<Request />} />
            </>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
