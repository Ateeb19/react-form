import React from "react";
import { Link } from "react-router-dom";
import './home.css';

const Home = ({ data, onDelete }) =>{

    return (
        <div>
               <div class="table">
                <div className="text">
                    Home Page
                </div> 
                <table>
                    <thead>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Phone no.</th>
                            <th>University Name</th>
                            <th>HTML/CSS Proficiency Level</th>
                            <th>React.js Proficiency Level</th>
                            <th>WordPress Proficiency Level</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.university}</td>
                                <td>{item.html_css}</td>
                                <td>{item.react}</td>
                                <td>{item.wordpress}</td>
                                <td>
                                    <button className='button' onClick={() => onDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table><br/>
                <div className="link">
                         <Link to="/form"><button type="button" className="btn btn-info">Form</button></Link>
                </div><br/>
            </div>
        </div>
      );
}
export default Home;