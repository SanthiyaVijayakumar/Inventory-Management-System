import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

function Report() {
  const [report, setReport] = useState([]);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    const res = await axios.get(`${API_URL}/report`);
    setReport(res.data);
  };

  return (
    <div className="page">
      <h2>Inventory Balance Report</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ background: "#1976d2", color: "white" }}>
            <th>Product</th>
            <th>Warehouse</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {report.map((r, index) => (
            <tr key={index}>
              <td>{r.product}</td>
              <td>{r.location}</td>
              <td>{r.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Report;
