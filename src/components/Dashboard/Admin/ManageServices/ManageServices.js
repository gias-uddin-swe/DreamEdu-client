import React, { useEffect, useState } from "react";
import "./ManageServices.css";
import { Table } from "react-bootstrap";
import edit from "../../../../images/edit-button.png";
import remove from "../../../../images/trash.png";
import { useForm } from "react-hook-form";

const ManageServices = () => {
  const { register, handleSubmit } = useForm();
  const [editForm, setEditForm] = useState(false);

  const [manageService, SetMangeService] = useState([]);
  const [result, setResult] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    fetch("https://gentle-chamber-46179.herokuapp.com/allScholarship")
      .then((res) => res.json())
      .then((data) => SetMangeService(data));
  }, [result]);

  const handleDeleteService = (id) => {
    fetch(`https://gentle-chamber-46179.herokuapp.com/deleteService/${id}`, {
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

  const [EditService, setEditService] = useState({});

  const handleEditInfo = (id) => {
    fetch(`https://gentle-chamber-46179.herokuapp.com/serviceUpdate/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEditService(data);
        setEditForm(true);
      });
  };
  const handleServiceEdit = (id) => {
    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const serviceCharge = document.getElementById("serviceCharge").value;
    const type = document.getElementById("type").value;
    const product = { id, name, location, serviceCharge, type };
    fetch(`https://gentle-chamber-46179.herokuapp.com/update/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setResult(true);
        }
      });
  };

  return (
    <div>
      <div className="text-center">
        {editForm && (
          <div className="editForm">
            <Table striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th> Name</th>
                  <th> Location</th>
                  <th>Type</th>
                  <th>Service Charge</th>
                </tr>

                <tr>
                  <td>1</td>
                  <td>
                    <input
                      id="name"
                      name="name"
                      defaultValue={EditService.name}
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      id="location"
                      name="location"
                      defaultValue={EditService.location}
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      id="type"
                      name="type"
                      defaultValue={EditService.type}
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      id="serviceCharge"
                      defaultValue={EditService.serviceCharge}
                      type="text"
                    />
                  </td>
                  <td>
                    <button onClick={() => handleServiceEdit(EditService._id)}>
                      Save Changes
                    </button>
                  </td>
                </tr>
                {/* </form> */}
              </thead>
            </Table>
          </div>
        )}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th> location</th>
              <th>Type</th>
              <th>Service Charge</th>
              <th></th>
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
                  <button
                    onClick={() => handleEditInfo(pd._id)}
                    className="edit-button"
                  >
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
