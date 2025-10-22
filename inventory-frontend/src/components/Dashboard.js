import React, { useEffect, useState } from "react";
import axios from "axios";
import { Package, MapPin, RefreshCcw } from "lucide-react";
import "./Dashboard.css"; 

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [movements, setMovements] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "http://127.0.0.1:5000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, locRes, moveRes] = await Promise.all([
          axios.get(`${BASE_URL}/products/`),
          axios.get(`${BASE_URL}/locations/`),
          axios.get(`${BASE_URL}/product-movement/`),
        ]);
        setProducts(prodRes.data || []);
        setLocations(locRes.data || []);
        setMovements(moveRes.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p className="loading-text">Loading dashboard...</p>;
  }

  const summaryCards = [
    { title: "Total Products", value: products.length, icon: <Package /> },
    { title: "Total Locations", value: locations.length, icon: <MapPin /> },
    { title: "Total Movements", value: movements.length, icon: <RefreshCcw /> },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Inventory Dashboard</h1>

      <div className="cards-container">
        {summaryCards.map((card, idx) => (
          <div key={idx} className="card">
            <div className="card-icon">{card.icon}</div>
            <div className="card-content">
              <p className="card-title">{card.title}</p>
              <p className="card-value">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
