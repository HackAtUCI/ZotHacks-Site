import { motion, useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";
import styles from "./Title.module.scss";

export default function Title() {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate(
			"path",
			{
				pathLength: 1,
				strokeLinecap: "round",
			},
			{
				duration: 0.45, // time of letter animation
				delay: stagger(0.2, { startDelay: 0.25 }), // speed of triggering letter animations
			},
		);
	}, [animate]);

	return (
		<div>
			<svg
				ref={scope}
				xmlns="http://www.w3.org/2000/svg"
				width="650"
				height="150"
				viewBox="0 0 607 103"
				fill="none"
				strokeWidth="14"
				stroke="black"
				strokeLinecap="butt"
				className={styles.title}
			>
				<motion.path
					d="M13.2626 24.6289C13.2626 24.6289 65.0386 15.3905 61.8594 21.7115C58.6801 28.0325 2.72028 74.2626 7.26204 82.0423C11.8038 89.8221 55.525 82.0423 55.525 82.0423"
					initial={{
						strokeLinecap: "butt",
						pathLength: 0,
					}}
				/>
				<motion.path
					d="M88.3203 71.316C85.3762 46.469 103.532 37.6689 109.911 36.1162C116.29 34.5635 142.787 34.0457 145.731 58.8924C148.675 83.7392 126.594 91.504 121.687 92.0214C116.781 92.5388 91.2644 96.1629 88.3203 71.316Z"
					initial={{
						strokeLinecap: "butt",
						pathLength: 0,
					}}
				/>
				<motion.path
					d="M189.964 17.5C187.248 47.9206 189.065 61.7944 189.964 94.5M170 40.6429C187.656 37.7709 197.377 36.5329 213 37.8878"
					initial={{
						strokeLinecap: "butt",
						pathLength: 0,
					}}
				/>
				<motion.path
					d="M248 15.5C248.793 47.0834 247.924 64.6007 244 95.5M301.5 17.1C296.996 46.2811 296.295 62.1766 296.5 90.1667M237 56.0333C264.503 54.3299 279.647 54.2127 306 56.0333"
					initial={{
						strokeLinecap: "butt",
						pathLength: 0,
					}}
				/>
				<motion.path
					d="M381.53 36.5C380.715 47.7638 379.827 56.9323 380.061 65.3365M383 92.1132C381.676 81.6267 380.3 73.8676 380.061 65.3365M380.061 65.3365C380.061 65.3365 380.261 61.4231 379.41 56.5825M379.41 56.5825C379.41 44.2241 373.405 37.2588 359.475 38.5597C337.419 40.6195 331.536 71.5157 332.028 76.6651C333.01 96.2327 350.164 96.7476 354.575 94.6879C368.592 88.3883 374.23 80.4431 379.41 56.5825Z"
					initial={{
						strokeLinecap: "butt",
						pathLength: 0,
					}}
				/>
				<motion.path
					d="M451.38 39.3C451.38 39.3 419.067 21.6177 413.447 62.5396C407.828 103.461 457 83.7583 457 83.7583"
					initial={{
						strokeLinecap: "butt",
						pathLength: 0,
					}}
				/>
				<motion.path
					d="M490.982 7C490.891 24.5109 491.906 42.0631 490.982 55.814M486.5 92.5C487.849 79.7653 490.31 65.8211 490.982 55.814M490.982 55.814C506.922 51.8494 517.958 46.6541 530.5 40M490.982 55.814C507.621 70.3065 523.27 79.05 539.5 90.5"
					initial={{
						strokeLinecap: "butt",
						pathLength: 0,
					}}
				/>
				<motion.path
					d="M597.132 43.2929C591.005 37.6958 569.126 36.7629 569.126 51.2233C569.126 65.6837 605 65 599 83.5C593 102 571.752 96.4701 563 81.5432"
					initial={{
						strokeLinecap: "butt",
						pathLength: 0,
					}}
				/>
			</svg>
		</div>
	);
}
