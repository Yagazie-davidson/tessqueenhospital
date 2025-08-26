"use client";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsOpen(false); // Close mobile menu after clicking
		}
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
			}`}
		>
			<div className="container mx-auto px-4 py-3 md:py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
							<span className="text-white text-lg">+</span>
						</div>
						<span className="text-lg md:text-xl font-semibold text-primary">
							Tessa Queen Hospital
						</span>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-6 lg:space-x-8">
						<button
							onClick={() => scrollToSection("home")}
							className="text-foreground hover:text-primary transition-colors"
						>
							Home
						</button>
						<button
							onClick={() => scrollToSection("about")}
							className="text-foreground hover:text-primary transition-colors"
						>
							About
						</button>
						<button
							onClick={() => scrollToSection("services")}
							className="text-foreground hover:text-primary transition-colors"
						>
							Services
						</button>
						<button
							onClick={() => scrollToSection("staff")}
							className="text-foreground hover:text-primary transition-colors"
						>
							Our Team
						</button>
						<button
							onClick={() => scrollToSection("contact")}
							className="text-foreground hover:text-primary transition-colors"
						>
							Contact
						</button>
						<Button onClick={() => scrollToSection("contact")} size="lg">
							Book Appointment
						</Button>
					</div>

					{/* Mobile Navigation */}
					<div className="md:hidden">
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								{/* <Button variant="outline" size="sm"> */}
								<Menu className="w-4 h-4" />
								{/* </Button> */}
							</SheetTrigger>
							<SheetContent side="right" className="w-[300px] sm:w-[400px]">
								<div className="flex flex-col space-y-6 mt-8">
									<div className="flex items-center space-x-2 pb-4 border-b mx-2">
										<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
											<span className="text-white text-lg">+</span>
										</div>
										<span className="text-xl font-semibold text-primary">
											Tessa Queen Hospital
										</span>
									</div>

									<button
										onClick={() => scrollToSection("home")}
										className="text-left text-foreground hover:text-primary transition-colors py-2 pl-5"
									>
										Home
									</button>
									<button
										onClick={() => scrollToSection("about")}
										className="text-left text-foreground hover:text-primary transition-colors py-2 pl-5"
									>
										About
									</button>
									<button
										onClick={() => scrollToSection("services")}
										className="text-left text-foreground hover:text-primary transition-colors py-2 pl-5"
									>
										Services
									</button>
									<button
										onClick={() => scrollToSection("staff")}
										className="text-left text-foreground hover:text-primary transition-colors py-2 pl-5"
									>
										Our Team
									</button>
									<button
										onClick={() => scrollToSection("contact")}
										className="text-left text-foreground hover:text-primary transition-colors py-2 pl-5"
									>
										Contact
									</button>
									<Button
										onClick={() => scrollToSection("contact")}
										className="mt-4 mx-3"
										size={"lg"}
									>
										Book Appointment
									</Button>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
}
