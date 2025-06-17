import { links } from "../data";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-emerald-100 fixed w-full">
        <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-4">
          <h2 className="text-3xl font-bold">
            Web<span className="text-emerald-600">Dev</span>
          </h2>
          <div className="flex gap-x-3">
            {links.map((link) => {
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className="capitalize tracking-wide text-lg hover:text-emerald-600 duration-300 py-2 md:py-0"
                >
                  {link.text}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};
