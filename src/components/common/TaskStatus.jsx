import React from "react";
import calendarIcon from "../../assets/calender.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTaskTrue } from "../../app/features/TaskSlice";

const TaskStatus = ({ name, status, date, type, link, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMarkDone = () => {
  dispatch(setTaskTrue(id)); // Ensure `id` matches the key in Redux state
  navigate("/app");
};

  return (
    <div className="border border-outline rounded-lg p-4 w-80 shadow-md bg-outline">
      <h2 className="text-lg font-semibold text-foreground mb-2">{name}</h2>

      <div className="flex items-center text-sm text-foreground mb-3">
        <span className={`mr-1 ${status ? "text-green-500" : "text-red-500"}`}>●</span>
        <p className="mr-4">{status ? "Completed" : "Not Done"}</p>
        <img src={calendarIcon} alt="Calendar" className="w-4 h-4 mr-1" />
        <p>From {date}</p>
      </div>

      <div className="flex items-center justify-between text-sm mb-4">
        <span className="inline-block text-bold text-foreground text-xs px-3 py-1 rounded-full">
          Type: {type}
        </span>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-800 hover:underline"
          >
            Go to Task Link
          </a>
        )}
      </div>

      <button
        disabled={status}
        onClick={handleMarkDone}
        className={`w-full text-sm p-2 text-white rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
        ${status ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`}
      >
        {status ? "Task Completed" : "Mark as Done"}
      </button>
    </div>
  );
};

export default TaskStatus;
