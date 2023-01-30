import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const {id} = useParams();
  const [name, setName] = useState("");
  const [email, setEmial] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const getSinglecontact = async() => {
    const {data} = await axios.get(`http://localhost:3000/contact/${id}`);
    console.log(data);
    setName(data.name);
    setEmial(data.email);
    setPhone(data.phone);
  }

  useEffect(() => {
    getSinglecontact()
  }, [])

  const apiupdate = async(contact) => {
    const {data} = await axios.patch(`http://localhost:3000/contact/${id}`, contact);
    console.log(data);

  }
  
  const submithandle = (e) => {
    e.preventDefault();
    const contact = {
      name, 
      email,
      phone
    };
    navigate("/")

    apiupdate(contact);

  }

  return (
    <div className=" d-flex ">
      <form onSubmit={submithandle} className=" border rounded p-5 mx-auto my-5 shadow">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text" onChange={e => setName(e.target.value)} value={name}
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
            type="email" onChange={e => setEmial(e.target.value)} value={email}
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
            type="number" onChange={e => setPhone(e.target.value)} value={phone}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        
        <button type="submit" className="btn btn-success">
          Update
        </button>
        <Link to={'/'}>
        <button type="submit" className="btn btn-danger ms-3">
          Cancel
        </button>
        </Link>
      </form>
    </div>
  )
}

export default Edit