import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Heart, Brain, Baby, Eye, Bone, Stethoscope, Activity, Shield } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care with advanced cardiac procedures and preventive cardiology programs."
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Expert neurological care for brain, spine, and nervous system disorders with cutting-edge treatments."
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized medical care for infants, children, and adolescents in a child-friendly environment."
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care services including routine exams, surgery, and treatment of eye diseases."
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Expert treatment for bone, joint, and muscle conditions with minimally invasive surgical options."
    },
    {
      icon: Stethoscope,
      title: "Internal Medicine",
      description: "Comprehensive primary care and treatment of complex medical conditions for adults."
    },
    {
      icon: Activity,
      title: "Emergency Medicine",
      description: "24/7 emergency care with rapid response teams and state-of-the-art trauma facilities."
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Proactive health screenings and wellness programs to help you maintain optimal health."
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-primary">Our Medical Services</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of medical services across multiple specialties, 
            ensuring that all your healthcare needs are met under one roof.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary text-lg md:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}