import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTA } from "@/components/home/CTA";
import { CheckCircle2, Settings, Package, RefreshCw, BarChart3, Link, Headphones } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "System Configuration",
    description: "Complete JTL Wawi setup tailored to your specific business requirements.",
  },
  {
    icon: RefreshCw,
    title: "Workflow Automation",
    description: "Automate repetitive tasks to save time and reduce human errors.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Efficient stock management across multiple warehouses and channels.",
  },
  {
    icon: Link,
    title: "Multi-Channel Integration",
    description: "Connect with Amazon, eBay, and other marketplaces seamlessly.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description: "Comprehensive reports to track performance and make data-driven decisions.",
  },
  {
    icon: Headphones,
    title: "Training & Support",
    description: "Expert training for your team and ongoing technical support.",
  },
];

const JTLWawiPage = () => {
  return (
    <>
      <Helmet>
        <title>JTL Wawi Management - XixaSoft</title>
        <meta
          name="description"
          content="Expert JTL Wawi configuration, integration, and workflow automation. Streamline your e-commerce operations with XixaSoft."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-foreground via-foreground/95 to-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-accent font-medium text-sm mb-6">
                ERP Solutions
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                JTL Wawi{" "}
                <span className="text-accent">Management</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Streamline your e-commerce operations with expert JTL Wawi configuration,
                integration, and workflow automation.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-8 rounded-xl bg-card border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 text-secondary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Our JTL Wawi Services
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  "JTL Wawi installation & initial configuration",
                  "User management & permission setup",
                  "Workflow & process automation",
                  "Multi-channel synchronization (Amazon, eBay, etc.)",
                  "Inventory & warehouse management",
                  "Order processing automation",
                  "Shipping & fulfillment integration",
                  "Custom report creation",
                  "Data import & migration",
                  "Staff training & documentation",
                  "Ongoing maintenance & support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </Layout>
    </>
  );
};

export default JTLWawiPage;
