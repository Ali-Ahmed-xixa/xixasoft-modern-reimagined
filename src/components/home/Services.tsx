import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, Settings, BarChart3, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: ShoppingCart,
    title: "JTL Shop & Shopware",
    description:
      "Professional theme development and customization for JTL Shop 5 and Shopware 6. Create stunning online stores that convert.",
    link: "/services/jtl-shopware",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Settings,
    title: "JTL Wawi Management",
    description:
      "Streamline your e-commerce operations with expert JTL Wawi configuration, integration, and workflow automation.",
    link: "/services/jtl-wawi",
    gradient: "from-secondary to-accent",
  },
  {
    icon: BarChart3,
    title: "Google Ads & Merchant",
    description:
      "Maximize your ROI with professional Google Ads campaigns and Merchant Center optimization for increased visibility.",
    link: "/services/google-ads",
    gradient: "from-accent to-primary",
  },
  {
    icon: Code2,
    title: "Laravel Development",
    description:
      "Build powerful, scalable custom web applications with our expert Laravel development team. From MVPs to enterprise solutions.",
    link: "/services/laravel",
    gradient: "from-primary via-secondary to-accent",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive IT Solutions for{" "}
            <span className="gradient-text">Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From e-commerce platforms to digital marketing and custom development,
            we provide end-to-end solutions to help your business thrive online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:shadow-xl hover:border-primary/30",
                "opacity-0 animate-fade-in"
              )}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              {/* Background Gradient */}
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300",
                  `bg-gradient-to-br ${service.gradient}`
                )}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={cn(
                    "inline-flex p-4 rounded-xl bg-gradient-to-br",
                    service.gradient,
                    "mb-6"
                  )}
                >
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Link */}
                <span className="inline-flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
