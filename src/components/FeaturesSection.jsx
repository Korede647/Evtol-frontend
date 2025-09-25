import { Plane, Package, Battery, MapPin, Shield, Clock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Plane,
      title: "Fleet Management",
      description: "Monitor and control our 20+ eVTOL aircraft in real-time with advanced fleet management systems."
    },
    {
      icon: Package,
      title: "Medication Loading",
      description: "Efficient loading systems ensure safe transport of critical medications and medical supplies."
    },
    {
      icon: Battery,
      title: "Battery Monitoring",
      description: "Real-time battery level tracking ensures optimal flight planning and zero downtime."
    },
    {
      icon: MapPin,
      title: "Precise Delivery",
      description: "GPS-guided navigation system enables accurate delivery to any location, even remote areas."
    },
    {
      icon: Shield,
      title: "Secure Transport",
      description: "Temperature-controlled compartments and secure locking mechanisms protect valuable cargo."
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock availability for emergency medical deliveries when time is critical."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Advanced eVTOL <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge electric vertical takeoff and landing vehicles are equipped with 
            state-of-the-art technology for safe, efficient medical deliveries.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Available eVTOLs Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Available <span className="text-primary">eVTOL Fleet</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Our diverse fleet of electric aircraft ready for deployment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="feature-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  SkyMed-{String(i + 1).padStart(2, '0')}
                </h4>
                <div className="text-sm text-muted-foreground mb-2">
                  Status: <span className="text-green-500">Available</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Battery: <span className="text-primary font-medium">94%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;