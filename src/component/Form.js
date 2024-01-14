import React, { useState } from "react";
import { useNavigate } from "react-router-dom"


const Form = ({ onSubmit }) =>{

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        university: '',
        html_css: '',
        react: '',
        wordpress: '',
    });

    const handlechange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const submitbutton = (e) =>{
        e.preventDefault();
        onSubmit(formData);
        alert('Data stored successfully!');
        navigate('/');
    };


    return(
        <div>
        {/* <form onSubmit={submitbutton}>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-3">
                        <div className="ps-5">
                        <label className="form-label fs-5 mt-2" >Name : </label><br></br>
                        <label className="form-label fs-5 mt-4" >Email : </label><br></br>
                        <label className="form-label fs-5 mt-4" >Phone : </label><br></br>
                        <label className="form-label fs-5 mt-4" >University Name : </label><br></br>
                        <label className="form-label fs-5 mt-3" >HTML/CSS Proficiency Level : </label><br></br>
                        <label className="form-label fs-5 mt-3" >React.js Proficiency Level : </label><br></br>
                        <label className="form-label fs-5 mt-3" >WordPress Proficiency Level : </label>
                        </div>
                    </div>
                    <div className="col-5">
                        <input required className="form-control" type="text" name="name" onChange={handlechange} value={formData.name}></input><br></br>
                        <input required className="form-control" type="email" name="email" onChange={handlechange} value={formData.email}></input><br></br>
                        <input required className="form-control" type="tel" name="phone" pattern="[0-9]{10}" placeholder="1234567890" onChange={handlechange} value={formData.phone}></input><br></br>
                        <input required className="form-control" type="text" name="university" onChange={handlechange} value={formData.university} ></input><br></br>
                        <div className="form">
                        <input required className="form-check-input me-1" type="radio" name="html_css" id="beginner" onChange={handlechange} value="beginner"    ></input> 
                        <label className="form-check-label me-3">Beginner</label>
                        <input required className="form-check-input me-1" type="radio" name="html_css" id="intermediate" onChange={handlechange} value="intermediate"    ></input> 
                        <label className="form-check-label me-3">Intermediate</label>
                        <input required className="form-check-input me-1" type="radio" name="html_css" id="Advanced" onChange={handlechange} value="Advanced"    ></input> 
                        <label className="form-check-label me-3">Advanced</label>
                        <input required className="form-check-input me-1" type="radio" name="html_css" id="I_dont_know" onChange={handlechange} value="I_dont_know"  ></input> 
                        <label className="form-check-label me-3">I don't know</label><br></br>
                        </div>
                        <div className="form">
                        <input required className="form-check-input me-1" type="radio" name="react" id="beginner" onChange={handlechange} value="beginner"></input> 
                        <label className="form-check-label me-3">Beginner</label>
                        <input required className="form-check-input me-1" type="radio" name="react" id="intermediate" onChange={handlechange} value="intermediate"></input> 
                        <label className="form-check-label me-3">Intermediate</label>
                        <input required className="form-check-input me-1" type="radio" name="react" id="Advanced" onChange={handlechange} value="Advanced"></input> 
                        <label className="form-check-label me-3">Advanced</label>
                        <input required className="form-check-input me-1" type="radio" name="react" id="I_dont_know" onChange={handlechange} value="I_dont_know"></input> 
                        <label className="form-check-label me-3">I don't know</label><br></br>
                        </div>
                        <div className="form">
                        <input required className="form-check-input me-1" type="radio" name="wordpress" id="beginner" onChange={handlechange} value="beginner"></input> 
                        <label className="form-check-label me-3">Beginner</label>
                        <input required className="form-check-input me-1" type="radio" name="wordpress" id="intermediate" onChange={handlechange} value="intermediate"></input> 
                        <label className="form-check-label me-3">Intermediate</label>
                        <input required className="form-check-input me-1" type="radio" name="wordpress" id="Advanced" onChange={handlechange} value="Advanced"></input> 
                        <label className="form-check-label me-3">Advanced</label>
                        <input required className="form-check-input me-1" type="radio" name="wordpress" id="I_dont_know" onChange={handlechange} value="I_dont_know"></input> 
                        <label className="form-check-label me-3">I don't know</label><br></br>
                        </div>
                        <button className="btn btn-primary" type="submit"> Submit </button>
                    </div>
                </div>
            </div>
            </form> */}


            <div className="container">
                <div className="text">
                    Submit Your Details
                </div>
                <form action= 'post' onSubmit={submitbutton}>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" name="name" required onChange={handlechange} value={formData.name}/>
                                <div className="underline"></div>
                                <label for="">Name</label>
                        </div>
                        <div className="input-data">
                            <input type="tel" name="phone" required onChange={handlechange} value={formData.phone} />
                                <div className="underline"></div>
                                <label for="">Phone no.</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="email" name="email" required onChange={handlechange} value={formData.email}/>
                                <div className="underline"></div>
                                <label for="">Email Address</label>
                        </div>
                        <div className="input-data">
                            <input type="text" name="university" required onChange={handlechange} value={formData.university}/>
                                <div className="underline"></div>
                                <label for="">University</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="radio-data">
                            <label for=''>HTML/CSS Proficiency Level</label>
                            <div>
                                <input required className="btn-check me-1" type="radio" autocomplete="off" name="html_css" id="btnradio1" onChange={handlechange} value="beginner"    ></input>
                                <label className="btn btn-outline-primary me-3" for="btnradio1" >Beginner</label>
                                <input required className="btn-check me-1" type="radio" autocomplete="off" name="html_css" id="btnradio2" onChange={handlechange} value="intermediate"    ></input>
                                <label className="btn btn-outline-primary me-3" for="btnradio2" >Intermediate</label>
                                <input required className="btn-check me-1" type="radio" autocomplete="off" name="html_css" id="btnradio3" onChange={handlechange} value="Advanced"    ></input>
                                <label className="btn btn-outline-primary me-3" for="btnradio3" >Advanced</label>
                                <input required className="btn-check me-1" type="radio" autocomplete="off" name="html_css" id="btnradio4" onChange={handlechange} value="I_dont_know"  ></input>
                                <label className="btn btn-outline-primary me-3" for="btnradio4" >I don't know</label><br></br>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="radio-data">
                            <label for=''>React.js Proficiency Level</label>
                            <div >
                                <input required className="btn-check me-1" type="radio" name="react" id="btnradi1" onChange={handlechange} value="beginner"></input> 
                                <label className="btn btn-outline-primary me-3" for='btnradi1'>Beginner</label>
                                <input required className="btn-check me-1" type="radio" name="react" id="btnradi2" onChange={handlechange} value="intermediate"></input> 
                                <label className="btn btn-outline-primary me-3" for='btnradi2'>Intermediate</label>
                                <input required className="btn-check me-1" type="radio" name="react" id="btnradi3" onChange={handlechange} value="Advanced"></input> 
                                <label className="btn btn-outline-primary me-3" for='btnradi3'>Advanced</label>
                                <input required className="btn-check me-1" type="radio" name="react" id="btnradi4" onChange={handlechange} value="I_dont_know"></input> 
                                <label className="btn btn-outline-primary me-3" for='btnradi4'>I don't know</label><br></br>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="radio-data">
                            <label for=''>WordPress Proficiency Level</label>
                            <div >
                                <input required className="btn-check me-1" type="radio" name="wordpress" id="btnrad1" onChange={handlechange} value="beginner"></input> 
                                <label className="btn btn-outline-primary me-3" for='btnrad1'>Beginner</label>
                                <input required className="btn-check me-1" type="radio" name="wordpress" id="btnrad2" onChange={handlechange} value="intermediate"></input> 
                                <label className="btn btn-outline-primary me-3" for='btnrad2'>Intermediate</label>
                                <input required className="btn-check me-1" type="radio" name="wordpress" id="btnrad3" onChange={handlechange} value="Advanced"></input> 
                                <label className="btn btn-outline-primary me-3" for='btnrad3'>Advanced</label>
                                <input required className="btn-check me-1" type="radio" name="wordpress" id="btnrad4" onChange={handlechange} value="I_dont_know"></input> 
                                <label className="btn btn-outline-primary me-3" for='btnrad4'>I don't know</label><br></br>
                            </div>
                        </div>
                    </div>
                    <div class="form-row submit-btn">
                        <div class="input-data">
                            <div class="inner"></div>
                            <input type="submit" value="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;