import React, { useEffect, useState } from "react";
import "./ManageServices.css";
import { Table } from "react-bootstrap";
import edit from "../../../../images/edit-button.png";
import remove from "../../../../images/trash.png";

const ManageServices = () => {
  const [manageService, SetMangeService] = useState([]);
  const [result, setResult] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/allScholarship")
      .then((res) => res.json())
      .then((data) => SetMangeService(data));
  }, [result]);

  const handleDeleteService = (id) => {
    fetch(`http://localhost:5000/deleteService/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setResult(true);
        }
      });
  };

  return (
    <div>
      <div className="text-center">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th> location</th>
              <th>Type</th>
              <th>Current Situation</th>
              <th>Service Charge</th>
            </tr>
          </thead>
          <tbody>
            {manageService.map((pd) => (
              <tr>
                <td>{pd.length + 1}</td>
                <td>{pd.name}</td>
                <td>{pd.location}</td>
                <td>{pd.type}</td>
                <td>$ {pd.serviceCharge}</td>
                <td>
                  <button className="edit-button">
                    <img style={{ width: "30px" }} src={edit} alt="" />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteService(pd._id)}
                    className="delete-button"
                  >
                    <img style={{ width: "30px" }} src={remove} alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageServices;
