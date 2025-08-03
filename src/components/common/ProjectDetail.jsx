import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import IntroductionDiv from "../common/IntroductionDiv";
import airdropData from "./AirdropData";
import TaskStatus from "./TaskStatus";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = airdropData[id];
  const taskState = useSelector((state) => state.task.value);

  if (!project) {
    return <div className="text-white text-center">Project not found</div>;
  }

  return (
    <div className="flex w-full h-full min-h-screen bg-background items-center justify-center">
      <div className="flex flex-col items-center w-[80%] min-h-screen bg-toggleBg m-12 rounded-lg">
        <IntroductionDiv
          name={project.name}
          type={project.type}
          logo={project.logo}
          website={project.website}
          x={project.x}
          funding={project.funding}
          backer={project.backers}
        />

        <div className="w-[95%] flex-grow m-8 flex flex-col rounded-lg min-h-[300px]">
          <div className="w-full px-6 py-4">
            <h2 className="text-secondaryText text-2xl font-semibold">
              Instructions for completing tasks and activities for {project.name}
            </h2>
            <p className="text-secondaryText text-base mt-2">
              Complete the tasks to qualify for potential {project.name} airdrops and rewards. Follow step-by-step instructions and track task updates and statuses to become one of the potential recipients of the {project.name} Airdrop.
            </p>
          </div>

          <div className="flex flex-row flex-grow h-full m-5">
            <div className="h-full w-[25%] flex-grow flex flex-col gap-4 items-center justify-center text-gray-700 font-medium">
              {Object.entries(project.tasks).map(([key, task]) => (
                <TaskStatus
                  key={key}
                  id={project.name} // ✅ project ID
                  name={task.name}
                  status={taskState[id]?.status || false} // ✅ project-level status
                  date={task.date}
                  type="airdrop"
                  link={task.link}
                />
              ))}
            </div>

            <div className="h-full w-[75%] flex-grow flex items-center justify-center text-secondaryText-400 font-medium">
              <p className="text-center text-lg">
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
