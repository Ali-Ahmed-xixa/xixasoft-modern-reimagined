import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";

const CookiePolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - XixaSoft</title>
        <meta
          name="description"
          content="XixaSoft Cookie Policy - Learn how we use cookies on our website."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-foreground via-foreground/95 to-primary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Cookie Policy
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
                    What Are Cookies?
                  </h2>
                  <p>
                    Cookies are small text files that are placed on your computer or mobile 
                    device when you visit a website. They are widely used to make websites 
                    work more efficiently and provide information to website owners.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    How We Use Cookies
                  </h2>
                  <p>XixaSoft uses cookies for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong className="text-foreground">Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                    <li><strong className="text-foreground">Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Types of Cookies We Use
                  </h2>

                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2 mt-6">
                    Essential Cookies
                  </h3>
                  <p>
                    These cookies are necessary for the website to function and cannot be 
                    switched off. They are usually set in response to actions you take, 
                    such as setting your privacy preferences, logging in, or filling in forms.
                  </p>

                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2 mt-6">
                    Analytics Cookies (Google Analytics)
                  </h3>
                  <p>
                    We use Google Analytics to understand how visitors interact with our website. 
                    These cookies collect information in an anonymous form, including the number 
                    of visitors, where visitors come from, and the pages they visited.
                  </p>

                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2 mt-6">
                    Advertising Cookies (Google Ads)
                  </h3>
                  <p>
                    These cookies are used to make advertising messages more relevant to you. 
                    They perform functions like preventing the same ad from continuously 
                    reappearing, ensuring ads are properly displayed, and measuring the 
                    effectiveness of advertising campaigns.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Third-Party Cookies
                  </h2>
                  <p>
                    We use services from third parties that may set cookies on your device:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Google Analytics (analytics)</li>
                    <li>Google Ads (advertising)</li>
                    <li>Google Merchant Center (e-commerce)</li>
                    <li>Google Search Console (search optimization)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Managing Cookies
                  </h2>
                  <p>
                    You can control and manage cookies in various ways. Most browsers allow 
                    you to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>View and delete cookies</li>
                    <li>Block all cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Clear all cookies when you close the browser</li>
                    <li>Set preferences for certain websites</li>
                  </ul>
                  <p className="mt-4">
                    Please note that blocking all cookies may affect website functionality.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Google Services Opt-Out
                  </h2>
                  <p>
                    You can opt out of Google Analytics by installing the 
                    <a 
                      href="https://tools.google.com/dlpage/gaoptout" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline ml-1"
                    >
                      Google Analytics Opt-out Browser Add-on
                    </a>.
                  </p>
                  <p className="mt-4">
                    You can manage your Google Ads preferences through 
                    <a 
                      href="https://adssettings.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline ml-1"
                    >
                      Google's Ads Settings
                    </a>.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Changes to This Policy
                  </h2>
                  <p>
                    We may update this Cookie Policy from time to time. We encourage you to 
                    periodically review this page for the latest information.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Contact Us
                  </h2>
                  <p>
                    If you have any questions about our use of cookies, please contact us:
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

export default CookiePolicyPage;
