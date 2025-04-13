import React, { useEffect } from 'react';
import Heading from '../components/ui/Heading';
import Container from '../components/ui/Container';
import airdropData from '../components/common/AirdropData';
import { useSelector} from 'react-redux';

const Airdrop = () => {
  const [activeProject, SetActiveProject] = React.useState([]);
  const [inactiveProject, SetInactiveProject] = React.useState([]);
  const [showPastProject, SetShowPastProject] = React.useState(false);

  const InitialValueTask = () => {
    const a = useSelector(state => state.task.value)
    return a
  }

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  useEffect(()=> {
    const projects = Object.values(airdropData);
    const active = projects.filter(project => project.status === true)
    const inactive = projects.filter(project => project.status === false)

    SetActiveProject(()=> chunkArray(active, 7))
    SetInactiveProject(()=> chunkArray(inactive, 7))
    console.log(InitialValueTask)

  },[])

  return (
    <div className="flex w-full min-h-screen bg-gradient-to-r from-[#09090a] to-[rgb(9,9,10)] items-center justify-center p-4">
      <div className="relative h-[700px] w-[80%] rounded-2xl bg-black shadow-[0_4px_10px_rgba(255,255,255,0.1)] border border-gray-600 overflow-hidden">
        
        <div className="absolute bottom-0 left-0 right-0 h-full overflow-y-auto p-4 bg-[#f8f9fa] rounded-lg">
          <Heading text="Airdrop Projects" />
          
          {activeProject.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-center flex-row">
              {row.map((project, projectIndex) => (
                <Container
                key={projectIndex}
                imgUrl={project.logo}
                text={project.name}
                projectId={project.name} // Ensure this matches the keys in airdropData
              />
              ))}
            </div>
          ))}
  
          <button
            className='bg-gradient-to-r from-[#2a2a2e] to-[#414148] text-[#d3d3d3] font-bold py-2 px-4 rounded-full m-4 hover:bg-[#00cc7a] transition duration-300 ease-in-out'
            onClick={() => SetShowPastProject(!showPastProject)}
          >
            {showPastProject ? "Hide Past Projects" : "Show Past Projects"}
          </button>
  
          {showPastProject && (
            inactiveProject.map((row, rowIndex) => (
              <div key={rowIndex} className="flex items-center flex-row">
                {row.map((project, projectIndex) => (
                  <Container
                    key={projectIndex}
                    imgUrl={project.logo}
                    text={project.name}
                    projectId={project.name}
                  />
                ))}
              </div>
            ))
          )}
  
        </div>
      </div>
    </div>
  );  
}

export default Airdrop;