import { Target, Heart, Leaf, Users } from "lucide-react";
import medicalDrone from "../assets/medical-drone.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Accurate delivery to any location with GPS-guided navigation"
    },
    {
      icon: Heart,
      title: "Care",
      description: "Prioritizing patient health and emergency medical needs"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Zero-emission electric aircraft protecting our environment"
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Reaching remote and underserved communities"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Revolutionizing <span className="text-primary">Healthcare Delivery</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              SkyMed Delivery is pioneering the future of medical transportation through 
              sustainable eVTOL technology. Our mission is to deliver critical medications 
              efficiently and equitably, ensuring no patient is left behind regardless of location.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With our fleet of 20+ electric vertical takeoff and landing aircraft, we're 
              breaking down geographical barriers and reducing delivery times from hours to minutes, 
              all while maintaining a zero-emission footprint.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={value.title} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={medicalDrone}
                alt="Medical delivery drone"
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-card)]"
              />
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-[var(--shadow-card)] animate-float">
              <div className="text-2xl font-bold text-primary">50k+</div>
              <div className="text-sm text-muted-foreground">Deliveries Made</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;