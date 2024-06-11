import { stack } from "../data";

const Stack = () => {
  console.log(stack);
  return (
    <section className="p-8">
      <h2>Technical Stack</h2>
      <div className="flex flex-wrap gap-8">
        {stack.map((stack) => {
          return (
            <div className="grid grid-cols-2 border border-black p-4">
              <h2 className="col-span-2">{stack.title}</h2>

              {stack.tech.map((tech) => {
                return (
                  <div className="">
                    <p>{tech[0]}</p>
                    <img className="max-h-10" src={tech[1]} alt="" />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Stack;
