import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export function ContactSection() {
	return (
		<section id="contact" className="py-12 md:py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12 md:mb-16">
					<h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-primary">
						Contact Us
					</h2>
					<p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
						We&apos;re here to help you with any questions or to schedule an
						appointment. Reach out to us through any of the methods below.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 md:gap-12">
					{/* Contact Information */}
					<div className="space-y-6">
						<h3 className="text-xl md:text-2xl mb-4 md:mb-6 text-primary">
							Get in Touch
						</h3>

						<div className="space-y-4 md:space-y-6">
							<div className="flex items-start space-x-4">
								<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
									<Phone className="w-5 h-5 text-primary" />
								</div>
								<div>
									<h4 className="mb-1">Phone</h4>
									<p className="text-muted-foreground text-sm md:text-base">
										Main: (+234) 805 980 3789
									</p>
									<p className="text-muted-foreground text-sm md:text-base">
										Phone: (+234) 808 370 6519
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
									<MapPin className="w-5 h-5 text-primary" />
								</div>
								<div>
									<h4 className="mb-1">Address</h4>
									<p className="text-muted-foreground text-sm md:text-base">
										12 Jezza Street
										<br />
										Egbeda, Lagos Nigeria
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
									<Clock className="w-5 h-5 text-primary" />
								</div>
								<div>
									<h4 className="mb-1">Hours</h4>
									<p className="text-muted-foreground text-sm md:text-base">
										Emergency: 24/7
										<br />
										{/* Outpatient: Mon-Fri 8AM-6PM
										<br />
										Saturday: 9AM-2PM */}
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
									<Mail className="w-5 h-5 text-primary" />
								</div>
								<div>
									<h4 className="mb-1">Email</h4>
									<p className="text-muted-foreground text-sm md:text-base">
										info@tessaqueenhospital.com
									</p>
									<p className="text-muted-foreground text-sm md:text-base">
										appointments@tessaqueenhospital.com
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<Card>
						<CardHeader>
							<CardTitle className="text-primary text-lg md:text-xl">
								Send us a Message
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label className="block mb-2 text-sm md:text-base">
										First Name
									</label>
									<Input placeholder="Your first name" />
								</div>
								<div>
									<label className="block mb-2 text-sm md:text-base">
										Last Name
									</label>
									<Input placeholder="Your last name" />
								</div>
							</div>
							<div>
								<label className="block mb-2 text-sm md:text-base">Email</label>
								<Input type="email" placeholder="your.email@example.com" />
							</div>
							<div>
								<label className="block mb-2 text-sm md:text-base">Phone</label>
								<Input type="tel" placeholder="(234) 123456789" />
							</div>
							<div>
								<label className="block mb-2 text-sm md:text-base">
									Subject
								</label>
								<Input placeholder="How can we help you?" />
							</div>
							<div>
								<label className="block mb-2 text-sm md:text-base">
									Message
								</label>
								<Textarea
									placeholder="Please describe your inquiry..."
									rows={4}
								/>
							</div>
							<Button className="w-full">Send Message</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
