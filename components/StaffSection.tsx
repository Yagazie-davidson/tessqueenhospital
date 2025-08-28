import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";

export function StaffSection() {
	const staff = [
		{
			name: "Dr. Ezinwa Ugwuadu",
			position: "Managing Director",
			specialty: "General",
			experience: "10+ years",
			education: "Lagos State Univeristy Teaching Hospital",
			image: "/dr_ezinwa.jpeg",
		},
	];

	return (
		<section id="staff" className="py-12 md:py-20 bg-accent/30">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12 md:mb-16">
					<h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-primary">
						Meet Our Expert Team
					</h2>
					<p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
						Our dedicated team of medical professionals brings together years of
						experience, advanced training, and a genuine commitment to patient
						care.
					</p>
				</div>

				<div
					// className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
					className="flex justify-center items-center"
				>
					{staff.map((doctor, index) => (
						<Card
							key={index}
							className="text-center hover:shadow-lg transition-shadow"
						>
							<CardContent className="p-4 md:p-6">
								<div className="mb-4 md:mb-6">
									<ImageWithFallback
										src={doctor.image}
										alt={doctor.name}
										className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto object-cover"
									/>
								</div>
								<h3 className="text-lg md:text-xl mb-1 md:mb-2 text-primary">
									{doctor.name}
								</h3>
								<p className="text-primary/80 mb-2 text-sm md:text-base">
									{doctor.position}
								</p>
								<p className="text-muted-foreground mb-3 text-sm md:text-base">
									{doctor.specialty}
								</p>
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
