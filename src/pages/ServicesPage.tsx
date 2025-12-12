import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CTA } from "@/components/home/CTA";
import { ArrowRight, ShoppingCart, Settings, BarChart3, Code2 } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "JTL Shop & Shopware Development",
    description:
      "Professional theme development and customization for JTL Shop 5 and Shopware 6. We create stunning, conversion-optimized online stores.",
    features: [
      "Custom theme design & development",
      "Plugin development & integration",
      "Performance optimization",
      "Responsive mobile design",
      "Multi-language support",
      "Payment gateway integration",
    ],
    link: "/services/jtl-shopware",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Settings,
    title: "JTL Wawi Management",
    description:
      "Streamline your e-commerce operations with expert JTL Wawi configuration, integration, and workflow automation.",
    features: [
      "System setup & configuration",
      "Workflow automation",
      "Multi-channel management",
      "Inventory optimization",
      "Order processing automation",
      "Reporting & analytics",
    ],
    link: "/services/jtl-wawi",
    gradient: "from-secondary to-accent",
  },
  {
    icon: BarChart3,
    title: "Google Ads & Merchant Management",
    description:
      "Maximize your ROI with professional Google Ads campaigns and Merchant Center optimization for increased visibility and sales.",
    features: [
      "Google Ads campaign setup",
      "Shopping ads optimization",
      "Merchant Center management",
      "Product feed optimization",
      "Remarketing campaigns",
      "Performance tracking & reporting",
    ],
    link: "/services/google-ads",
    gradient: "from-accent to-primary",
  },
  {
    icon: Code2,
    title: "Laravel Development",
    description:
      "Build powerful, scalable custom web applications with our expert Laravel development team. From MVPs to enterprise solutions.",
    features: [
      "Custom web applications",
      "API development",
      "E-commerce backends",
      "CRM & ERP systems",
      "Third-party integrations",
      "Maintenance & support",
    ],
    link: "/services/laravel",
    gradient: "from-primary via-secondary to-accent",
  },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - XixaSoft | E-Commerce & Web Development</title>
        <meta
          name="description"
          content="Explore XixaSoft's services: JTL Shop & Shopware development, JTL Wawi management, Google Ads optimization, and Laravel custom development."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-accent font-medium text-sm mb-6">
                Our Services
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Comprehensive IT Solutions for{" "}
                <span className="text-accent">Your Business</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                From e-commerce platforms to digital marketing and custom development,
                we provide end-to-end solutions to help your business thrive online.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}
                    >
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-primary font-medium hover:gap-3 transition-all group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                        >
                          <p className="text-foreground text-sm">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </Layout>
    </>
  );
};

export default ServicesPage;
