import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [color, setColor] = useState();
  const [price, setPrice] = useState();
  const [comments, setComments] = useState();

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3003/createProduct", {
        name,
        category,
        color,
        price,
        comments,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Products </h2>
          <div className="mb-2">
            <label htmlFor="">Product Name</label>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Category</label>
            <input
              type="text"
              placeholder="Enter Category"
              className="form-control"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Price in $</label>
            <input
              type="text"
              placeholder="Enter Price"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Color</label>
            <input
              type="text"
              placeholder=""
              className="form-control"
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Comments</label>
            <input
              type="text"
              placeholder=""
              className="form-control"
              onChange={(e) => setComments(e.target.value)}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
