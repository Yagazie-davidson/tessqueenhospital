"use client";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer className="bg-primary text-white py-12 md:py-16">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
					{/* Hospital Info */}
					<div className="sm:col-span-2 lg:col-span-1">
						<div className="flex items-center space-x-2 mb-4">
							<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
								<span className="text-primary text-lg">+</span>
							</div>
							<span className="text-lg md:text-xl">Tessa Queen Hospital</span>
						</div>
						<p className="text-blue-100 mb-4 text-sm md:text-base">
							We care, God heals
						</p>
						<div className="flex space-x-4">
							<Link href={""}>
								<Linkedin className="w-5 h-5 text-blue-100 hover:text-white cursor-pointer transition-colors" />
							</Link>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg mb-4">Quick Links</h4>
						<ul className="space-y-2">
							<li>
								<button
									onClick={() => scrollToSection("home")}
									className="text-blue-100 hover:text-white transition-colors text-sm md:text-base cursor-pointer"
								>
									Home
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection("about")}
									className="text-blue-100 hover:text-white transition-colors text-sm md:text-base cursor-pointer"
								>
									About Us
								</button>
							</li>
							{/* <li>
								<button
									onClick={() => scrollToSection("services")}
									className="text-blue-100 hover:text-white transition-colors text-sm md:text-base cursor-pointer"
								>
									Services
								</button>
							</li> */}
							<li>
								<button
									onClick={() => scrollToSection("staff")}
									className="text-blue-100 hover:text-white transition-colors text-sm md:text-base cursor-pointer"
								>
									Our Team
								</button>
							</li>
						</ul>
					</div>

					{/* Services */}
					{/* <div>
						<h4 className="text-lg mb-4">Our Services</h4>
						<ul className="space-y-2 text-blue-100 text-sm md:text-base">
							<li>Emergency Care</li>
							<li>Cardiology</li>
							<li>Neurology</li>
							<li>Pediatrics</li>
							<li>Orthopedics</li>
							<li>Internal Medicine</li>
						</ul>
					</div> */}

					{/* Contact Info */}
					<div>
						<h4 className="text-lg mb-4">Contact Info</h4>
						<div className="space-y-2 text-blue-100 text-sm md:text-base">
							<p>12 Jezza Street</p>
							<p>Egbeda, Lagos Nigeria</p>
							<p className="mt-3">Main: (+234) 805 980 3789</p>
							<p>Phone: (+234) 808 370 6519</p>
							<p className="mt-3">info@tessaqueenhospital.com</p>
							<Link
								target="_blank"
								href={
									"https://www.google.com/maps/place/Tessa+Hospital/@6.5997701,3.2875354,17z/data=!3m1!4b1!4m6!3m5!1s0x103b91d6d86516b1:0x70dac1cee6aec77f!8m2!3d6.5997701!4d3.2901103!16s%2Fg%2F11h64nf78t?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
								}
								className="mt-3 underline"
							>
								Find us
							</Link>
						</div>
					</div>
				</div>

				<div className="border-t border-blue-400 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
					<p className="text-blue-100 text-sm md:text-base">
						© 2024 Tessa Queen Hospital. All rights reserved. |
						<span className="hover:text-white cursor-pointer">
							{" "}
							Privacy Policy
						</span>{" "}
						|
						<span className="hover:text-white cursor-pointer">
							{" "}
							Terms of Service
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
