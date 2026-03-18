import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Payment from "./Pages/Payment";
import Login from "./Pages/Auth/login";
import Signup from "./Pages/Auth/signup";
import ServiceOffered from "./Pages/Service/ServiceOffered";
import "./Styles/global.css";
import "./Styles/variable.css";
import "./Styles/footer.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/service-offered" element={<ServiceOffered />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}
export default App;
