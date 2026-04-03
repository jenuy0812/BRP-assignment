import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    alert("Password reset link sent to your email.");
    setEmail("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f8",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          Book Recommendation Platform
        </h1>

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Send Reset Link
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Back to{" "}
          <Link to="/" style={linkStyle}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#ff9800",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
};

const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
};

export default ForgotPasswordPage;