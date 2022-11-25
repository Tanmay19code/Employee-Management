import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import React from "react";
import { TbEdit } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/actions/employeeActions";

const Row = ({
  _id,
  employeeId,
  firstName,
  lastName,
  email,
  mobile,
  setShowPopup,
  setShowDeleteConfirm,
  setPopupData,
  popupData,
  setDeletePermission,
  deletePermission,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    setShowDeleteConfirm(true);
    setPopupData({
      ...popupData,
      _id: _id,
    });

  };

  return (
    <>
      <NotificationContainer />
      <tr className="tableRow">
        <td>{_id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{mobile}</td>
        <td>
          <div className="actions">
            <TbEdit
              className="edit"
              size={23}
              onClick={() => {
                setPopupData({
                  _id: _id,
                  employeeId: employeeId,
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  mobile: mobile,
                });
                setShowPopup(true);
              }}
            />
            <MdOutlineDelete
              size={22}
              className="delete"
              onClick={(e) => {
                handleDelete(e);
              }}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default Row;
