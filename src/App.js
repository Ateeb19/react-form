import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './component/style.css';
import Form from './component/Form';
import Home from './component/Home';

const App = () => {
  const [formDataList, setFormDataList] = useState([]);

  const handleSubmitForm = (formData) => {
    // Update the state with new form data
    setFormDataList([...formDataList, formData]);

    // Store form data in local storage
    localStorage.setItem('formDataList', JSON.stringify([...formDataList, formData]));
  };

  const handleDelete = (index) => {
    if(window.confirm("delete?")){
    // Remove the selected data from the list
    const updatedList = formDataList.filter((_, i) => i !== index);
    setFormDataList(updatedList);

    // Update local storage with the modified list
    localStorage.setItem('formDataList', JSON.stringify(updatedList));
    }
    // else{

    // }

  };

  return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home data={formDataList} onDelete={handleDelete} />}/>
        <Route path="/form" element= {<Form onSubmit={handleSubmitForm} />}/>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
