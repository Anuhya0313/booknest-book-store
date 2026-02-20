import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AppNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <Navbar
      expand="lg"
      className="shadow"
      style={{
        background: "linear-gradient(90deg, #0f172a, #1e293b)",
        zIndex: 2
      }}
    >
      <Container>
        <Navbar.Brand className="text-light fs-4">
          <i className="bi bi-book text-info"></i> BookNest
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Button
            variant="outline-light"
            onClick={logout}
          >
            <i className="bi bi-box-arrow-right"></i> Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
