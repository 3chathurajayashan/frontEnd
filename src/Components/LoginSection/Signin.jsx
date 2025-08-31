import React, { useState } from "react";
import "../LoginSection/Sign.css";
import signinImage from "../../assets/SIGN.jpg";

function Signin() {
  const [role, setRole] = useState("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Role: ${role}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="signin-container">
      {/* Left image */}
      <div className="signin-left">
        <img src={signinImage} alt="SignIn Illustration" />
        <div className="overlay-text">
          <h1>Welcome Back!</h1>
          <p>Access your dashboard and manage your account</p>
        </div>
      </div>

      {/* Right form */}
      <div className="signin-right">
        <div className="signin-card">
          <h2 className="signin-title">Sign In</h2>

          <div className="role-switch">
            <button
              className={role === "customer" ? "active" : ""}
              onClick={() => setRole("customer")}
            >
              Customer
            </button>
            <button
              className={role === "admin" ? "active" : ""}
              onClick={() => setRole("admin")}
            >
              Admin
            </button>
          </div>

          <form className="signin-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="signin-btn">Sign In</button>
          </form>

          <p className="signup-link">
            Don’t have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
