import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Contact = () => {
  const [contact, setContact] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("http://localhost:3000/contact");
    console.log(data);
    setContact(data);
  };
  const apiDelete = async(id) => {
    const {data} = await axios.delete(`http://localhost:3000/contact/${id}`);
    getData();
  }
  useEffect(() => {
    getData();
  }, []);
  // console.log(contact);

  return (
    <>
      <Link to={'/create'}>
        <button className=" btn btn-primary my-3">Create New Contact</button>
      </Link>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Actions </th>
            </tr>
          </thead>
          <tbody>
            {contact.map((c) => (
              <tr key={c.id}>
                <th>{c.id}</th>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td className=" cur">
                  <Link to={`/edit/${c.id}`}>
                  <AiFillEdit className=" one text-success me-3" />
                  </Link>
                  <AiFillDelete onClick={() => apiDelete(c.id)} className=" one text-danger" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contact;
