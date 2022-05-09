import React, { FunctionComponent } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const NotLogged: FunctionComponent = () => {
  const navigate = useNavigate();
  const fontSize = {
    fontSize: "10em",
  };
  const connect = () => {
    navigate("/login");
  };

  return (
    <div className='container'>
      <div className='card center'>
        <div className='card-content'>
          <h1 style={fontSize}>401</h1>
          <h3>Une connection en tant qu'administrateur est requise</h3>
        </div>
        <button
          style={{ marginBottom: "20px" }}
          onClick={connect}
          className='btn'
        >
          Se connecter
        </button>
      </div>
    </div>
  );
};

export default NotLogged;
