import React from "react";
import IntroductionDiv from "../common/IntroductionDiv";
import airdropData from "./AirdropData";
import { useParams } from "react-router-dom";
import TaskStatus from "./TaskStatus";

const ProjectDetail = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const project = airdropData[id]; // Fetch the project data using the ID

  // Handle case where the project is not found
  if (!project) {
    return <div className="text-white text-center">Project not found</div>;
  }

  return (
    <div className="flex w-full h-full min-h-screen bg-[#09090a] items-center justify-center">
      <div className="flex flex-col items-center w-[80%] min-h-screen bg-white m-12 rounded-lg">
        {/* Project Introduction */}
        <IntroductionDiv
          name={project.name}
          type={project.type}
          logo={project.logo}
          website={project.website}
          x={project.x}
          funding={project.funding}
          backer={project.backers}
        />

        {/* Task Summary Section */}
        <div className="w-[95%] flex-grow m-8 flex flex-col rounded-lg min-h-[300px]">
          <div className="w-full px-6 py-4">
            <h2 className="text-gray-800 text-2xl font-semibold">
              Instructions for completing tasks and activities for {project.name}
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Complete the tasks to qualify for potential {project.name} airdrops and rewards. Follow step-by-step instructions and track task updates and statuses to become one of the potential recipients of the {project.name} Airdrop.
            </p>
          </div>

          {/* Main Task Detail */}
          <div className="flex flex-row flex-grow h-full m-5">
            {/* Task Status */}
            <div className="h-full w-[25%] flex-grow flex items-center justify-center text-gray-700 font-medium">
              <TaskStatus
                name={project.tasks.task1.name}
                status={project.tasks.task1.status}
                date={project.tasks.task1.date}
                type="airdrop"
                link={project.tasks.task1.link}
                id={id} // Use the project ID from useParams
              />
            </div>

            {/* Task Detail */}
            <div className="h-full w-[75%] flex-grow flex items-center justify-center text-gray-700 font-medium">
              {/* Add additional task details or instructions here */}
              <p className="text-center">
                Follow the instructions provided to complete the tasks and qualify for rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;