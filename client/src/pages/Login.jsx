import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
      credentials: "include",
    });

    const data = await response.json();
    setPassword("");
    setUsername("");
    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login successful");
      navigate("/");
    }
  }

  return (
    <div>
      <div className="img">
        <img
          src="\images\image.png"
          alt="Illustration"
          className="w-full  h-auto max-w-xs"
        />
      </div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
