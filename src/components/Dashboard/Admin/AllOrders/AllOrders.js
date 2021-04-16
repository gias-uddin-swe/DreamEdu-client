import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./AllOrders.css";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th> Email</th>
            <th>University Name</th>
            <th>Placed Date</th>
            <th>Current Situation</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((pd) => (
            <tr>
              <td>{1}</td>
              <td>{pd.name}</td>
              <td>{pd.email}</td>
              <td>{pd.universityName}</td>
              <td>{new Date(pd.date).toDateString("dd/MM/yyyy")}</td>
              <td>{pd.process}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllOrders;
