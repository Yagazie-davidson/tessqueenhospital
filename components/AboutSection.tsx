import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";

export function AboutSection() {
	return (
		<section id="about" className="py-12 md:py-20 bg-accent/30">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
					<div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-primary">
							About Tessa Queen Hospital
						</h2>
						<p className="mb-4 md:mb-6 text-muted-foreground">
							Guided by our belief that while doctors care, only God heals,
							Tessa Queen Hospital provides a unique blend of professional
							healthcare and heartfelt service. Our mission is to restore
							health, bring comfort, and inspire hope because every life is
							precious.
						</p>
						<div className="grid grid-cols-2 gap-3 md:gap-6">
							<Card>
								<CardContent className="p-4 md:p-6 text-center">
									<h3 className="text-xl md:text-2xl mb-1 md:mb-2 text-primary">
										8+
									</h3>
									<p className="text-sm md:text-base text-muted-foreground">
										Years of Excellence
									</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-4 md:p-6 text-center">
									<h3 className="text-xl md:text-2xl mb-1 md:mb-2 text-primary">
										20+
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
							{/* <Card>
								<CardContent className="p-4 md:p-6 text-center">
									<h3 className="text-xl md:text-2xl mb-1 md:mb-2 text-primary">
										15
									</h3>
									<p className="text-sm md:text-base text-muted-foreground">
										Specialized Departments
									</p>
								</CardContent>
							</Card> */}
						</div>
					</div>

					<div className="relative order-first md:order-last">
						<ImageWithFallback
							src="/doctor-patient.webp"
							alt="Hospital patient care"
							className="rounded-lg shadow-lg w-full h-[250px] md:h-[400px] object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
