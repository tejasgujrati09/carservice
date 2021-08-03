import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddCar = () => {
  let history = useHistory();
  const [car, setCar] = useState({
    description: "",
    brand: "",
    model: "",  
    colour: "",
    amount: "",
  });

  const { description, brand, model, colour,amount } = car;
  const onInputChange = e => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8000/addcar", car);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Car</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Car description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Car Brand"
              name="brand"
              value={brand}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Car Model"
              name="model"
              value={model}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter car colour"
              name="colour"
              value={colour}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter amount"
              name="amount"
              value={amount}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add car</button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;