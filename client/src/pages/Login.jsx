import { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const adminUser = { username: "admin", password: "admin123" };

    if (username === adminUser.username && password === adminUser.password) {
      navigate("/admin");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem(username));

    if (savedUser && savedUser.password === password) {
      savedUser.role === "seller" ? navigate("/seller") : navigate("/store");
    } else {
      alert("Invalid login!");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: "26rem" }}>
        <h2 className="text-center mb-3">Login</h2>

        <Form.Control
          placeholder="Username"
          className="mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Form.Control
          type="password"
          placeholder="Password"
          className="mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleLogin}>Login</Button>

        <p className="mt-3 text-center">
          New user? <Link to="/signup">Create account</Link>
        </p>
      </Card>
    </Container>
  );
}

export default Login;
