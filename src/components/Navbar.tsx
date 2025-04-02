
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Search, Menu, X, Home, Compass, Radio, Mic, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

const NavItem = ({ icon, label, to, active }: NavItemProps) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
      active 
        ? "bg-white/10 text-white font-medium" 
        : "text-white/80 hover:bg-white/5 hover:text-white"
    )}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </Link>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-orange-red-gradient shadow-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Link to="/" className="font-bold text-xl text-white">WaveBeats</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <NavItem icon={<Home size={18} />} label="Home" to="/" active={isActive('/')} />
            <NavItem icon={<Compass size={18} />} label="Explore" to="/explore" active={isActive('/explore')} />
            <NavItem icon={<Radio size={18} />} label="Radio" to="/radio" active={isActive('/radio')} />
            <NavItem icon={<Mic size={18} />} label="Artists" to="/artists" active={isActive('/artists')} />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
            <input
              type="text"
              placeholder="Search music..."
              className="h-9 w-[200px] rounded-full bg-white/10 px-9 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
          
          <Button className="hidden md:flex h-9 px-4 bg-white text-music-red-dark hover:bg-white/90">
            Sign In
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col pt-16 bg-orange-red-gradient md:hidden">
          <div className="container px-4 py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
              <input
                type="text"
                placeholder="Search music..."
                className="h-10 w-full rounded-full bg-white/10 px-9 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            
            <div className="space-y-2">
              <NavItem icon={<Home size={20} />} label="Home" to="/" active={isActive('/')} />
              <NavItem icon={<Compass size={20} />} label="Explore" to="/explore" active={isActive('/explore')} />
              <NavItem icon={<Radio size={20} />} label="Radio" to="/radio" active={isActive('/radio')} />
              <NavItem icon={<Mic size={20} />} label="Artists" to="/artists" active={isActive('/artists')} />
              <NavItem icon={<User size={20} />} label="Profile" to="/profile" active={isActive('/profile')} />
            </div>
            
            <Button className="w-full mt-4 bg-white text-music-red-dark hover:bg-white/90">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
