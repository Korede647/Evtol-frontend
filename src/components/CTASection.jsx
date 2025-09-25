import { ArrowRight, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
            <Rocket className="w-10 h-10 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Transform <span className="text-primary">Healthcare Delivery?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join the revolution in sustainable medical transportation. Our eVTOL fleet is ready 
            to deliver critical medications to any destination, ensuring healthcare reaches everyone, everywhere.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero group">
              Start Delivering with SkyMed
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="btn-secondary">
              Request Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">15min</div>
              <div className="text-muted-foreground">Average Delivery</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;