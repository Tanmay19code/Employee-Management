import React from "react";

const Header = () => {
  return (
    <tr className="tableRow tableHeader">
      <th>Employee Id</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Mobile</th>
      <th colSpan={2}>
        Actions
      </th>
      
    </tr>
  );
};

export default Header;
