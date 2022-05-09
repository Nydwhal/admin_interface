import React, { FunctionComponent } from "react";
const PageNotFound: FunctionComponent = () => {
  const fontSize = {
    fontSize: "10em",
  };

  return (
    <div className='container'>
      <div className='card center'>
        <div className='card-content'>
          <h1 style={fontSize}>404</h1>
          <h3>Page introuvable</h3>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
