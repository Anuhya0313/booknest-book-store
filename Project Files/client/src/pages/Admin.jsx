import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import AppNavbar from "../components/Navbar";

function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders")
      .then(res => setOrders(res.data));
  }, []);

  return (
    <>
      <Sidebar />
      <AppNavbar />

      <div style={{ marginLeft: "240px", padding: "20px" }}>
        <h1 className="text-light">
          <i className="bi bi-shield-lock text-warning"></i> Admin Dashboard
        </h1>

        {orders.map(order => (
          <div key={order._id} className="card p-3 mb-3 shadow">
            <p><b>Date:</b> {new Date(order.createdAt).toLocaleString()}</p>
            <p><b>Total:</b> ₹{order.total}</p>
            <p><b>Items:</b> {order.items.length}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Admin;
