import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Users, Lightbulb, Award, Heart, Leaf } from "lucide-react";
import medicalDrone from "@/assets/medical-drone.jpg";
import evtolFleet from "@/assets/evtol-fleet.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centric Care",
      description: "Every decision we make prioritizes patient health and well-being, ensuring critical medications reach those who need them most."
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description: "Our zero-emission eVTOL fleet demonstrates our commitment to sustainable healthcare delivery and environmental protection."
    },
    {
      icon: Target,
      title: "Precision & Reliability",
      description: "Advanced technology and rigorous safety protocols ensure accurate, dependable delivery of life-saving medications."
    },
    {
      icon: Users,
      title: "Healthcare Equity",
      description: "Breaking down geographical barriers to ensure equal access to medications for all communities, rural and urban alike."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously advancing aviation and healthcare technology to improve delivery speed, safety, and accessibility."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in safety, service quality, and regulatory compliance across all operations."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "CEO & Founder",
      bio: "Former emergency physician with 15 years of experience in rural healthcare delivery challenges."
    },
    {
      name: "James Rodriguez",
      role: "CTO",
      bio: "Aerospace engineer with expertise in electric aircraft design and autonomous flight systems."
    },
    {
      name: "Dr. Michael Chen",
      role: "Medical Director",
      bio: "Pharmaceutical specialist ensuring proper medication handling and transport protocols."
    },
    {
      name: "Lisa Thompson",
      role: "Operations Director",
      bio: "Logistics expert with 20+ years in emergency medical services and supply chain management."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">SkyMed Delivery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionizing healthcare accessibility through sustainable aviation technology, 
              one delivery at a time.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our <span className="text-primary">Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At SkyMed Delivery, we believe that geographic location should never be a barrier 
                  to accessing life-saving medications. Our mission is to revolutionize healthcare 
                  delivery through cutting-edge electric vertical takeoff and landing (eVTOL) 
                  technology, ensuring rapid, reliable, and sustainable medication transport to 
                  any destination.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2024, we've assembled a team of healthcare professionals, aerospace 
                  engineers, and logistics experts who share a common vision: making healthcare 
                  truly universal through innovative transportation solutions.
                </p>
              </div>
              <div className="relative">
                <img
                  src={medicalDrone}
                  alt="SkyMed Delivery Mission"
                  className="w-full h-auto rounded-2xl shadow-[var(--shadow-card)]"
                />
                <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-[var(--shadow-card)]">
                  <div className="text-2xl font-bold text-primary">2024</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide our mission to transform healthcare delivery
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div key={value.title} className="feature-card text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology & Innovation */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={evtolFleet}
                  alt="eVTOL Fleet Technology"
                  className="w-full h-auto rounded-2xl shadow-[var(--shadow-card)]"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Leading <span className="text-primary">Innovation</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our fleet of 20+ eVTOL aircraft represents the pinnacle of sustainable aviation 
                  technology. Each aircraft is equipped with advanced autonomous flight systems, 
                  real-time monitoring capabilities, and specialized medical cargo compartments.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Zero-emission electric propulsion systems</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">AI-powered flight planning and optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Temperature-controlled pharmaceutical storage</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Real-time tracking and telemetry systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Leadership <span className="text-primary">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the experts driving innovation in healthcare delivery
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {team.map((member, index) => (
                <div key={member.name} className="feature-card text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{member.name}</h3>
                  <div className="text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Impact</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-muted-foreground">Successful Deliveries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">eVTOL Aircraft</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Zero Emissions</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;