import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const Header = () => {
  return (
    <header className="flex w-dvw bg-secondary min-h-[54px] sticky top-0 z-1">
      {/* Menu md>= */}
      <div className="hidden md:grid grid-cols-3 w-full">
        <a href="#hero" className="relative left-2 flex items-center py-1 gap-4">
          <img src="/heart.png" alt="Logo" width={50} height={60} />
          <span className="min-w-fit font-bold text-center text-2xl text-secondary-content">
            Alívio & Vida
          </span>
        </a>
        <nav className="hidden md:flex px-1 text-xl gap-10 lg:gap-15 font-bold items-center mx-auto">
          <a
            href="#tratamento"
            className="text-secondary-content  block relative before:w-full before:h-[4px] before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-transform before:duration-200 before:ease-linear before:scale-x-0 before:origin-center before:bg-secondary-content hover:before:scale-x-100"
          >
            Tratamento
          </a>
          <a
            href="#ambiente"
            className="text-secondary-content  block relative before:w-full before:h-[4px] before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-transform before:duration-200 before:ease-linear before:scale-x-0 before:origin-center before:bg-secondary-content hover:before:scale-x-100"
          >
            Ambiente
          </a>
          <a
            href="#familia"
            className="text-secondary-content  block relative before:w-full before:h-[4px] before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-transform before:duration-200 before:ease-linear before:scale-x-0 before:origin-center before:bg-secondary-content hover:before:scale-x-100"
          >
            Família
          </a>
          <a
            href="#contato"
            className="text-secondary-content  block relative before:w-full before:h-[4px] before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-transform before:duration-200 before:ease-linear before:scale-x-0 before:origin-center before:bg-secondary-content hover:before:scale-x-100"
          >
            Contato
          </a>
        </nav>
      </div>

      {/* Menu md< */}
      <div className="grid md:hidden grid-cols-3 w-full">
        <MobileMenu className="md:hidden">
          <DropdownMenu />
        </MobileMenu>
        <a href="#hero" className="relative left-0 flex items-center gap-4">
          <img src="/heart.png" alt="Logo" width={30} height={60} />
          <span className="min-w-fit font-bold text-center text-xl sm:text-2xl  text-secondary-content">
            Alívio & Vida
          </span>
        </a>
      </div>
    </header>
  );
};

const DropdownMenu = () => {
  const DropdownItem = ({ href, children }) => {
    return (
      <a
        href={href}
        className=" font-bold uppercase text-secondary-content text-center w-fit"
      >
        {children}
      </a>
    );
  };

  return (
    <nav className="w-dvw flex flex-col items-center absolute py-2 bg-secondary gap-4 z-1">
      <DropdownItem href="#tratamento">Tratamento</DropdownItem>
      <DropdownItem href="#ambiente">Ambiente</DropdownItem>
      <DropdownItem href="#familia">Família</DropdownItem>
      <DropdownItem href="#contato">Contato</DropdownItem>
    </nav>
  );
};

const MobileMenu = ({ className, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`place-content-center ${className}`}>
      {!open && (
        <MenuIcon className="m-1" size={30} onClick={() => setOpen(true)} />
      )}
      {open && (
        <XIcon className="m-1" size={30} onClick={() => setOpen(false)} />
      )}
      {open && children}
    </div>
  );
};

export default Header;
