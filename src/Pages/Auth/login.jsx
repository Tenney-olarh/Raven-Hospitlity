import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../Styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh

    const email = e.target[0].value;
    const password = e.target[1].value;

    // temporary login check
    if (email === "admin@gmail.com" && password === "12345678") {
      navigate("/home"); // redirect to homepage
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <main className="login-parent">
      <div className="login-logo">
        <Link to="/">
          <img src={logo} alt="Raven Logo" />
        </Link>
      </div>

      <div className="login-child">
        <header className="login-childa">
          <p className="login-eyebrow">A NEW STANDARD IN HOSPITALITY</p>
          <h1>
            Where Every Stay <br className="login-break" /> Feels Intentional
          </h1>
          <p className="login-intro">
            Raven brings together seamless booking, <br className="login-break" />
            digital check-in, and curated guest experiences
          </p>
        </header>

        <div className="login-form">
          <h2>Welcome Back!</h2>

          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />

            <div className="form-bottom">
              <label htmlFor="remember-me">
                <input type="checkbox" id="remember-me" /> Remember me
              </label>
              <Link to="/otp">Forgot password?</Link>
            </div>

            <button type="submit">Sign In</button>
          </form>

          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;