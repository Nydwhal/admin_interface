import React, { FunctionComponent } from "react";
const Loading: FunctionComponent = () => {
  return (
    <div className='progress'>
      <div className='indeterminate'></div>
    </div>
  );
};

export default Loading;
