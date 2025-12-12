import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTA } from "@/components/home/CTA";
import { CheckCircle2, BarChart3, Target, TrendingUp, ShoppingBag, Search, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Search Campaigns",
    description: "Targeted search ads that reach customers actively looking for your products.",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Ads",
    description: "Product listing ads that showcase your inventory directly in search results.",
  },
  {
    icon: Target,
    title: "Display & Remarketing",
    description: "Visual ads across the web to build brand awareness and retarget visitors.",
  },
  {
    icon: TrendingUp,
    title: "Performance Max",
    description: "AI-powered campaigns that optimize across all Google channels.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Detailed insights and regular reports on campaign performance.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Optimization",
    description: "Ongoing A/B testing and optimization for maximum ROI.",
  },
];

const GoogleAdsPage = () => {
  return (
    <>
      <Helmet>
        <title>Google Ads & Merchant Management - XixaSoft</title>
        <meta
          name="description"
          content="Professional Google Ads campaign management and Merchant Center optimization. Maximize your ROI with XixaSoft's certified experts."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-foreground via-foreground/95 to-accent/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6">
                Digital Marketing
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Google Ads & Merchant{" "}
                <span className="text-accent">Management</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Maximize your ROI with professional Google Ads campaigns and Merchant Center
                optimization for increased visibility and sales.
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
                  className="p-8 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 text-accent mb-4">
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
              {/* Google Ads */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Google Ads Services
                </h3>
                <ul className="space-y-4">
                  {[
                    "Account setup & configuration",
                    "Keyword research & strategy",
                    "Campaign structure optimization",
                    "Ad copy creation & testing",
                    "Bid management & optimization",
                    "Conversion tracking setup",
                    "Remarketing campaigns",
                    "Monthly performance reports",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Merchant Center */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Merchant Center Services
                </h3>
                <ul className="space-y-4">
                  {[
                    "Account setup & verification",
                    "Product feed creation",
                    "Feed optimization & error fixing",
                    "Multi-country feed management",
                    "Price & availability sync",
                    "Promotions & special offers",
                    "Policy compliance review",
                    "Performance monitoring",
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

export default GoogleAdsPage;
