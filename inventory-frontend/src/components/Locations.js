import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Locations.css";

const API_URL = "http://127.0.0.1:5000";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState("");
  const [editLocation, setEditLocation] = useState(null);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    const res = await axios.get(`${API_URL}/locations/`);
    setLocations(res.data);
  };

  const addOrUpdateLocation = async () => {
    if (newLocation.trim() === "") return;
    if (editLocation) {
      await axios.put(`${API_URL}/locations/${editLocation.id}`, { name: newLocation });
      setEditLocation(null);
    } else {
      await axios.post(`${API_URL}/locations/`, { name: newLocation });
    }
    setNewLocation("");
    fetchLocations();
  };

  const handleEdit = (loc) => {
    setEditLocation(loc);
    setNewLocation(loc.name);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/locations/${id}`);
    fetchLocations();
  };

  return (
    <div className="location-page">
      <h2 className="location-title">Locations</h2>

      <div className="location-input-section">
        <input
          value={newLocation}
          onChange={(e) => setNewLocation(e.target.value)}
          placeholder="Location Name"
          className="location-input"
        />
        <button className="location-add-btn" onClick={addOrUpdateLocation}>
          {editLocation ? "Update" : "Add"}
        </button>
      </div>

      <div className="location-list">
        {locations.map((l) => (
          <div className="location-item" key={l.id}>
            <span>{l.name}</span>
            <div className="location-btn-group">
              <button className="location-edit-btn" onClick={() => handleEdit(l)}>
                Edit
              </button>
              <button
                className="location-delete-btn"
                onClick={() => handleDelete(l.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locations;
