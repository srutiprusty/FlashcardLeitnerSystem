/* import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useFlashcards } from "../context/FlashcardContext.jsx";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const { flashcards } = useFlashcards();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5001/api/login", {
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
    <div className="login-page">
      <Typography level="h4" component="h1">
        <b>Welcome!</b>
      </Typography>
      <Typography level="body-sm">Now Sign in to continue.</Typography>

      <form onSubmit={loginUser}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="UserName"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </FormControl>
        <Button sx={{ mt: 1 }} type="submit">
          Log in
        </Button>
      </form>

      <Typography
        endDecorator={<Link to="/register">Sign up</Link>}
        sx={{ fontSize: "sm", alignSelf: "center" }}
      >
        Don&apos;t have an account?
      </Typography>

      <div className="sec">
        <img src="/images/image.png" alt="Illustration" className="image" />
      </div>
    </div>
  );
}

export default Login;
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useFlashcards } from "../context/FlashcardContext.jsx";
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  const [username, setUsername] = useState("");
  const { flashcards } = useFlashcards();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5001/api/login", {
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
    <div className="login-page">
      <div className="l-image-container">
        <img
          src="/images/image.png"
          alt="Illustration"
          className="login-image"
        />
      </div>
      <div className="login-container">
        <Typography level="h3" className="title">
          <b>Welcome!</b>
        </Typography>
        <Typography level="body-sm" className="subtitle">
          Sign in to continue.
        </Typography>
        <form onSubmit={loginUser} className="login-form">
          <FormControl className="form-control">
            <FormLabel>Username</FormLabel>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="UserName"
              className="input-field"
            />
          </FormControl>

          <FormControl className="form-control">
            <FormLabel>Password</FormLabel>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="input-field"
            />
          </FormControl>

          <Button className="login-button" type="submit">
            Log in
          </Button>
        </form>
        <Typography
          endDecorator={
            <Link to="/register" className="signup-link">
              Sign up
            </Link>
          }
          sx={{ fontSize: "sm", alignSelf: "center" }}
        >
          Don&apos;t have an account?
        </Typography>
      </div>
    </div>
  );
}

export default Login;
