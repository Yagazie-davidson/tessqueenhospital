import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/20"></div>
      <ImageWithFallback 
        src="https://images.unsplash.com/photo-1717497932377-7758b8d5b45e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NjA5MTM4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Modern hospital exterior"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-primary leading-tight">
            Compassionate Care, Advanced Medicine
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-muted-foreground max-w-2xl leading-relaxed">
            At MedCare Hospital, we combine cutting-edge medical technology with personalized, 
            compassionate care to provide you and your family with the best possible health outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button size="lg" onClick={() => scrollToSection('contact')} className="w-full sm:w-auto">
              Schedule Appointment
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('services')} className="w-full sm:w-auto">
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}