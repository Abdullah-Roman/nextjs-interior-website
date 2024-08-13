import Logo from "./Logo";
import MobileView from "./MobileView";
import Navbar from "./Navbar";
import { ModeToggle } from "./Toggle";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-2 shadow-lg dark:bg-[#0A192F]">
      {/* Logo  */}
      <div>
        <Logo />
      </div>
      <div className="flex space-x-2 items-center">
        <Navbar className="hidden xl:flex gap-x-8 " />
        <ModeToggle />
        <MobileView className="xl:hidden" />
      </div>
    </div>
  );
};

export default Header;
