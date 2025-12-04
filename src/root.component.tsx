import React, { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";

export interface Employee {
  id: number;
  title: string;
  body: string;
}

const Root: React.FC<{ name: string; isLoggedIn: boolean }> = ({
  name,
  isLoggedIn,
}) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  console.log("dasdsa", employees);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  if (!employees.length) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <BrowserRouter basename="/">
      <table className="table table-striped table-bordered table-sm">
        <thead>
          <tr>
            <th scope="col">ID {isLoggedIn ? "" : "(Access Required)"}</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee: Employee) => (
            <tr key={employee.id}>
              <th>
                {isLoggedIn ? (
                  <Link to={`employees/${employee.id}`}>{employee.id}</Link>
                ) : (
                  ""
                )}
              </th>
              <td>{employee.title}</td>
              <td>{employee.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <em>{name} using React</em>
    </BrowserRouter>
  );
};

export default Root;
