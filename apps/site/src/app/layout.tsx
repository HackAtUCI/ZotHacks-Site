import type { Metadata } from "next";

import FontProvider from "@/lib/FontProvider";

import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import "@/lib/styles/bootstrap.scss";
import "@/lib/styles/globals.scss";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<FontProvider />
			<body className="background">
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
