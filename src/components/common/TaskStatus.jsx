import React from 'react';
import calendarIcon from '../../assets/calender.svg'; // Import the image
// Removed useNavigate as it's no longer needed for the corrected logic
import { useDispatch } from 'react-redux';
import { setTaskTrue } from "../../app/features/TaskSlice";
import { useNavigate } from 'react-router-dom';

// Destructure id directly from props for clarity
const TaskStatus = ({ name, status, date, type, link, id }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  
  const handleMarkDone = () => {
      dispatch(setTaskTrue(id))
      Navigate("/airdrop/");
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 w-80 shadow-md bg-white"> {/* Added bg-white for contrast */}
      {/* Task Name */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>

      {/* Status and Date Line */}
      <div className="flex items-center text-sm text-gray-600 mb-3">
        {/* Status Indicator */}
        <span className={`mr-1 ${status ? "text-green-500" : "text-red-500"}`}>●</span>
        <p className="mr-4">{status ? "Open" : "Closed"}</p>

        {/* Calendar Icon and Date */}
        <img src={calendarIcon} alt="Calendar" className="w-4 h-4 mr-1" />
        <p>From {date}</p> {/* Changed text slightly for clarity */}
      </div>

      {/* Task Type and Link Line */}
      <div className="flex items-center justify-between text-sm mb-4">
         {/* Task Type */}
         <span
           className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full" // Changed to rounded-full for consistency? Or keep rounded-md
         >
           Type: {type}
         </span>

         {/* Task Link (if available) */}
         {link && (
           <a
             href={link}
             target="_blank" // Open in new tab
             rel="noopener noreferrer" // Security best practice
             className="text-blue-600 hover:text-blue-800 hover:underline"
           >
             Go to Task Link
           </a>
         )}
      </div>


      {/* Done Button */}
      <button
        className='w-full text-sm p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' // Improved styling and added focus state
        onClick={handleMarkDone}
        // Optionally disable if the task is already closed or has no link?
        // disabled={!status || !link}
      >
        Mark as Done
      </button>
    </div>
  );
};

export default TaskStatus;