import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import AppNavbar from "../components/Navbar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Store() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/books")
      .then(res => setBooks(res.data));
  }, []);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  const checkout = async () => {
    await axios.post("http://localhost:5000/api/orders", {
      items: cart,
      total
    });

    alert("Order placed successfully 🎉");
    setCart([]);
  };

  return (
    <>
      <Sidebar />
      <AppNavbar />

      <div style={{ marginLeft: "240px", padding: "20px" }}>
        <Container>
          <h1 className="mb-4 text-light text-center">
            <i className="bi bi-shop text-warning"></i> Book Store
          </h1>

          <Row>
            {books.map(book => (
              <Col md={4} key={book._id} className="mb-4">
                <Card className="shadow h-100 book-card">
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.author}</Card.Text>
                    <Card.Text>₹{book.price}</Card.Text>

                    <Button
                      variant="primary"
                      className="w-100"
                      onClick={() => addToCart(book)}
                    >
                      <i className="bi bi-cart"></i> Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <hr />

          <h2 className="text-light">
            <i className="bi bi-cart"></i> Cart
          </h2>

          {cart.map((item, i) => (
            <div key={i} className="text-light">
              {item.title} - ₹{item.price}
            </div>
          ))}

          <h3 className="text-light">Total: ₹{total}</h3>

          <Button variant="success" onClick={checkout}>
            Checkout
          </Button>
        </Container>
      </div>
    </>
  );
}

export default Store;
