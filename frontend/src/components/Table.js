import React from "react";
import Row from "./Row";
import "../stylesheets/homepage.style.css";
import Header from "./Header";

const Table = ({
  data,
  setShowPopup,
  popupData,
  setPopupData,
  setShowDeleteConfirm,
  
}) => {
  // console.log(data);
  return (
    <div>
      <table className="table table-striped table-bordered">
        <tbody>
          <Header />
          {data.count > 0 ? (
            data.data.map((employee) => (
              <Row
                key={employee._id}
                _id={employee._id}
                employeeId={employee.employeeId}
                firstName={employee.firstName}
                lastName={employee.lastName}
                email={employee.email}
                mobile={employee.mobile}
                setShowPopup={setShowPopup}
                setShowDeleteConfirm={setShowDeleteConfirm}
                setPopupData={setPopupData}
                popupData={popupData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" align="center">
                <h3>No employees found</h3>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
