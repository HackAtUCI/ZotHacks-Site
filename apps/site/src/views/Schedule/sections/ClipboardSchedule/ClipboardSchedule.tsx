"use client";

import Image from "next/image";

import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import clip from "@/assets/images/clip.svg";

import styles from "./ClipboardSchedule.module.scss";

interface ClipboardScheduleProps {
	schedule: {
		_key: string;
		title: string;
		description: string;
		location: string;
		startDate: Date;
		endDate: Date;
	}[];
}

function ClipboardSchedule({ schedule }: ClipboardScheduleProps) {
	return (
		<Container
			as="section"
			className={styles.clipboard + " px-0 position-relative"}
		>
			<div className={styles.clip}>
				<Image src={clip} alt="Clipboard clip" className={styles.clip} />
			</div>
			<h2 className="mb-5">Countdown Timer</h2>
			<Accordion defaultActiveKey="0" className={styles.accordion}>
				{schedule.map(
					(
						{ _key, title, description, location, startDate, endDate },
						index,
					) => (
						<Accordion.Item
							key={_key}
							eventKey={`${index}`}
							className={styles.accordionItem}
						>
							<Accordion.Header className={styles.accordionHeader}>
								<h3>{title}</h3>
								<span className="text-end ms-auto">
									{location}, {startDate.toString()} - {endDate.toString()}
								</span>
							</Accordion.Header>
							<Accordion.Body>{description}</Accordion.Body>
						</Accordion.Item>
					),
				)}
			</Accordion>
		</Container>
	);
}

export default ClipboardSchedule;
