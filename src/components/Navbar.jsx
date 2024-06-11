import { nav } from "../data";

const Navbar = () => {
  return (
    <nav className="flex text-lg bg-blue-100 justify-center items-base py-6">
      <div className="grow border-b border-stone-500 p-6 "></div>
      {nav.map((link) => {
        return (
          <a className="border-b border-stone-500 px-2" to={link.link}>
            {link.name}
          </a>
        );
      })}
      <div className="grow border-b border-stone-500"></div>
    </nav>
  );
};
export default Navbar;
