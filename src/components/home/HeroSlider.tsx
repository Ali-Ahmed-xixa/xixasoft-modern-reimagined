import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import heroEcommerce from "@/assets/hero-ecommerce.jpg";
import heroMarketing from "@/assets/hero-marketing.jpg";
import heroDevelopment from "@/assets/hero-development.jpg";

const slides = [
  {
    id: 1,
    image: heroEcommerce,
    subtitle: "E-Commerce Excellence",
    title: "JTL Shop & Shopware Development",
    description:
      "Transform your online business with professional JTL Shop 5 and Shopware 6 theme development and customization.",
    link: "/services/jtl-shopware",
    cta: "Explore E-Commerce Solutions",
  },
  {
    id: 2,
    image: heroMarketing,
    subtitle: "Digital Marketing",
    title: "Google Ads & Merchant Management",
    description:
      "Maximize your ROI with expert Google Ads campaigns and Merchant Center optimization for increased visibility and sales.",
    link: "/services/google-ads",
    cta: "Boost Your Marketing",
  },
  {
    id: 3,
    image: heroDevelopment,
    subtitle: "Custom Solutions",
    title: "Laravel Web Application Development",
    description:
      "Build powerful, scalable web applications with our expert Laravel development team. From MVPs to enterprise solutions.",
    link: "/services/laravel",
    cta: "Start Your Project",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            currentSlide === index ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                "transition-all duration-500",
                currentSlide === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute pointer-events-none"
              )}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-accent font-medium text-sm mb-6 backdrop-blur-sm border border-accent/20">
                {slide.subtitle}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={slide.link}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:opacity-90 transition-all group"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
                  >
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 600);
              }
            }}
            className={cn(
              "h-2 rounded-full transition-all",
              currentSlide === index
                ? "w-8 bg-gradient-to-r from-primary to-accent"
                : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
