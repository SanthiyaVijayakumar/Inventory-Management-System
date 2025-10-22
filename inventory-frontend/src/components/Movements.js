import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movements.css";

const API_URL = "http://127.0.0.1:5000";

function Movements() {
  const [products, setProducts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [movements, setMovements] = useState([]);
  const [editMovement, setEditMovement] = useState(null);

  const [movementData, setMovementData] = useState({
    product_id: "",
    from_location_id: "",
    to_location_id: "",
    quantity: "",
    movement_date: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [p, l, m] = await Promise.all([
      axios.get(`${API_URL}/products/`),
      axios.get(`${API_URL}/locations/`),
      axios.get(`${API_URL}/product-movement/`),
    ]);
    setProducts(p.data);
    setLocations(l.data);
    setMovements(m.data);
  };

  const addOrUpdateMovement = async () => {
    if (!movementData.product_id || !movementData.quantity) return;

    if (editMovement) {
      await axios.put(`${API_URL}/product-movement/${editMovement.id}`, movementData);
      setEditMovement(null);
    } else {
      await axios.post(`${API_URL}/product-movement/`, movementData);
    }

    setMovementData({
      product_id: "",
      from_location_id: "",
      to_location_id: "",
      quantity: "",
      movement_date: "",
    });

    fetchData();
  };

  const handleEdit = (m) => {
    setEditMovement(m);
    setMovementData(m);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/product-movement/${id}`);
    fetchData();
  };

  const getProductName = (id) => products.find((p) => p.id === id)?.name || "Unknown";
  const getLocationName = (id) => locations.find((l) => l.id === id)?.name || "—";

  return (
    <div className="movement-page">
      <h2 className="movement-title">Product Movements</h2>

      <div className="movement-inputs">
        <select
          className="movement-input"
          value={movementData.product_id}
          onChange={(e) => setMovementData({ ...movementData, product_id: e.target.value })}
        >
          <option value="">Select Product</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>

        <select
          className="movement-input"
          value={movementData.from_location_id}
          onChange={(e) => setMovementData({ ...movementData, from_location_id: e.target.value })}
        >
          <option value="">From Location</option>
          {locations.map((l) => (
            <option key={l.id} value={l.id}>{l.name}</option>
          ))}
        </select>

        <select
          className="movement-input"
          value={movementData.to_location_id}
          onChange={(e) => setMovementData({ ...movementData, to_location_id: e.target.value })}
        >
          <option value="">To Location</option>
          {locations.map((l) => (
            <option key={l.id} value={l.id}>{l.name}</option>
          ))}
        </select>

        <input
          type="number"
          className="movement-input"
          placeholder="Quantity"
          value={movementData.quantity}
          onChange={(e) => setMovementData({ ...movementData, quantity: e.target.value })}
        />

        <input
          type="date"
          className="movement-input"
          value={movementData.movement_date}
          onChange={(e) => setMovementData({ ...movementData, movement_date: e.target.value })}
        />

        <button className="movement-add-btn" onClick={addOrUpdateMovement}>
          {editMovement ? "Update" : "Add"}
        </button>
      </div>

      
      <table className="movement-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>From</th>
            <th>To</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movements.map((m) => (
            <tr key={m.id}>
              <td>{getProductName(m.product_id)}</td>
              <td>{getLocationName(m.from_location_id)}</td>
              <td>{getLocationName(m.to_location_id)}</td>
              <td>{m.quantity}</td>
              <td>{m.movement_date?.slice(0, 10)}</td>
              <td>
                <button className="movement-edit-btn" onClick={() => handleEdit(m)}>Edit</button>
                <button className="movement-delete-btn" onClick={() => handleDelete(m.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Movements;
