import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import aceLogo from "@/assets/ace-logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about" },
    { label: "Our Team", path: "/team" },
    { label: "Core Values", path: "/core-values" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[hsl(220,85%,15%)]/95 backdrop-blur-xl shadow-[0_8px_32px_hsl(195,100%,50%/0.15)] border-b border-[hsl(195,100%,50%)]/20" 
          : "bg-gradient-to-b from-[hsl(220,85%,15%)]/90 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src={aceLogo}
                alt="Allied Centre of Excellence Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Allied Centre of Excellence</h1>
              <p className="text-sm text-[hsl(195,100%,50%)]">Powering purpose through financial excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`transition-colors duration-200 font-medium ${
                  location.pathname === item.path 
                    ? 'text-[hsl(195,100%,50%)]' 
                    : 'text-gray-300 hover:text-[hsl(195,100%,50%)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => handleNavigation("/contact")}
              className="hidden sm:flex bg-gradient-to-r from-[hsl(15,90%,55%)] to-[hsl(15,90%,50%)] hover:shadow-[0_0_30px_hsl(15,90%,55%/0.6)] text-white font-semibold px-6 transition-all duration-300"
            >
              Strengthen Your Finances
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[hsl(195,100%,50%)] hover:text-[hsl(195,100%,60%)] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[hsl(195,100%,50%)]/20 animate-slide-up bg-[hsl(220,85%,10%)]/95 backdrop-blur-xl rounded-b-2xl">
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`text-left py-2 transition-colors duration-200 font-medium ${
                    location.pathname === item.path 
                      ? 'text-[hsl(195,100%,50%)]' 
                      : 'text-gray-300 hover:text-[hsl(195,100%,50%)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavigation("/contact")}
                className="mt-4 bg-gradient-to-r from-[hsl(15,90%,55%)] to-[hsl(15,90%,50%)] hover:shadow-[0_0_30px_hsl(15,90%,55%/0.6)] text-white font-semibold w-full transition-all duration-300"
              >
                Strengthen Your Finances
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;