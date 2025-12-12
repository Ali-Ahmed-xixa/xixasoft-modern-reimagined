import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";

const ImprintPage = () => {
  return (
    <>
      <Helmet>
        <title>Imprint - XixaSoft</title>
        <meta
          name="description"
          content="XixaSoft Imprint - Legal information and company details."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Imprint
              </h1>
              <p className="text-primary-foreground/80">
                Legal Information (Impressum)
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Company Information
                  </h2>
                  <p className="mb-2"><strong className="text-foreground">Company Name:</strong> XixaSoft</p>
                  <p className="mb-2"><strong className="text-foreground">Legal Form:</strong> IT Services Company</p>
                  <p className="mb-2"><strong className="text-foreground">Country:</strong> Pakistan</p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Contact Information
                  </h2>
                  <p className="mb-2"><strong className="text-foreground">Email:</strong> admin@xixasoft.com</p>
                  <p className="mb-2"><strong className="text-foreground">Phone:</strong> +92-348-594-9959</p>
                  <p className="mb-2"><strong className="text-foreground">Website:</strong> www.xixasoft.com</p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Responsible for Content
                  </h2>
                  <p className="mb-2"><strong className="text-foreground">Name:</strong> Ali Muhammad</p>
                  <p className="mb-2"><strong className="text-foreground">Position:</strong> Founder/CEO</p>
                  <p className="mb-2"><strong className="text-foreground">Email:</strong> admin@xixasoft.com</p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Business Activities
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>JTL Shop and Shopware development</li>
                    <li>JTL Wawi configuration and management</li>
                    <li>Google Ads and Merchant Center optimization</li>
                    <li>Laravel custom web application development</li>
                    <li>IT consulting services</li>
                    <li>UI/UX design services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Disclaimer
                  </h2>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Liability for Content
                  </h3>
                  <p className="mb-4">
                    The contents of our pages were created with great care. However, we cannot 
                    guarantee the accuracy, completeness, or timeliness of the content. As a 
                    service provider, we are responsible for our own content on these pages 
                    under general law.
                  </p>

                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Liability for Links
                  </h3>
                  <p className="mb-4">
                    Our website contains links to external third-party websites, over whose 
                    content we have no control. Therefore, we cannot accept any liability for 
                    these external contents. The respective provider or operator of the linked 
                    pages is always responsible for their content.
                  </p>

                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Copyright
                  </h3>
                  <p>
                    The content and works on these pages created by the site operators are 
                    subject to copyright law. Duplication, processing, distribution, or any 
                    form of commercialization of such material beyond the scope of copyright 
                    law requires the prior written consent of the respective author or creator.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Dispute Resolution
                  </h2>
                  <p>
                    We are not willing or obligated to participate in dispute resolution 
                    proceedings before a consumer arbitration board.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ImprintPage;
