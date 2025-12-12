import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTA } from "@/components/home/CTA";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "JTL & Shopware Development",
    category: "E-Commerce",
    description: "Custom theme development and plugin integration for leading e-commerce platforms.",
    link: "#",
  },
  {
    title: "Python Data Scraping",
    category: "Data Services",
    description: "Automated web scraping solutions for data extraction and analysis.",
    link: "#",
  },
  {
    title: "Design to Web Conversion",
    category: "Web Development",
    description: "Converting PSD, PDF, and Adobe XD designs to responsive HTML/CSS.",
    link: "#",
  },
  {
    title: "Online Store",
    category: "E-Commerce",
    description: "Full-featured online store with inventory management and payment integration.",
    link: "#",
  },
  {
    title: "Hotel Management System",
    category: "Business Solution",
    description: "Comprehensive hotel booking and management platform.",
    link: "#",
  },
  {
    title: "Travel Management",
    category: "Business Solution",
    description: "Travel booking platform with tour packages and customer management.",
    link: "#",
  },
  {
    title: "Clinic Management",
    category: "Healthcare",
    description: "Patient management system with appointments and medical records.",
    link: "#",
  },
  {
    title: "Event Management",
    category: "Business Solution",
    description: "Event planning and photography portfolio platform.",
    link: "#",
  },
];

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - XixaSoft | Our Work</title>
        <meta
          name="description"
          content="Explore XixaSoft's portfolio of successful projects including JTL Shop, Shopware development, Google Ads campaigns, and Laravel applications."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-accent font-medium text-sm mb-6">
                Our Work
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Featured{" "}
                <span className="text-accent">Projects</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Explore our portfolio of successful projects across e-commerce,
                digital marketing, and custom development.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  {/* Gradient Background */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <ExternalLink className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
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

export default PortfolioPage;
