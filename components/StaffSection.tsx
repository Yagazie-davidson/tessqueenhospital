import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function StaffSection() {
  const staff = [
    {
      name: "Dr. Sarah Johnson",
      position: "Chief of Cardiology",
      specialty: "Interventional Cardiology",
      experience: "15+ years",
      education: "Harvard Medical School"
    },
    {
      name: "Dr. Michael Chen",
      position: "Head of Neurosurgery",
      specialty: "Neurosurgery",
      experience: "20+ years",
      education: "Johns Hopkins University"
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Pediatric Department Head",
      specialty: "Pediatric Medicine",
      experience: "12+ years",
      education: "Stanford Medical School"
    },
    {
      name: "Dr. David Williams",
      position: "Emergency Medicine Director",
      specialty: "Emergency Medicine",
      experience: "18+ years",
      education: "Yale School of Medicine"
    }
  ];

  return (
    <section id="staff" className="py-12 md:py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-primary">Meet Our Expert Team</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our dedicated team of medical professionals brings together years of experience, 
            advanced training, and a genuine commitment to patient care.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {staff.map((doctor, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div className="mb-4 md:mb-6">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1565647946321-a146ac24a220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGRvY3RvcnN8ZW58MXx8fHwxNzU2MjE1Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt={doctor.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl mb-1 md:mb-2 text-primary">{doctor.name}</h3>
                <p className="text-primary/80 mb-2 text-sm md:text-base">{doctor.position}</p>
                <p className="text-muted-foreground mb-3 text-sm md:text-base">{doctor.specialty}</p>
                <div className="space-y-1 text-xs md:text-sm text-muted-foreground">
                  <p>{doctor.experience} experience</p>
                  <p>{doctor.education}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}