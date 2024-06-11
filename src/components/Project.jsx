import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Project = ({ project }) => {
  return (
    <div className=" border border-black rounded max-w-lg my-6">
      <Carousel
        className="w-xs  mx-auto "
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
      >
        {project.images.map((image) => {
          return <img src={image}></img>;
        })}
      </Carousel>
      <div className="p-6">
        <h1 className="font-medium text-xl my-4">{project.title}</h1>
        <p>{project.description}</p>
        <div>
          {project.links.map((link) => {
            return <p>{link}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
export default Project;
