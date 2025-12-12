import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - XixaSoft</title>
        <meta
          name="description"
          content="XixaSoft Privacy Policy - Learn how we collect, use, and protect your personal information."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Privacy Policy
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
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    1. Introduction
                  </h2>
                  <p>
                    XixaSoft ("we", "our", or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard 
                    your information when you visit our website xixasoft.com or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    2. Information We Collect
                  </h2>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Personal Information
                  </h3>
                  <p className="mb-4">We may collect personal information that you voluntarily provide:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Business information (company name, website)</li>
                    <li>Payment and billing information</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-2">
                    Automatically Collected Information
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address and browser type</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    3. How We Use Your Information
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide and maintain our services</li>
                    <li>To process transactions and send related information</li>
                    <li>To communicate with you about updates and offers</li>
                    <li>To improve our website and services</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect against fraud and unauthorized access</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    4. Google Services Compliance
                  </h2>
                  <p>
                    We use Google services including Google Analytics, Google Ads, and Google 
                    Merchant Center. These services may collect data as described in Google's 
                    Privacy Policy. We comply with Google's requirements for data collection 
                    and use, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Providing clear notice about data collection</li>
                    <li>Using cookies with proper consent mechanisms</li>
                    <li>Respecting user opt-out preferences</li>
                    <li>Securing collected data appropriately</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    5. Data Sharing and Disclosure
                  </h2>
                  <p>We may share your information with:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Service providers who assist in our operations</li>
                    <li>Legal authorities when required by law</li>
                    <li>Business partners with your consent</li>
                  </ul>
                  <p className="mt-4">We do not sell your personal information to third parties.</p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    6. Data Security
                  </h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect 
                    your personal information against unauthorized access, alteration, disclosure, 
                    or destruction.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    7. Your Rights
                  </h2>
                  <p>Depending on your location, you may have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Delete your data</li>
                    <li>Object to data processing</li>
                    <li>Data portability</li>
                    <li>Withdraw consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    8. Contact Us
                  </h2>
                  <p>
                    If you have questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicyPage;
