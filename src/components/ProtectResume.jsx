import React, { useState } from "react";
import Resume from "./Resume";

const ProtectedResume = () => {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = "shweta123";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredPassword === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/template/pass.png')", // apni image ka path yahan dein
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isAuthenticated ? (
        <Resume />
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            textAlign: "center",
            marginTop: "100px",
            background: "rgba(255,255,255,0.85)",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}
        >
          <h2>🔒 Enter Password to View Resume</h2>
          <input
            type="password"
            placeholder="Enter Password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
          />
          <button
            type="submit"
            style={{ padding: "10px 20px", fontSize: "16px" }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ProtectedResume;
