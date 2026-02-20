import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(10px)",
        padding: "20px",
        zIndex: 2
      }}
    >
      <h4 className="text-light mb-4">
        <i className="bi bi-book"></i> BookNest
      </h4>

      <Nav className="flex-column gap-2">
        <Nav.Link className="text-light" onClick={() => navigate("/store")}>
          <i className="bi bi-shop"></i> Store
        </Nav.Link>

        <Nav.Link className="text-light" onClick={() => navigate("/seller")}>
          <i className="bi bi-box"></i> Seller
        </Nav.Link>

        <Nav.Link className="text-light" onClick={() => navigate("/admin")}>
          <i className="bi bi-shield"></i> Admin
        </Nav.Link>

        <Nav.Link className="text-danger" onClick={() => navigate("/")}>
          <i className="bi bi-box-arrow-right"></i> Logout
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
