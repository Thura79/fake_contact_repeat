import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmial] = useState("");
  const [phone, setPhone] = useState("");
  const apiCreateContact = async(contact) => {
    const {data} = await axios.post("http://localhost:3000/contact",contact);
    // console.log(data);
  }

  const submithandle = (e) => {
    e.preventDefault();
    const contact = {
      name, 
      email,
      phone
    };
    navigate("/")
    apiCreateContact(contact);

  }
  return (
    <div className=" d-flex ">
      <form onSubmit={submithandle} className=" border rounded p-5 mx-auto my-5 shadow">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text" onChange={e => setName(e.target.value)}
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email" onChange={e => setEmial(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Phone Number
          </label>
          <input
            type="number" onChange={e => setPhone(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Create
        </button>
        <Link to={'/'}>
        <button type="submit" className="btn btn-danger ms-3">
          Cancel
        </button>
        </Link>
      </form>
    </div>
  );
};

export default Create;
