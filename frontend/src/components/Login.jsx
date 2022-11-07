import { useState } from "react";
import { Button } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };

    // fetch("http://localhost:3001/user/login", {
    fetch("https://gentle-citadel-20917.herokuapp.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem("psc_app_token", res.token);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "0.5%", fontSize: "18px" }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "0.5%", fontSize: "18px" }}
      />
      <br />
      <br />
      <Button variant="contained" type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </div>
  );
}

export default Login;
