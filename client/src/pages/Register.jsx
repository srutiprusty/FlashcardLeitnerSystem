import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import "../App.css";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5001/api/register", {
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
    <div className="login-page">
      <div className="signup-container">
        <Typography level="h3" className="title">
          <b>Register</b>
        </Typography>
        <Typography level="body-sm" className="subtitle">
          Sign up to continue.
        </Typography>
        <form onSubmit={registerUser}>
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
            <FormLabel>Email</FormLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
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
            Sign Up
          </Button>
        </form>
        <Typography
          endDecorator={
            <Link to="/login" className="signup-link">
              Sign in
            </Link>
          }
          sx={{ fontSize: "sm", alignSelf: "center" }}
        >
          Already have an account?
        </Typography>
      </div>
      <div className="s-image-container">
        <img
          src="/images/image.png"
          alt="Illustration"
          className="signup-image"
        />
      </div>
    </div>
  );
}

export default Register;
