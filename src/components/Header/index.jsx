import { useState } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="px-4 py-4 bg-white border-b-4 border-black dark:border-white font-base">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold text-mainAccent">DemoApp</p>

          {/* Desktop Menu */}
          <nav className="items-center hidden space-x-6 md:flex">
          <Link to="/">
              <p className="block hover:font-heading hover:underline">Home</p>
            </Link>
            <Link to="/user">
              <p className="block hover:font-heading hover:underline">User</p>
            </Link>
            <Link to="/login">
              <Button variant="neutral">Login</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}

          <Button variant="neutral" onClick={toggleMenu} className="md:hidden">
            <Menu size={20} />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="flex flex-col gap-2 mt-4 space-y-4 md:hidden">
            <Link to="/">
              <p className="block hover:font-heading hover:underline">Home</p>
            </Link>
            <Link to="/user">
              <p className="block hover:font-heading hover:underline">User</p>
            </Link>
            <Link to="/login">
              <Button variant="neutral" className="w-full">
                Login
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
