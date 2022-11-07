import { useState } from "react";
import { Button } from "@mui/material";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = () => {
    const payload = {
      email,
      password,
      age,
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
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "0.5%", fontSize: "18px" }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "0.5%", fontSize: "18px" }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter your age"
        onChange={(e) => setAge(e.target.value)}
        style={{ padding: "0.5%", fontSize: "18px" }}
      />
      <br />
      <br />
      <Button variant="contained" type="submit" onClick={handleSubmit}>
        Signup
      </Button>
    </div>
  );
}

export default Signup;
