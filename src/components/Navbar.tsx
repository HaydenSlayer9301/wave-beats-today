
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Search, Menu, X, Home, Compass, Radio, Mic, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  const { user, profile, signOut } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleSignOut = async () => {
    await signOut();
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
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={profile?.avatar_url} alt={profile?.username || user.email} />
                    <AvatarFallback>{profile?.username?.[0] || user.email?.[0]}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{profile?.username || user.email}</p>
                    <p className="text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              asChild
              className="h-9 px-4 bg-white text-music-red-dark hover:bg-white/90"
            >
              <Link to="/auth">Sign In</Link>
            </Button>
          )}
          
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
            
            {user ? (
              <Button 
                className="w-full mt-4 bg-white text-music-red-dark hover:bg-white/90"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            ) : (
              <Button 
                asChild 
                className="w-full mt-4 bg-white text-music-red-dark hover:bg-white/90"
              >
                <Link to="/auth">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
