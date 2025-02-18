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

/* 
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
      body: JSON.stringify({ username, password }),
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 flex max-w-sm w-full">
       
        <div className="hidden md:flex items-center justify-center w-1/2">
          <img
            src="\images\image.png"
            alt="Illustration"
            className="w-full  h-auto max-w-xs"
          />
        </div>

       
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Log In</h1>
          <form onSubmit={loginUser} className="space-y-4">
            <div>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-violet-300"
              />
            </div>
            <div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-violet-300"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600">Remember me</span>
            </div>
            <button
              type="submit"
              className="w-full bg-violet-600 text-white py-3 rounded-lg hover:bg-violet-800 transition"
            >
              Log In
            </button>
          </form>

        
        </div>
      </div>
    </div>
  );
}

export default Login;
 */
