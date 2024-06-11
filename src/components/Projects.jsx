import { projects } from "../data";
import Project from "./Project";

const Projects = () => {
  console.log(projects);
  return (
    <div className="p-4">
      <p className="font-medium my-6 text-2xl">Projects</p>
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => {
          return <Project project={project} />;
        })}
      </div>
    </div>
  );
};
export default Projects;
