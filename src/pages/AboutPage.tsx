import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Stats } from "@/components/home/Stats";
import { CTA } from "@/components/home/CTA";
import { CheckCircle2, Users, Target, Award, Headphones, Globe, Zap } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Client-Centric",
    description: "We put our clients first, understanding their unique needs and delivering tailored solutions.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Our focus is on delivering measurable results that drive your business growth.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards of quality in every project we undertake.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of technology trends to provide cutting-edge solutions.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients worldwide with expertise in international e-commerce markets.",
  },
  {
    icon: Headphones,
    title: "Reliable Support",
    description: "Round-the-clock support ensuring your business runs smoothly always.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - XixaSoft | Your Trusted IT Partner</title>
        <meta
          name="description"
          content="Learn about XixaSoft, your trusted partner for JTL Shop, Shopware development, Google Ads management, and custom Laravel applications."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-accent font-medium text-sm mb-6">
                About XixaSoft
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Your Trusted Partner for{" "}
                <span className="text-accent">IT Excellence</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                We are dedicated to delivering innovative technology solutions that help
                businesses thrive in the digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                  Our Story
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Building Digital Success Since Day One
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    XixaSoft was founded with a vision to bridge the gap between businesses
                    and technology. We specialize in e-commerce solutions, particularly
                    JTL Shop and Shopware platforms, helping businesses establish and grow
                    their online presence.
                  </p>
                  <p>
                    Our expertise extends to JTL Wawi management, Google Ads and Merchant
                    Center optimization, and custom Laravel web application development.
                    We believe in delivering solutions that not only meet but exceed our
                    clients' expectations.
                  </p>
                  <p>
                    With a team of certified experts and a commitment to excellence, we
                    have successfully delivered hundreds of projects for clients worldwide,
                    earning their trust and loyalty.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "80+", label: "Happy Clients" },
                  { number: "45+", label: "Projects Completed" },
                  { number: "10+", label: "Years Experience" },
                  { number: "24/7", label: "Support Available" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-xl bg-card border border-border text-center"
                  >
                    <div className="font-heading text-4xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Our Values
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Drives Us Forward
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                  Our Expertise
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Certified & Experienced
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  "JTL Shop 5 Theme Development & Customization",
                  "Shopware 6 Plugin & Theme Development",
                  "JTL Wawi Configuration & Workflow Automation",
                  "Google Ads Campaign Management & Optimization",
                  "Google Merchant Center Setup & Feed Management",
                  "Laravel Custom Web Application Development",
                  "E-Commerce Strategy & Consulting",
                  "UI/UX Design & Responsive Web Development",
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

        <Stats />
        <CTA />
      </Layout>
    </>
  );
};

export default AboutPage;
