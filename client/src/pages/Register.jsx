import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();

    setEmail("");
    setPassword("");
    setUsername("");
    if (response.ok) {
      navigate("/login");
    }
  }

  return (
    <div className="s-form-wrapper">
      <form onSubmit={registerUser} className="s-form">
        <h1 className="title">Register</h1>
        <input
          value={username}
          className="s-input"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          value={email}
          className="s-input"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          value={password}
          className="s-input"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
