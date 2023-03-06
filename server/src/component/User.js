import React from "react";

function User({ user, handelclick, select }) {
  return (
    <div>
      <h1 className="user-tittle">Users</h1>
      {user.map((item) => (
        <div key={item.id}>
          {" "}
          <ul>
            <li>
              {item.name}
              <button className="user-button" onClick={() => handelclick(item.id)}>select</button>
            </li>
          </ul>
        </div>
      ))}
      <p>Email of the selected user : {select && select.email}</p>
    </div>
  );
}
export default User;
