import React from "react";

const UserList = ({ children, isLoading, ...props }) => {
  return (
    <ul 
      className="flex flex-col gap-2 rounded-lg border border-slate-300 shadow-md h-96 p-3 overflow-y-scroll"
      {...props}
    >
        {isLoading ? "Loading..." : children}
    </ul>
  )
}

const UserListItem = ({ children, data, ...props }) => {
  return (
    <li 
      className="flex flex-col"
      {...props}
    > 
      <h6 className="font-bold">{data?.name}</h6>
      <p className="text-gray-500 text-sm">{data?.email}</p>
    </li>
  )
}

UserList.Item = UserListItem

export default UserList