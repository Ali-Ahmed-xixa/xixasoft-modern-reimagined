import { FileSearch, FolderKanban, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    step: "01",
    title: "Project Analysis",
    description:
      "We analyze project goals, business needs, and resources to create a comprehensive project plan with clear milestones.",
  },
  {
    icon: FolderKanban,
    step: "02",
    title: "Planning & Design",
    description:
      "Our team creates detailed designs and technical specifications, ensuring alignment with your business objectives.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Development & Delivery",
    description:
      "We develop, test, and deliver high-quality solutions with regular progress updates and quality assurance.",
  },
  {
    icon: Headphones,
    step: "04",
    title: "24/7 Support",
    description:
      "Ongoing support and maintenance to ensure your solution runs smoothly. We're always ready to help.",
  },
];

export function Process() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Our Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our proven methodology ensures successful project delivery every time
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative group opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="relative bg-card rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-6 group-hover:from-primary group-hover:to-secondary group-hover:text-primary-foreground transition-all duration-300">
                  <step.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
