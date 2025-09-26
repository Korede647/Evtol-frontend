import { ArrowRight, Play } from "lucide-react";
import heroImage from "../assets/hero-evtol.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="eVTOL delivering medications over city"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in text-shadow-lg">
            SkyMed Delivery: <br />
            <span className="text-primary-glow">Sustainable Medication</span> <br />
            Delivery with eVTOL
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl animate-slide-up text-shadow">
            Fast, eco-friendly delivery of critical medications to any location. 
            Revolutionizing healthcare accessibility with cutting-edge electric aviation technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
            <button className="btn-hero group">
              Explore Our Fleet
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="btn-secondary group">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-primary-glow">20+</div>
              <div className="text-white/80 text-shadow">eVTOL Aircraft</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-primary-glow">99.9%</div>
              <div className="text-white/80 text-shadow">Delivery Success</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-primary-glow">24/7</div>
              <div className="text-white/80 text-shadow">Availability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 animate-float hidden lg:block">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <div className="w-8 h-8 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;