import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Tessa Queen Hospital",
		template: `%s | Tess queen hospital`,
	},
	description:
		"Tessa Queen Hospital, dedicated to providing quality healthcare with compassion, dignity, and excellence because every life matters.",
	keywords: [
		"hospital, tessa, queen, tessaqueen, jezza street, health, care, tessaqueenhospital.com, hospital.com",
	],
	publisher: "Tessa Queen Hospital",
	openGraph: {
		title: "Tessa Queen Hospital",
		description:
			"Tessa Queen Hospital, dedicated to providing quality healthcare with compassion, dignity, and excellence because every life matters.",

		url: "tessaqueenhospital.com",
		type: "website",
		images: [
			{
				url: "https://tessaqueenhospital.com/fav.png",
				width: 1200,
				height: 630,
				alt: "Tessa Queen Hospital",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Tessa Queen Hospital",
		description:
			"Tessa Queen Hospital, dedicated to providing quality healthcare with compassion, dignity, and excellence because every life matters.",
		images: ["https://tessaqueenhospital.com/fav.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
