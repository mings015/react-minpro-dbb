import { useState } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

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
            <a href="#" className="hover:font-heading hover:underline">Home</a>
            <a href="#" className="hover:font-heading hover:underline">User</a>
            <Button variant="neutral">Login</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          
          <Button variant="neutral" onClick={toggleMenu} className="md:hidden">
            <Menu size={20} />
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="mt-4 space-y-4 md:hidden">
            <a href="#" className="block hover:font-heading hover:underline">Home</a>
            <a href="#" className="block hover:font-heading hover:underline">User</a>
            <Button variant="neutral" className="w-full">Login</Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
