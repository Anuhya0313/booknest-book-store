import { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "user"
  });

  const signup = () => {
    localStorage.setItem(user.username, JSON.stringify(user));
    alert("Account created!");
    navigate("/");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: "26rem" }}>
        <h2 className="text-center mb-3">Signup</h2>

        <Form.Control
          placeholder="Username"
          className="mb-2"
          onChange={e => setUser({ ...user, username: e.target.value })}
        />

        <Form.Control
          type="password"
          placeholder="Password"
          className="mb-2"
          onChange={e => setUser({ ...user, password: e.target.value })}
        />

        <Form.Select
          className="mb-3"
          onChange={e => setUser({ ...user, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="seller">Seller</option>
        </Form.Select>

        <Button onClick={signup}>Create Account</Button>
      </Card>
    </Container>
  );
}

export default Signup;
