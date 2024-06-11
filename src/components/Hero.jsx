const photo = "/photo.JPG";

const Hero = () => {
  return (
    <div className="bg-blue-100 p-6">
      <div className="flex items-center justify-around">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl ">Louisa Steup</h1>
          <p>Full-Stack Developer</p>
          <div className="flex gap-2">
            <p>Github</p>
            <p>LinkedIn</p>
            <p>Resume</p>
          </div>
        </div>
        <img className="max-w-96" src={photo} alt="" />
      </div>
    </div>
  );
};
export default Hero;
