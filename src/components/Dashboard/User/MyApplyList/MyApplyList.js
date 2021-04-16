import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../../../App";

const MyApplyList = () => {
  const [user, setUser] = useContext(UserContext);
  const [applyList, setApplyList] = useState([]);
  console.log(applyList);

  useEffect(() => {
    fetch(`http://localhost:5000/myApplyList?email=` + user.email)
      .then((res) => res.json())
      .then((data) => setApplyList(data));
  }, []);

  return (
    <div className="text-center">
      <div className="text-center">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th> Email</th>
              <th>University Name</th>
              <th>Current Situation</th>
            </tr>
          </thead>
          <tbody>
            {applyList.map((pd) => (
              <tr>
                <td>{pd.length + 1}</td>
                <td>{pd.name}</td>
                <td>{pd.email}</td>
                <td>{pd.universityName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyApplyList;
