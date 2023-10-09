import { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isDisabled = () => !username || !password;

  const handleLogin = (e) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((req) => {
        setSuccess("Successfully logged in");
        console.log(req);
      })
      .catch((error) => {
        setError("Error logging in");
      });
  };

  return (
    <form>
      <div>{error}</div>
      <div>{success}</div>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />

      <button onClick={handleLogin} disabled={isDisabled()}>
        Login
      </button>
    </form>
  );
};
