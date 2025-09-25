import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroEvtol from "@/assets/hero-evtol.jpg";
import medicalDrone from "@/assets/medical-drone.jpg";
import medicalSupplies from "@/assets/medical-supplies.jpg";
import evtolFleet from "@/assets/evtol-fleet.jpg";

const Gallery = () => {
  const evtolImages = [
    {
      src: heroEvtol,
      title: "SkyMed eVTOL in Action",
      description: "Our flagship aircraft delivering critical medications over urban areas"
    },
    {
      src: medicalDrone,
      title: "Medical Delivery Drone",
      description: "Specialized medical transport vehicle for rapid pharmaceutical delivery"
    },
    {
      src: evtolFleet,
      title: "eVTOL Fleet Hangar",
      description: "Our state-of-the-art facility housing 20+ electric aircraft"
    }
  ];

  const medicationImages = [
    {
      src: medicalSupplies,
      title: "Medical Supply Package",
      description: "Carefully organized medications ready for immediate transport"
    },
    {
      src: medicalSupplies,
      title: "Emergency Medications",
      description: "Life-saving drugs packaged for urgent delivery scenarios"
    },
    {
      src: medicalSupplies,
      title: "Pharmaceutical Cargo",
      description: "Temperature-controlled medication storage systems"
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
              SkyMed <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our fleet of advanced eVTOL aircraft and the medications we deliver. 
              See the technology that's revolutionizing healthcare accessibility.
            </p>
          </div>
        </section>

        {/* eVTOL Aircraft Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Our <span className="text-primary">eVTOL Aircraft</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {evtolImages.map((image, index) => (
                <div key={index} className="feature-card group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white">
                        <h4 className="font-semibold text-shadow">{image.title}</h4>
                        <p className="text-sm text-white/90 text-shadow">{image.description}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{image.title}</h3>
                  <p className="text-muted-foreground">{image.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medications Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Medical <span className="text-primary">Supplies & Medications</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {medicationImages.map((image, index) => (
                <div key={index} className="feature-card group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white">
                        <h4 className="font-semibold text-shadow">{image.title}</h4>
                        <p className="text-sm text-white/90 text-shadow">{image.description}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{image.title}</h3>
                  <p className="text-muted-foreground">{image.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Showcase */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Advanced <span className="text-primary">Technology</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={evtolFleet}
                  alt="eVTOL Fleet Technology"
                  className="w-full h-auto rounded-2xl shadow-[var(--shadow-card)]"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Cutting-Edge Aviation Innovation
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Zero-emission electric propulsion systems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Advanced GPS navigation and autopilot capabilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Temperature-controlled cargo compartments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Real-time telemetry and monitoring systems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Redundant safety systems and emergency protocols</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;