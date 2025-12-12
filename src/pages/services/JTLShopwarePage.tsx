import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTA } from "@/components/home/CTA";
import { CheckCircle2, ShoppingCart, Palette, Zap, Globe, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Custom Theme Design",
    description: "Unique, brand-aligned themes that make your store stand out from competitors.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast loading speeds that improve user experience and SEO rankings.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Reach global markets with seamless multi-language and multi-currency support.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with regular updates and vulnerability patches.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Optimization",
    description: "Conversion-focused design elements that turn visitors into customers.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Dedicated support team available to help you with any technical issues.",
  },
];

const JTLShopwarePage = () => {
  return (
    <>
      <Helmet>
        <title>JTL Shop & Shopware Development - XixaSoft</title>
        <meta
          name="description"
          content="Professional JTL Shop 5 and Shopware 6 theme development and customization. Create stunning, conversion-optimized online stores with XixaSoft."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-accent font-medium text-sm mb-6">
                E-Commerce Solutions
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                JTL Shop & Shopware{" "}
                <span className="text-accent">Development</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Professional theme development and customization for JTL Shop 5 and Shopware 6.
                Create stunning, conversion-optimized online stores.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                What We Offer
              </h2>
              <p className="text-muted-foreground text-lg">
                Comprehensive e-commerce development services to help your business succeed online.
              </p>
            </div>

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* JTL Shop */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  JTL Shop 5 Services
                </h3>
                <ul className="space-y-4">
                  {[
                    "Custom theme design & development",
                    "Plugin development & customization",
                    "JTL Wawi integration",
                    "Payment gateway integration",
                    "Multi-store setup",
                    "Performance optimization",
                    "SEO optimization",
                    "Migration from other platforms",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shopware */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Shopware 6 Services
                </h3>
                <ul className="space-y-4">
                  {[
                    "Theme development & customization",
                    "Plugin development",
                    "App development",
                    "API integrations",
                    "B2B & B2C solutions",
                    "Performance tuning",
                    "Headless commerce setup",
                    "Shopware migration",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </Layout>
    </>
  );
};

export default JTLShopwarePage;
