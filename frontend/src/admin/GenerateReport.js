import React, { useState, useEffect, useRef } from "react";
import { isAutheticated } from "../auth/helper";
import {useReactToPrint}  from 'react-to-print';
import ManageActivities from './ManageActivities';
import {render} from 'react-dom';


const GenerateReport = () => {

  const { user, token } = isAutheticated();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
    <ManageActivities ref={componentRef} />
    <button onClick={handlePrint}>Print this out!</button>
  </div>
  );
};

render(<ManageActivities/>, document.querySelector("#root"));
export default GenerateReport;
