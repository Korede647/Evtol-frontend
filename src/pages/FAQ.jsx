import { useState } from "react";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<[]>([]);

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How does SkyMed Delivery work?",
      answer: "SkyMed Delivery uses electric vertical takeoff and landing (eVTOL) aircraft to transport medications quickly and efficiently. Our automated system manages flight planning, cargo loading, and delivery coordination to ensure medications reach their destination safely and on time."
    },
    {
      question: "What types of medications can be delivered?",
      answer: "We can deliver a wide range of medications including prescription drugs, vaccines, blood products, emergency medications, and other temperature-sensitive medical supplies. Our aircraft are equipped with climate-controlled compartments to maintain medication integrity during transport."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery times vary based on distance and weather conditions, but most deliveries are completed within 15-30 minutes. Emergency deliveries are prioritized and can be expedited to reach critical patients in remote or hard-to-access locations."
    },
    {
      question: "Is SkyMed Delivery environmentally friendly?",
      answer: "Yes! Our eVTOL aircraft are 100% electric, producing zero emissions during operation. This makes SkyMed Delivery a sustainable alternative to traditional ground-based delivery methods, reducing carbon footprint while improving healthcare accessibility."
    },
    {
      question: "What is the range of your eVTOL aircraft?",
      answer: "Our current fleet has a range of up to 100 miles per charge, with the ability to carry up to 50kg of medical cargo. We strategically position our aircraft and charging stations to ensure comprehensive coverage of service areas."
    },
    {
      question: "How do you ensure medication safety during transport?",
      answer: "We use secure, temperature-controlled compartments with real-time monitoring systems. Each delivery is tracked via GPS, and our aircraft have redundant safety systems. Medications are packaged according to pharmaceutical standards and secured to prevent damage during flight."
    },
    {
      question: "Can I track my medication delivery?",
      answer: "Absolutely! Our platform provides real-time tracking of your delivery from pickup to drop-off. You'll receive notifications at key milestones and can monitor the aircraft's location, battery status, and estimated arrival time through our mobile app or web portal."
    },
    {
      question: "What happens if weather conditions are poor?",
      answer: "Safety is our top priority. Our aircraft are equipped with advanced weather monitoring systems, and flights are automatically adjusted or postponed if conditions are unsafe. In case of delays, we maintain ground-based backup delivery options for critical medications."
    },
    {
      question: "How much does SkyMed Delivery cost?",
      answer: "Pricing varies based on delivery distance, urgency, and cargo requirements. We offer competitive rates compared to traditional emergency delivery services, with the added benefits of speed and environmental sustainability. Contact us for a customized quote."
    },
    {
      question: "Is SkyMed Delivery available 24/7?",
      answer: "Yes, we operate 24/7 to ensure critical medications can be delivered at any time. Our fleet management system automatically schedules deliveries and manages aircraft maintenance to maintain continuous service availability."
    },
    {
      question: "How do you handle emergencies?",
      answer: "Emergency deliveries receive highest priority in our system. We maintain dedicated aircraft on standby for critical situations and have established protocols with hospitals and healthcare providers for rapid response to life-threatening scenarios."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently serve urban and rural areas within a 100-mile radius of our operational hubs. We're continuously expanding our coverage area and establishing new hubs to reach more communities. Check our service map or contact us to confirm availability in your area."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our eVTOL medication delivery service.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openItems.includes(index);
                
                return (
                  <div key={index} className="feature-card">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full flex items-center justify-between text-left p-0"
                    >
                      <h3 className="text-lg font-semibold text-foreground pr-4">
                        {faq.question}
                      </h3>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                      )}
                    </button>
                    
                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 text-center p-8 bg-primary/5 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our team is here to help with any additional questions about our services.
              </p>
              <button className="btn-hero">
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;