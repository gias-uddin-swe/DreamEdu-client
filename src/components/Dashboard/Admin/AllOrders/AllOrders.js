import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./AllOrders.css";
import { useForm } from "react-hook-form";

const AllOrders = () => {
  const { register, handleSubmit } = useForm();
  const [optionValue, SetOptionValue] = useState(null);
  const [orders, setOrders] = useState([]);

  const [dependency, setDependency] = useState(false);

  useEffect(() => {
    fetch("https://gentle-chamber-46179.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((result) => setOrders(result));
  }, [dependency]);

  const handleSelectValue = (e) => {
    SetOptionValue(e.target.value);
  };

  const handleEditSubmit = (id) => {
    fetch(`https://gentle-chamber-46179.herokuapp.com/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ optionValue }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setDependency(true);
        }
      });
  };
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
              <td>
                <form>
                  <select onClick={handleSelectValue} className="pending">
                    <option defaultValue={pd.process}>{pd.process}</option>
                    <option defaultValue="on the way">pending</option>
                    <option defaultValue="on the way">on the way</option>
                    <option defaultValue="arrived">Arrived</option>
                  </select>
                  <input
                    className="hideInput"
                    type="text"
                    name="id"
                    value={pd._id}
                  />
                  <button
                    onClick={() => handleEditSubmit(pd._id)}
                    className="btn btn-danger ml-2"
                  >
                    Update
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllOrders;
