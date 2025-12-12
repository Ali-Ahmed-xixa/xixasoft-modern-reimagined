import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTA } from "@/components/home/CTA";
import { CheckCircle2, Code2, Database, Cloud, Lock, Zap, Layers } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Custom Development",
    description: "Tailored web applications built from scratch to meet your unique requirements.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient database architecture for optimal performance and scalability.",
  },
  {
    icon: Cloud,
    title: "API Development",
    description: "RESTful and GraphQL APIs for seamless integrations and mobile apps.",
  },
  {
    icon: Lock,
    title: "Security First",
    description: "Enterprise-grade security practices to protect your data and users.",
  },
  {
    icon: Zap,
    title: "Performance Tuning",
    description: "Optimized code and caching strategies for lightning-fast applications.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Built to grow with your business, from startup to enterprise level.",
  },
];

const LaravelPage = () => {
  return (
    <>
      <Helmet>
        <title>Laravel Development - XixaSoft</title>
        <meta
          name="description"
          content="Custom Laravel web application development. Build powerful, scalable applications with XixaSoft's expert development team."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-accent font-medium text-sm mb-6">
                Custom Development
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Laravel Web Application{" "}
                <span className="text-accent">Development</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Build powerful, scalable custom web applications with our expert Laravel
                development team. From MVPs to enterprise solutions.
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
                  className="p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-4">
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
                  What We Build
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Custom CRM systems",
                  "E-commerce backends",
                  "Booking & reservation systems",
                  "Inventory management",
                  "HR & payroll systems",
                  "Learning management systems",
                  "Multi-tenant SaaS platforms",
                  "Content management systems",
                  "Customer portals",
                  "Business process automation",
                  "Third-party integrations",
                  "Data analytics dashboards",
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

export default LaravelPage;
