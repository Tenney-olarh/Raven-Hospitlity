import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Payment from "./Pages/Payment";
import Login from "./Pages/Auth/login";
import Signup from "./Pages/Auth/signup";
import Otp from "./Pages/Auth/otp"
import ServiceLayout from "./Pages/Service/ServiceLayout";
import "./Styles/global.css";
import "./Styles/variable.css";
import "./Styles/footer.css";
// SERVICE IMPORTS 
import Food from  "./Pages/Food"
import Drink from "./Pages/Drink"
import Spa from "./Pages/Spa"
import Activities from "./Pages/Activities"
import Housekeeping from "./Pages/Housekeeping"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otp/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/services" element={<ServiceLayout />}>
        <Route path="food" element={<Food />} />
        <Route path="drinks" element={<Drink />} />
        <Route path="spa" element={<Spa />} />
        <Route path="housekeeping" element={<Housekeeping />} />
        <Route path="activities" element={<Activities />} />
      </Route>
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}
export default App;
