import {
  CREATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_SUCCESS,
  GET_ALL_SUCCESS,
  GET_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE_FAILURE,
  DELETE_EMPLOYEE_FAILURE,
  GET_ALL_FAILURE,
  GET_EMPLOYEE_FAILURE,
} from "../constants/employeeConstants";
import axios from "axios";

export const createEmployee = (formData) => async (dispatch) => {
  // console.log(formData);
  try {
    const response = await axios.post("http://localhost:5000/employee/create", formData);
    console.log(response);
    dispatch({
      type: CREATE_EMPLOYEE_SUCCESS,
      payload: response,
    });
    return response;
  } catch (error) {
    dispatch({
      type: CREATE_EMPLOYEE_FAILURE,
      payload: error,
    });
    return error;
  }
};

export const updateEmployee = (id, formData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/employee/update/${id}`,
      formData
    );
    dispatch({
      type: UPDATE_EMPLOYEE_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_EMPLOYEE_FAILURE,
      payload: error,
    });
  }
};

export const deleteEmployee = (employeeId) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/employee/delete/${employeeId}`
    );
    dispatch({
      type: DELETE_EMPLOYEE_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: DELETE_EMPLOYEE_FAILURE,
      payload: error,
    });
  }
};

export const getAllEmployees = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/employee/get");
    dispatch({
      type: GET_ALL_SUCCESS,
      payload: response,
    });
    return response;
  } catch (error) {
    dispatch({
      type: GET_ALL_FAILURE,
      payload: error,
    });
    return error;
  }
};

export const getEmployee = (employeeId) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/employee/get/${employeeId}`);
    dispatch({
      type: GET_EMPLOYEE_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_EMPLOYEE_FAILURE,
      payload: error,
    });
  }
};
