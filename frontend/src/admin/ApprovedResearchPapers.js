import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { deleteRoomType,getAllApprovedsResearchPapers } from "./helper/userapicall";
import ImageHelper from "../core/helper/ImageHelper";

const ManageResearchPapers = () => {
  const [ResearchPapers, setResearchPapers] = useState([]);

  const { user, token } = isAutheticated();


  const preload = () => {
    getAllApprovedsResearchPapers().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setResearchPapers(data);
      }
    });
  };
  

  useEffect(() => {
    preload();
  }, []);

  const deleteThisProduct = (productId) => {
    deleteRoomType(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base navigation="" title="Admin" description="Available Rooms">
      <div className="container bg-secondary p-4">
      <Link className="btn btn=md btn-dark mb-3" to={`/user/researcher-tasks`}>
          <span className="">Go Back</span>
        </Link><br/>
      <div className="bg-dark text-white rounded">
        <div className="col-12 mt-3 py-3">
          <h2 className="text-center my-3">Available Rooms for Now</h2>
          <div className="container p-4">
            <table border="0" width="100%">
              <tr>
                <th  className="bg-primary text-white"> Index</th>
                <th className="bg-primary text-white"> Document</th>
                <th className="container bg-primary p-4"> Research Title</th>
                <th className="container bg-primary p-4"> Description</th>
                <th className="container bg-primary p-4"> Authors' Names</th>
                <th className="container bg-primary p-4"> N.of Pages</th>
               <th className="container bg-primary p-4"> Remove</th>
               <th className="container bg-primary p-4"> Make Payments </th>
              </tr>
              {ResearchPapers.map((ResearchPapers, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}ICAF-R</td>
                    <td>
                      <ImageHelper className="mr-3" product={ResearchPapers} />
                    </td>
                    <td>{ResearchPapers.title}</td>
                    <td>{ResearchPapers.description}</td>
                    <td>{ResearchPapers.authorsnames}</td>
                    <td>{ResearchPapers.numberofpages}</td>
                
                    <td>
                      <button
                        onClick={() => {
                          deleteThisProduct(ResearchPapers._id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link
                        className="btn btn-warning"
                        to={`/research-paper/payments/${ResearchPapers._id}`}
                      >
                        <span className="">Present on ICAF</span>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
              </div>

      <br/><br/><br/><br/>
      <center><p style={{color:"gray",fontSize:"14px"}}>2021 ICAF, all rights reserved. #Developer: Thathsara Hewage * IT19220116 - SLIIT</p></center>
    </Base>
  );
};

export default ManageResearchPapers;
