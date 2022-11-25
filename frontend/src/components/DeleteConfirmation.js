import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/actions/employeeActions";

const DeleteConfirmation = ({
  setShowDeleteConfirm,
  setDeletePermission,
  popupData,
  setIsRefreshed,
  isRefreshed,
}) => {
  const dispatch = useDispatch();

  const deleteFunc = () => {
    dispatch(deleteEmployee(popupData._id))
      .then((res) => {
        console.log(res);
        setIsRefreshed(true);
        setDeletePermission(false);
        setShowDeleteConfirm(false);
        NotificationManager.success("Employee deleted successfully");
      })
      .catch((error) => {
        console.log(error);
        setShowDeleteConfirm(false);
        NotificationManager.error("Error deleting employee");
      });

    setIsRefreshed(false);
  };
  return (
    <div className="popup">
      <div className="popup_inner_delete">
        <div className="popup_header_delete">
          <h1>Are you sure ?</h1>
          <div className="filler" />
        </div>
        {/* <div className="popup_body_delete"></div> */}
        <div className="popup_body_bottom_delete">
          <button
            className="popup_body_bottom_cancel_button"
            onClick={() => {
              setDeletePermission(false);
              setShowDeleteConfirm(false);
            }}
          >
            Cancel
          </button>
          <button
            id="deleteButton"
            className="popup_body_bottom_save_button"
            onClick={() => {
              deleteFunc();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
