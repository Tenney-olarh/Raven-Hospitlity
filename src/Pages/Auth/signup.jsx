import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../Styles/Signup.css";
import logo from "../../assets/logo.svg";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Check passwords match
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      // ✅ Hardcoded test credentials
      if (
        form.name === "Ekerin Adaeze" &&
        form.email === "admin@gmail.com" &&
        form.password === "1234"
      ) {
        alert("Signup successful!");

        // Optional: store fake token
        localStorage.setItem("token", "test-token");

        navigate("/login");
      } else {
        alert("Invalid test credentials");
      }

    } catch (err) {
      console.log("ERROR:", err);
      alert("Something went wrong");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-parent">

      <div className="signup-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="signup-child">

        <div className="signup-text">
          <h6>JOIN THE EXPERIENCE</h6>
          <h1>Create Your Account</h1>
          <p>Start your journey with seamless hospitality</p>
        </div>

        <div className="signup-form">
          <h2>Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Signup;