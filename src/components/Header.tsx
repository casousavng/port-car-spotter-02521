import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";

import logo from '../assets/2025-10-10_16-04-removebg-preview.png'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">
                <img src={logo} style={{ height: "4vh" }} />
              </span>
            </div>
            <span className="text-xl font-bold text-foreground">LocationPro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("statistics")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Estatísticas
            </button>
            <button
              onClick={() => scrollToSection("news")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Notícias
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Contato
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>
            <Button className="bg-primary hover:bg-primary/90">
              Agendar Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("statistics")}
              className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Estatísticas
            </button>
            <button
              onClick={() => scrollToSection("news")}
              className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Notícias
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Contato
            </button>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Agendar Demo
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
