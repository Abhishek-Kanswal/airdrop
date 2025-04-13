import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import airdropData from "../common/AirdropData";

const InnerContainer = ({ imgUrl, projectId }) => {
  const navigate = useNavigate();

  const projectStatus = airdropData[projectId]?.status;
  const taskStatus = useSelector((state) => state.task.value[projectId]);
  const project = airdropData[projectId];

  if (!project) {
    console.error(`Project with ID "${projectId}" not found in airdropData.`);
    return null;
  }

  const handleSingleClick = () => {
      navigate(`/airdrop/${projectId}`);
  };

  return (
    <div
      className="flex items-center justify-center flex-col bg-[rgba(255,255,255,0.1)] m-6 rounded-lg border-2 border-gray-400 transition-all duration-200 hover:bg-[rgba(255,255,255,0.2)] hover:border-gray-400 hover:shadow-[0_0_15px_rgba(128,128,128,0.6)] hover:scale-105 select-none"
      onClick={handleSingleClick}
    >
      <div className="flex items-center justify-center flex-row">
        <img
          src={imgUrl}
          className="w-[70px] h-[70px] m-5 rounded-full"
          alt="Project Logo"
        />
        <div className="text-2xl font-bold text-[#00ff99] p-2 flex flex-col">
          <div
            className={
              projectStatus ? "mb-2 ml-2 text-[#1c8d62] text-3xl" : "mb-2 ml-2 text-[#ff0000] text-3xl"
            }
          >
            •
          </div>
          {projectStatus && (
            <p className="text-center mb-6">{taskStatus ? "✅" : "❌"}</p>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default InnerContainer;