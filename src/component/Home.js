import React from "react";
import { Link } from "react-router-dom";

const Home = ({ data, onDelete }) =>{

    return (
        <div>
          <h2>Home Page</h2>
          <table border={3}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>HTML/CSS</th>
                <th>React</th>
                <th>WordPress</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.html_css}</td>
                  <td>{item.react}</td>
                  <td>{item.wordpress}</td>
                  <td>
                    <button onClick={() => onDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/form"><button type="button" className="btn btn-primary">Form</button></Link>
        </div>
      );
}
export default Home;