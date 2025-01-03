import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

// Row Component
const Row = ({ data, i, users, OnEditFunction }) => {
  return (
    <tr key={i}>
      {/* Image Column */}
      <td className={`${Text}`}>
        <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={`/images/${data.image || "tv.png"}`}
            alt={data?.fullName}
          />
        </div>
      </td>
      {/* ID Column */}
      <td className={`${Text}`}>
        {data._id || "2R75T8"}
      </td>
      {/* Date Column */}
      <td className={`${Text}`}>
        {data.createdAt || "12 Jan 2023"}
      </td>
      {/* Full Name or Title */}
      <td className={`${Text}`}>
        {users ? data.fullName : data.title}
      </td>
      {/* Email Column */}
      <td className={`${Text}`}>
        {data.email}
      </td>
      {/* Action Buttons */}
      {users ? (
        // For Users: Only delete action
        <td className={`${Text}`}>
          <button className="bg-subMain text-white rounded flex-colo w-6 h-6">
            <MdDelete />
          </button>
        </td>
      ) : (
        // For Non-User Data: Edit and delete actions
        <td className={`${Text} flex gap-2 justify-end`}>
          <button
            onClick={() => OnEditFunction(data)}
            className="border border-border bg-dry flex-row gap-2 text-border rounded py-1 px-2"
          >
            Edit <FaEdit className="text-green-500" />
          </button>
          <button className="bg-subMain text-white rounded flex-colo w-6 h-6">
            <MdDelete />
          </button>
        </td>
      )}
    </tr>
  );
};

// Table Component
function Table2({ data, users, OnEditFunction }) {
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            {/* Conditional Headers based on "users" flag */}
            {users ? (
              <>
                <th scope="col" className={`${Head}`}>Image</th>
                <th scope="col" className={`${Head}`}>Id</th>
                <th scope="col" className={`${Head}`}>Date</th>
                <th scope="col" className={`${Head}`}>Full Name</th>
                <th scope="col" className={`${Head}`}>Email</th>
              </>
            ) : (
              <>
                <th scope="col" className={`${Head}`}>Image</th>
                <th scope="col" className={`${Head}`}>Id</th>
                <th scope="col" className={`${Head}`}>Date</th>
                <th scope="col" className={`${Head}`}>Title</th>
                <th scope="col" className={`${Head}`}>Email</th>
                <th scope="col" className={`${Head}`}>Hours</th>
              </>
            )}
            <th scope="col" className={`${Head} text-end`}>Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-grey-800">
          {data?.map((data, i) => (
            <Row key={i} data={data} i={i} users={users} OnEditFunction={OnEditFunction} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
