import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";

const TermsOfServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - XixaSoft</title>
        <meta
          name="description"
          content="XixaSoft Terms of Service - Read our terms and conditions for using our services."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Terms of Service
              </h1>
              <p className="text-primary-foreground/80">
                Last updated: December 2024
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
                    1. Agreement to Terms
                  </h2>
                  <p>
                    By accessing or using XixaSoft's website and services, you agree to be bound 
                    by these Terms of Service. If you do not agree to these terms, please do not 
                    use our services.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    2. Services Description
                  </h2>
                  <p>XixaSoft provides the following services:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>JTL Shop and Shopware theme development</li>
                    <li>JTL Wawi configuration and management</li>
                    <li>Google Ads and Merchant Center management</li>
                    <li>Laravel custom web application development</li>
                    <li>IT consulting and support services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    3. Client Responsibilities
                  </h2>
                  <p>As a client, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of account credentials</li>
                    <li>Pay for services as agreed in the project scope</li>
                    <li>Provide timely feedback and approvals</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    4. Payment Terms
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Payment terms are specified in individual project agreements</li>
                    <li>Invoices are due upon receipt unless otherwise specified</li>
                    <li>Late payments may incur additional charges</li>
                    <li>All fees are non-refundable unless otherwise stated</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    5. Intellectual Property
                  </h2>
                  <p>
                    Upon full payment, clients receive ownership of custom deliverables as 
                    specified in the project agreement. XixaSoft retains rights to any 
                    pre-existing tools, frameworks, or proprietary methods used in development.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    6. Confidentiality
                  </h2>
                  <p>
                    Both parties agree to maintain confidentiality of proprietary information 
                    shared during the project. This obligation survives termination of the 
                    business relationship.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    7. Limitation of Liability
                  </h2>
                  <p>
                    XixaSoft's liability is limited to the amount paid for the specific service 
                    in question. We are not liable for indirect, incidental, or consequential 
                    damages arising from the use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    8. Termination
                  </h2>
                  <p>
                    Either party may terminate services with written notice. Upon termination, 
                    the client is responsible for payment of work completed. XixaSoft will 
                    deliver all completed work upon receipt of final payment.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    9. Changes to Terms
                  </h2>
                  <p>
                    We reserve the right to modify these terms at any time. Continued use of 
                    our services constitutes acceptance of updated terms.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    10. Contact Information
                  </h2>
                  <p>
                    For questions about these Terms of Service, please contact us at:
                  </p>
                  <p className="mt-4">
                    <strong className="text-foreground">Email:</strong> admin@xixasoft.com<br />
                    <strong className="text-foreground">Phone:</strong> +92-348-594-9959
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

export default TermsOfServicePage;
