"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import styles from "./Footer.module.scss";

import Mail from "@/assets/icons/mail_icon.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Instagram from "@/assets/icons/Instagram_Glyph_White.svg";
import Hack from "@/assets/icons/HACK LOGO.svg";
import TikTok from "@/assets/icons/tiktok.svg";

type Social = {
	icon: any;
	link: string;
	alt: string;
};

const LEFT_SOCIALS: Social[] = [
	{
		icon: Hack,
		link: "https://hack.ics.uci.edu/",
		alt: "Hack at UCI logo that links to Hack at UCI's club website",
	},
];

const RIGHT_SOCIALS: Social[] = [
	{
		icon: Mail,
		link: "mailto:hack@uci.edu",
		alt: "Mail icon that creates an email with Hack at UCI as sender",
	},
	{
		icon: Facebook,
		link: "https://www.facebook.com/UCI.Hack/",
		alt: "Facebook logo that links to Hack at UCI's Facebook",
	},
	{
		icon: Instagram,
		link: "https://www.instagram.com/hackatuci/",
		alt: "Instagram logo that links to Hack at UCI's Instagram",
	},
	{
		icon: TikTok,
		link: "https://www.tiktok.com/@hackatuci",
		alt: "TikTok logo that links to Hack at UCI's TikTok",
	},
];

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={clsx(styles.left_footer, styles.hack_icon)}>
				{LEFT_SOCIALS.map(({ icon, link, alt }) => (
					<a key={link} href={link} target="_blank">
						<Image
							src={icon.src}
							alt={alt}
							width={55}
							height={55}
							className={styles.socials}
						/>
					</a>
				))}
			</div>
			<div className={styles.buttons}>
				<div id={styles.box}>
					<div className={clsx(styles.left_footer, styles.links)}>
						<Link
							href="/#"
							className={styles.left_footer_text}
						>
							Home
						</Link>
						{/* <Link
							href="https://zothacks-2023.devpost.com/"
							className={styles.left_footer_text}
							target="_blank"
						>
							Devpost
						</Link> */}
						<Link
							href="https://zothacks-2023.devpost.com/"
							className={styles.left_footer_text}
							target="_blank"
						>
							About Us
						</Link>
					</div>
					<div className={styles.right_footer}>
						{RIGHT_SOCIALS.map(({ icon, link, alt }) => (
							<a key={link} href={link} target="_blank">
								<Image
									src={icon.src}
									alt={alt}
									width={40}
									height={40}
									className={styles.socials}
								/>
							</a>
						))}
					</div>
				</div>

				<a href="https://docs.google.com/forms/d/e/1FAIpQLSeZN1njLZC9N_JE9eMYbtSZ95O1SafaZVLddTNReln6eZR7Vg/viewform" 
				className={styles.button}
				target="_blank">
					Apply Now
				</a>
			</div>
			<p className={styles.text}>Made with 👋 in Irvine, CA - Hack at UCI</p>
		</footer>
	);
}
