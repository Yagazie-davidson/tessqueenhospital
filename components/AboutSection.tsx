import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";

export function AboutSection() {
	return (
		<section id="about" className="py-12 md:py-20 bg-accent/30">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
					<div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-primary">
							About MedCare Hospital
						</h2>
						<p className="mb-4 md:mb-6 text-muted-foreground">
							For over 50 years, MedCare Hospital has been at the forefront of
							medical excellence, serving our community with dedication,
							innovation, and unwavering commitment to patient care.
						</p>
						<p className="mb-6 md:mb-8 text-muted-foreground">
							Our state-of-the-art facility houses the latest medical technology
							and is staffed by some of the most skilled and experienced medical
							professionals in the region. We believe that every patient
							deserves personalized attention and the highest quality of care.
						</p>

						<div className="grid grid-cols-2 gap-3 md:gap-6">
							<Card>
								<CardContent className="p-4 md:p-6 text-center">
									<h3 className="text-xl md:text-2xl mb-1 md:mb-2 text-primary">
										50+
									</h3>
									<p className="text-sm md:text-base text-muted-foreground">
										Years of Excellence
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-4 md:p-6 text-center">
									<h3 className="text-xl md:text-2xl mb-1 md:mb-2 text-primary">
										200+
									</h3>
									<p className="text-sm md:text-base text-muted-foreground">
										Medical Professionals
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-4 md:p-6 text-center">
									<h3 className="text-xl md:text-2xl mb-1 md:mb-2 text-primary">
										24/7
									</h3>
									<p className="text-sm md:text-base text-muted-foreground">
										Emergency Care
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-4 md:p-6 text-center">
									<h3 className="text-xl md:text-2xl mb-1 md:mb-2 text-primary">
										15
									</h3>
									<p className="text-sm md:text-base text-muted-foreground">
										Specialized Departments
									</p>
								</CardContent>
							</Card>
						</div>
					</div>

					<div className="relative order-first md:order-last">
						<ImageWithFallback
							src="https://images.unsplash.com/photo-1721114989769-0423619f03d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHBhdGllbnQlMjBjYXJlfGVufDF8fHx8MTc1NjIxNTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
							alt="Hospital patient care"
							className="rounded-lg shadow-lg w-full h-[250px] md:h-[400px] object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
