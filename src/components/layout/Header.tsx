import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoWhite from "@/assets/logo_white.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "JTL Shop & Shopware", href: "/services/jtl-shopware" },
      { name: "JTL Wawi Management", href: "/services/jtl-wawi" },
      { name: "Google Ads & Merchant", href: "/services/google-ads" },
      { name: "Laravel Development", href: "/services/laravel" },
    ],
  },
  { name: "Team", href: "/team" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative h-12 w-auto">
              <img
                src={logoWhite}
                alt="XixaSoft Logo"
                className={cn(
                  "h-12 w-auto transition-all duration-300",
                  isScrolled ? "brightness-0" : "brightness-100"
                )}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    isScrolled
                      ? "text-foreground hover:bg-muted"
                      : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10",
                    location.pathname === item.href && "text-primary"
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </Link>

                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-lg bg-card shadow-xl border border-border overflow-hidden animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-card rounded-b-lg animate-fade-in">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4">
              <Link to="/contact">
                <Button className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
