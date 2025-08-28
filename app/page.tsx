import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { ServicesSection } from "@/components/ServicesSection";
import { StaffSection } from "@/components/StaffSection";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Navigation />
			<HeroSection />
			<AboutSection />
			{/* <ServicesSection /> */}
			<StaffSection />
			<ContactSection />
			<Footer />
		</div>
	);
}
