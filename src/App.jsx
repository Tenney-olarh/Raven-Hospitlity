import { lazy, Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./Pages/Landing";
import "./Styles/global.css";
import "./Styles/variable.css";
import "./Styles/footer.css";

// Only the landing page ships in the initial bundle. Everything else is
// downloaded when the user actually navigates to it.
const Home = lazy(() => import("./Pages/Home"));
const Payment = lazy(() => import("./Pages/Payment"));
const Login = lazy(() => import("./Pages/Auth/login"));
const Signup = lazy(() => import("./Pages/Auth/signup"));
const Otp = lazy(() => import("./Pages/Auth/otp"));
const ServiceLayout = lazy(() => import("./Pages/Service/ServiceLayout"));
const Food = lazy(() => import("./Pages/Food"));
const Drink = lazy(() => import("./Pages/Drink"));
const Spa = lazy(() => import("./Pages/Spa"));
const Activities = lazy(() => import("./Pages/Activities"));
const Housekeeping = lazy(() => import("./Pages/Housekeeping"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/services" element={<ServiceLayout />}>
            <Route index element={<Navigate to="food" replace />} />
            <Route path="food" element={<Food />} />
            <Route path="drinks" element={<Drink />} />
            <Route path="spa" element={<Spa />} />
            <Route path="housekeeping" element={<Housekeeping />} />
            <Route path="activities" element={<Activities />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Suspense>

      <SpeedInsights />
    </>
  );
}
export default App;
