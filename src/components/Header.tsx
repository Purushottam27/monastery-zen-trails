import { useState } from "react";
import { Menu, X, MapPin, Calendar, BookOpen, Headphones, Camera, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Virtual Tours", href: "#virtual-tours", icon: Camera },
    { name: "Interactive Map", href: "#map", icon: MapPin },
    { name: "Audio Guide", href: "#audio-guide", icon: Headphones },
    { name: "Digital Archives", href: "#archives", icon: BookOpen },
    { name: "Cultural Calendar", href: "#calendar", icon: Calendar },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-monastery rounded-full flex items-center justify-center shadow-monastery">
              <div className="w-6 h-6 border-2 border-primary-foreground rounded-full prayer-wheel" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold bg-gradient-monastery bg-clip-text text-transparent">
                Sikkim Monasteries
              </h1>
              <p className="text-xs text-muted-foreground">Digital Heritage Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 group"
                >
                  <Icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Search & Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search monasteries..."
                className="pl-10 w-64 bg-muted/50 border-border/60 focus:bg-background transition-colors"
              />
            </div>
            <Button variant="outline" size="sm">
              EN / नेपाली
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/40 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
              <div className="px-3 pt-4 border-t border-border/40">
                <Input
                  placeholder="Search monasteries..."
                  className="w-full mb-3"
                />
                <Button variant="outline" size="sm" className="w-full">
                  EN / नेपाली
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;