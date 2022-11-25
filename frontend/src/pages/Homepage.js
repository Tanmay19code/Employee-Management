import React, { useEffect, useState } from "react";
import Row from "../components/Row";
import Table from "../components/Table";
import "react-notifications/lib/notifications.css";

import { getAllEmployees } from "../redux/actions/employeeActions";
import { useDispatch } from "react-redux";
import store from "../redux/store";

import { HiRefresh } from "react-icons/hi";

// import useEffect
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Popup from "../components/Popup";
import AddEmployee from "../components/AddEmployee";
import DeleteConfirmation from "../components/DeleteConfirmation";

const Homepage = () => {
  const [response, setResponse] = useState(
    store.getState().employee.response.data
  );

  const [isRefreshed, setIsRefreshed] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({});

  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const [deletePermission, setDeletePermission] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployees())
      .then((res) => {
        // console.log(res);
        setResponse(res.data);
        console.log(response);
        setIsRefreshed(false);
      })
      .catch((error) => {
        console.log(error);
        NotificationManager.error("Error loading data");
        setIsRefreshed(false);
      });
  }, [response.data.count, isRefreshed]);

  return (
    <>
      <NotificationContainer />
      {/* <Popup/> */}
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          popupData={popupData}
          setIsRefreshed={setIsRefreshed}
          isRefreshed={isRefreshed}
        />
      )}
      {showAddPopup && (
        <AddEmployee
          setShowAddPopup={setShowAddPopup}
          setIsRefreshed={setIsRefreshed}
          isRefreshed={isRefreshed}
        />
      )}
      {showDeleteConfirm && (
        <DeleteConfirmation
          setShowDeleteConfirm={setShowDeleteConfirm}
          setDeletePermission={setDeletePermission}
          popupData={popupData}
          setIsRefreshed={setIsRefreshed}
          isRefreshed={isRefreshed}
        />
      )}
      <h1 className="heading">Employee List</h1>
      <div className="buttonHolder">
        <button
          className="addEmployeeButton"
          onClick={() => {
            setShowAddPopup(true);
          }}
        >
          <p>Add Employee</p>
        </button>
        <div className="filler"></div>
        <button
          className="addEmployeeButton"
          onClick={() => {
            setIsRefreshed(true);
          }}
        >
          <HiRefresh size={22} />
        </button>
      </div>
      <Table
        data={response.data}
        setShowPopup={setShowPopup}
        setPopupData={setPopupData}
        setShowDeleteConfirm={setShowDeleteConfirm}
        popupData={popupData}
        setDeletePermission={setDeletePermission}
        deletePermission={deletePermission}
        setIsRefreshed={setIsRefreshed}
        isRefreshed={isRefreshed}
      />
    </>
  );
};

export default Homepage;
