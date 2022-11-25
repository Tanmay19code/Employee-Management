import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import React, { useRef, useState, useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import store from "../redux/store";
const { createEmployee } = require("../redux/actions/employeeActions");

const AddEmployee = ({ setShowAddPopup, setIsRefreshed }) => {
  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const mobile = useRef(0);

  const dispatch = useDispatch();

  const [response, setResponse] = useState(null);

  const validate = () => {
    let firstNameStr = firstName.current.value;
    let lastNameStr = lastName.current.value;
    let emailStr = email.current.value;
    let mobileStr = mobile.current.value;

    if (firstNameStr === "") {
      NotificationManager.error("First name cannot be empty");
      return false;
    }
    if (lastNameStr === "") {
      NotificationManager.error("Last name cannot be empty");
      return false;
    }
    if (emailStr === "") {
      NotificationManager.error("Email cannot be empty");
      return false;
    }
    if (mobileStr === "") {
      NotificationManager.error("Mobile cannot be empty");
      return false;
    }
    return true;
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
      dispatch(createEmployee(formData))
        .then((res) => {
          setResponse(res.data);
          setShowAddPopup(false);
          setIsRefreshed(true);
          NotificationManager.success("Employee added successfully");
        })
        .catch((error) => {
          console.log(error);
        });
      setIsRefreshed(false);
    }
  };

  useEffect(() => {
    console.log("response=> ", response);
  }, [response]);

  return (
    <>
      <NotificationContainer />
      <div className="popup">
        <form onSubmit={onSubmit}>
          <div className="popup_inner">
            <div className="popup_header">
              <h1>Add Employee </h1>
              <div className="filler" />
              <RiCloseFill
                size={80}
                onClick={() => {
                  setShowAddPopup(false);
                }}
              />
            </div>
            <div className="popup_body">
              <div className="popup_body_holder">
                <div className="popup_body_name_holder">
                  <div className="first_name_holder">
                    <label>First Name:</label>
                    <input type="text" required ref={firstName} />
                  </div>
                  <div className="last_name_holder">
                    <label>Last Name:</label>
                    <input type="text" required ref={lastName} />
                  </div>
                </div>
                <div className="popup_body_email_holder">
                  <div className="email_holder">
                    <label>Email:</label>
                    <input id="email_input" required type="text" ref={email} />
                  </div>
                  <div className="mobile_holder">
                    <label>Mobile:</label>
                    <input type="text" required ref={mobile} />
                  </div>
                </div>
              </div>
            </div>
            <div className="popup_body_bottom">
              <button
                className="popup_body_bottom_cancel_button"
                onClick={() => {
                  setShowAddPopup(false);
                }}
              >
                Cancel
              </button>
              <input
                className="popup_body_bottom_save_button"
                type="submit"
                value="Save"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
