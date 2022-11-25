import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { RiCloseFill } from "react-icons/ri";
import { updateEmployee } from "../redux/actions/employeeActions";

const Popup = ({ setShowPopup, popupData, setIsRefreshed, isRefreshed }) => {
  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const mobile = useRef(0);

  const dispatch = useDispatch();

  const [response, setResponse] = useState(null);

  const validate = () => {
    if (data.firstName === "") {
      NotificationManager.error("First name cannot be empty");
      return false;
    }
    if (data.lastName === "") {
      NotificationManager.error("Last name cannot be empty");
      return false;
    }
    if (data.email === "") {
      NotificationManager.error("Email cannot be empty");
      return false;
    }
    if (data.mobile === "") {
      NotificationManager.error("Mobile cannot be empty");
      return false;
    }
    return true;
  };

  const [data, setData] = useState(popupData);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    if (!validate()) return;
    else {
      e.preventDefault();
      setIsRefreshed(true);
      const formData = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        mobile: mobile.current.value,
      };
      // console.log(" formdata=> ", formData);
      dispatch(updateEmployee(data._id, formData))
        .then((res) => {
          setResponse(res);
          setShowPopup(false);
          setIsRefreshed(true);
          NotificationManager.success("Employee updated successfully");
        })
        .catch((err) => {
          console.log(err);
          NotificationManager.error("Error updating employee");
        });
    }
  };

  return (
    <div className="popup">
      <form onSubmit={onSubmit}>
        <div className="popup_inner">
          <div className="popup_header">
            <h1>Employee Details</h1>
            <div className="filler" />
            <RiCloseFill
              size={80}
              onClick={() => {
                setShowPopup(false);
              }}
            />
          </div>
          <div className="popup_body">
            <div className="employee_id_holder">
              <div className="popup_employee_id">
                <label>Employee Id:</label>
                <p>{data._id}</p>
              </div>
            </div>
            <div className="popup_body_holder">
              <div className="popup_body_name_holder">
                <div className="first_name_holder">
                  <label>First Name:</label>
                  <input
                    type="text"
                    value={data.firstName}
                    name="firstName"
                    ref={firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="last_name_holder">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    value={data.lastName}
                    name="lastName"
                    ref={lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="popup_body_email_holder">
                <div className="email_holder">
                  <label>Email:</label>
                  <input
                    id="email_input"
                    type="text"
                    value={data.email}
                    name="email"
                    ref={email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mobile_holder">
                  <label>Mobile:</label>
                  <input
                    type="text"
                    value={data.mobile}
                    name="mobile"
                    ref={mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="popup_body_bottom">
            <button
              className="popup_body_bottom_cancel_button"
              onClick={() => {
                setShowPopup(false);
              }}
            >
              Cancel
            </button>
            <button className="popup_body_bottom_save_button">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Popup;
