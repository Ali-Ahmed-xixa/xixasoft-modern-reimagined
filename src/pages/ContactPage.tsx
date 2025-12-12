import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - XixaSoft | Get in Touch</title>
        <meta
          name="description"
          content="Contact XixaSoft for JTL Shop, Shopware development, Google Ads management, or custom Laravel applications. Get a free consultation today."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-accent font-medium text-sm mb-6">
                Get in Touch
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Let's Discuss Your{" "}
                <span className="text-accent">Project</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Have a project in mind? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:admin@xixasoft.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        admin@xixasoft.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-secondary to-accent text-primary-foreground">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:+923485949959"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +92-348-594-9959
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-accent to-primary text-primary-foreground">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                      <a
                        href="https://api.whatsapp.com/send?phone=923485949959&text=Hello,%20I%20have%20a%20question%20about."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Chat with us
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input placeholder="How can we help?" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ContactPage;
