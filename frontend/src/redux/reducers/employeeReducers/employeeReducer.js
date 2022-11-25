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
} from "../../constants/employeeConstants";

const initialState = {
  response: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        response: payload,
      };
    case UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        response: payload,
      };
    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        response: payload,
      };
    case GET_ALL_SUCCESS:
      return {
        ...state,
        response: payload,
      };
    case GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        response: payload,
      };
    case CREATE_EMPLOYEE_FAILURE:
    case UPDATE_EMPLOYEE_FAILURE:
    case DELETE_EMPLOYEE_FAILURE:
    case GET_ALL_FAILURE:
    case GET_EMPLOYEE_FAILURE:
      return {
        ...state,
        response: payload,
      };
    default:
      return state;
  }
}
