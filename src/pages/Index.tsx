import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSlider } from "@/components/home/HeroSlider";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { Stats } from "@/components/home/Stats";
import { Process } from "@/components/home/Process";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>XixaSoft - JTL Shop, Shopware Development & Google Ads Management</title>
        <meta
          name="description"
          content="XixaSoft specializes in JTL Shop & Shopware theme development, JTL Wawi management, Google Ads & Merchant optimization, and Laravel custom web applications."
        />
        <meta
          name="keywords"
          content="JTL Shop, Shopware, JTL Wawi, Google Ads, Google Merchant, Laravel development, e-commerce, web development"
        />
        <link rel="canonical" href="https://xixasoft.com" />
      </Helmet>

      <Layout>
        <HeroSlider />
        <Services />
        <About />
        <Stats />
        <Process />
        <CTA />
      </Layout>
    </>
  );
};

export default Index;
