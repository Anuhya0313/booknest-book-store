import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import AppNavbar from "../components/Navbar";

function Seller() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    description: ""
  });

  const addBook = async () => {
    await axios.post("http://localhost:5000/api/books", form);
    alert("Book added successfully!");
    setForm({ title: "", author: "", price: "", description: "" });
  };

  return (
    <>
      <Sidebar />
      <AppNavbar />

      <div style={{ marginLeft: "240px", padding: "20px" }}>
        <h1 className="text-light">
          <i className="bi bi-shop text-warning"></i> Seller Dashboard
        </h1>

        <div className="card p-3 shadow">
          <input
            className="form-control mb-2"
            placeholder="Title"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          />

          <input
            className="form-control mb-2"
            placeholder="Author"
            value={form.author}
            onChange={e => setForm({ ...form, author: e.target.value })}
          />

          <input
            className="form-control mb-2"
            placeholder="Price"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
          />

          <input
            className="form-control mb-3"
            placeholder="Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />

          <button className="btn btn-primary" onClick={addBook}>
            Add Book
          </button>
        </div>
      </div>
    </>
  );
}

export default Seller;
