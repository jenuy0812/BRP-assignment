import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../axiosConfig";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/login", formData);

      // save user + token
      localStorage.setItem("userInfo", JSON.stringify(data));

      alert("Login successful");

      navigate("/books");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          Book Recommendation Platform
        </h1>

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />

          <div style={{ textAlign: "right", marginBottom: "15px" }}>
            <Link to="/forgot-password" style={linkStyle}>
              Forgot Password?
            </Link>
          </div>

          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Don’t have an account?{" "}
          <Link to="/register" style={linkStyle}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

// 🎨 Styles
const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f4f6f8",
};

const cardStyle = {
  width: "100%",
  maxWidth: "420px",
  background: "#fff",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 0 12px rgba(0,0,0,0.1)",
};

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
  background: "#007bff",
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

export default LoginPage;