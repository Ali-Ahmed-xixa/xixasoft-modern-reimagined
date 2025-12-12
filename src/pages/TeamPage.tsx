import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Max Mustermann",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Mit über 15 Jahren Erfahrung in der E-Commerce-Branche leitet Max das Team mit Vision und technischer Expertise.",
    linkedin: "#",
    email: "max@xixasoft.com",
    github: "#"
  },
  {
    name: "Anna Schmidt",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    bio: "Anna ist spezialisiert auf Laravel und Shopware Entwicklung und bringt innovative Lösungen für komplexe Anforderungen.",
    linkedin: "#",
    email: "anna@xixasoft.com",
    github: "#"
  },
  {
    name: "Thomas Weber",
    role: "JTL Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Als zertifizierter JTL-Experte optimiert Thomas Warenwirtschaftsprozesse und Shop-Integrationen.",
    linkedin: "#",
    email: "thomas@xixasoft.com",
    github: "#"
  },
  {
    name: "Lisa Müller",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Lisa verantwortet Google Ads und Merchant Center Kampagnen mit Fokus auf maximalen ROI.",
    linkedin: "#",
    email: "lisa@xixasoft.com",
    github: "#"
  },
  {
    name: "Felix Braun",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Felix kreiert ansprechende Benutzeroberflächen und sorgt für optimale User Experience.",
    linkedin: "#",
    email: "felix@xixasoft.com",
    github: "#"
  },
  {
    name: "Sarah Koch",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    bio: "Sarah koordiniert Projekte und stellt sicher, dass alle Meilensteine termingerecht erreicht werden.",
    linkedin: "#",
    email: "sarah@xixasoft.com",
    github: "#"
  }
];

const TeamPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Unser Team | XixaSoft - E-Commerce & Web Development Experten</title>
        <meta name="description" content="Lernen Sie das XixaSoft Team kennen - erfahrene Experten für JTL, Shopware, Google Ads und Laravel Entwicklung." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Unser Team
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Lernen Sie die Menschen kennen, die hinter XixaSoft stehen - 
              ein Team aus leidenschaftlichen Experten für E-Commerce und Webentwicklung.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      <a 
                        href={member.linkedin} 
                        className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name} auf LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href={`mailto:${member.email}`} 
                        className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`E-Mail an ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a 
                        href={member.github} 
                        className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name} auf GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Werden Sie Teil unseres Teams
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Wir sind immer auf der Suche nach talentierten Menschen, die unsere Leidenschaft 
            für exzellente digitale Lösungen teilen.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Jetzt Bewerben
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default TeamPage;
