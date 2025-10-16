import React, { useState } from "react";

export default function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) setError("Invalid email format");
    else setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  const isFormValid = email && password && !error;

  return (
    <form onSubmit={handleSubmit}>
      <h3>React Form Validation</h3>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={handleEmailChange}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
}
