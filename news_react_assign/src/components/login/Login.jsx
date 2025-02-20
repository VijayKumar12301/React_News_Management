import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validuser } from "../../service/user"; // Import the validuser function

export function Login() {
  const [username, setUsername] = useState(""); // Store the username entered by the user
  const [password, setPassword] = useState(""); // Store the password entered by the user
  const [error, setError] = useState(""); // Store the error message
  const navigate = useNavigate(); // Initialize navigate

  const handleUsernameChange = (e) => {
    setUsername(e.target.value); // Update username state
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Update password state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call validuser to check if username and password match in the backend
      const response = await validuser(username, password);

      if (response.data) {
        // Successful login
        alert("Login Successful");
        navigate("/home"); // Redirect to the home page after successful login
      } else {
        // Invalid credentials
        setError("Invalid username or password");
      }
    } catch (err) {
      // Handle any potential errors
      navigate("/HomePage")
     
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card" style={{ width: "100%", maxWidth: "400px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            {error && <p className="text-danger text-center mt-3">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
