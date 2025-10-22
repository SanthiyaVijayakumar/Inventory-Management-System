import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";

const API_URL = "http://127.0.0.1:5000";

function Products() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState("");
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get(`${API_URL}/products/`);
    setProducts(res.data);
  };

  const addOrUpdateProduct = async () => {
    if (newProduct.trim() === "") return;
    if (editProduct) {
      await axios.put(`${API_URL}/products/${editProduct.id}`, { name: newProduct });
      setEditProduct(null);
    } else {
      await axios.post(`${API_URL}/products/`, { name: newProduct });
    }
    setNewProduct("");
    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setNewProduct(product.name);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="page">
      <h2 className="title">Products</h2>
      <div className="input-section">
        <input
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          placeholder="Product Name"
          className="input-box"
        />
        <button className="add-btn" onClick={addOrUpdateProduct}>
          {editProduct ? "Update" : "Add"}
        </button>
      </div>

      <div className="list">
        {products.map((p) => (
          <div className="list-item" key={p.id}>
            <span>{p.name}</span>
            <div className="btn-group">
              <button className="edit-btn" onClick={() => handleEdit(p)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => handleDelete(p.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
