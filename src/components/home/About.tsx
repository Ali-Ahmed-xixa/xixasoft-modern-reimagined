import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Users, Target, Award, Headphones } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly skilled professionals delivering exceptional solutions",
  },
  {
    icon: Target,
    title: "Target Focused",
    description: "Systematic approach to achieve your business objectives",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Commitment to excellence in every project we deliver",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your technical needs",
  },
];

const highlights = [
  "10+ years of industry experience",
  "80+ satisfied clients worldwide",
  "JTL & Shopware certified experts",
  "Google Ads certified partners",
];

export function About() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              About XixaSoft
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Preparing Your Success with{" "}
              <span className="gradient-text">IT Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              XixaSoft is an IT company specializing in innovative solutions for businesses 
              of all sizes. Our team of experts is dedicated to delivering cutting-edge 
              technology and exceptional customer service to help our clients achieve their goals.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/about">
              <Button className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:opacity-90 group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-4 group-hover:from-primary group-hover:to-secondary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
