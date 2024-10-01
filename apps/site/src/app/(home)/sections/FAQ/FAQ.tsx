import { getQuestions } from "./getQuestions";
import FAQAccordion from "./FAQAccordion";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import styles from "./FAQ.module.scss";

import leftAnteater from "@/assets/images/left-faq-anteater.svg";
import rightAnteater from "@/assets/images/right-faq-anteater.svg";

const FAQ = async () => {
	const questions = await getQuestions();
	const faq = questions[0]["faqs"].map(({ _key, question, answer }) => ({
		_key: _key,
		question: <strong>{question}</strong>,
		answer: <PortableText value={answer} />,
	}));

	return (
		<>
		
		<section className={styles.container}>
			<Image
				src={leftAnteater}
				alt="left anteater on floatie"
				className={styles["left-anteater"]}
			/>

			<div className={styles.faq}>
				<div
					className={`${styles["accordion-border"]} ${styles["answer-body"]} ${styles["header-body"]}`}
				>
					<h4>
						<span className={styles["light-blue-text"]}>FAQ!</span> Here's
						answers to our most commonly asked questions!
					</h4>
					<p>
						If you don't find what you're looking for, reach out to our team at{" "}
						<a
							className={styles["purple-text"]}
							href="mailto:hackatuci@uci.edu"
						>
							hackatuci@uci.edu
						</a>
					</p>
				</div>
				<FAQAccordion faq={faq} />
			</div>

			<Image
				src={rightAnteater}
				alt="left anteater on floatie"
				className={styles["right-anteater"]}
			/>
		</section>
		<p> A long time ago, in a galaxy far, far, away...

A vast sea of stars serves as the backdrop for the main title. 
War drums echo through the heavens as a rollup slowly crawls 
into infinity.

	 It is a period of civil war. Rebel spaceships, 
	 striking from a hidden base, have won their first 
	 victory against the evil Galactic Empire.

	 During the battle, Rebel spies managed to steal 
	 secret plans to the Empire's ultimate weapon, the 
	 Death Star, an armored space station with enough 
	 power to destroy an entire planet.

	 Pursued by the Empire's sinister agents, Princess 
	 Leia races home aboard her starship, custodian of 
	 the stolen plans that can save her people and 
	 restore freedom to the galaxy...

The awesome yellow planet of Tatooine emerges from a total 
eclipse, her two moons glowing against the darkness. A tiny 
silver spacecraft, a Rebel Blockade Runner firing lasers 
from the back of the ship, races through space. It is pursed 
by a giant Imperial Stardestroyer. Hundreds of deadly 
laserbolts streak from the Imperial Stardestroyer, causing 
the main solar fin of the Rebel craft to disintegrate.

INT. REBEL BLOCKADE RUNNER - MAIN PASSAGEWAY

An explosion rocks the ship as two robots, Artoo-Detoo (R2-
D2) and See-Threepio (C-3PO) struggle to make their way 
through the shaking, bouncing passageway. Both robots are 
old and battered. Artoo is a short, claw-armed tripod. His 
face is a mass of computer lights surrounding a radar eye. 
Threepio, on the other hand, is a tall, slender robot of 
human proportions. He has a gleaming bronze-like metallic 
surface of an Art Deco design.

Another blast shakes them as they struggle along their way.

					  THREEPIO
		  Did you hear that? They've shut down 
		  the main reactor. We'll be destroyed 
		  for sure. This is madness!

Rebel troopers rush past the robots and take up positions in 
the main passageway. They aim their weapons toward the door.

					  THREEPIO
		  We're doomed!

The little R2 unit makes a series of electronic sounds that 
only another robot could understand.

					  THREEPIO
		  There'll be no escape for the Princess 
		  this time.

Artoo continues making beeping sounds. Tension mounts as 
loud metallic latches clank and the scream of heavy equipment 
are heard moving around the outside hull of the ship.

					  THREEPIO
		  What's that?

EXT. SPACECRAFT IN SPACE

The Imperial craft has easily overtaken the Rebel Blockade 
Runner. The smaller Rebel ship is being drawn into the 
underside dock of the giant Imperial starship.

INT. REBEL BLOCKADE RUNNER

The nervous Rebel troopers aim their weapons. Suddenly a 
tremendous blast opens up a hole in the main passageway and 
a score of fearsome armored spacesuited stormtroopers make 
their way into the smoke-filled corridor.

In a few minutes the entire passageway is ablaze with 
laserfire. The deadly bolts ricochet in wild random patterns 
creating huge explosions. Stormtroopers scatter and duck 
behind storage lockers. Laserbolts hit several Rebel soldiers 
who scream and stagger through the smoke, holding shattered 
arms and faces.

An explosion hits near the robots.

					  THREEPIO
		  I should have known better than to 
		  trust the logic of a half-sized 
		  thermocapsulary dehousing assister...

Artoo counters with an angry rebuttal as the battle rages 
around the two hapless robots.

EXT. TATOOINE - DESERT WASTELAND - DAY

A death-white wasteland stretches from horizon to horizon. 
The tremendous heat of two huge twin suns settle on a lone 
figure, Luke Skywalker, a farm boy with heroic aspirations 
who looks much younger than his eighteen years. His shaggy 
hair and baggy tunic give him the air of a simple but lovable 
lad with a prize-winning smile.

A light wind whips at him as he adjusts several valves on a 
large battered moisture vaporator which sticks out of the 
desert floor much like an oil pipe with valves. He is aided 
by a beatup tread-robot with six claw arms. The little robot 
appears to be barely functioning and moves with jerky motions.  
A bright sparkle in the morning sky catches Luke's eye and 
he instinctively grabs a pair of electrobinoculars from his 
utility belt. He stands transfixed for a few moments studying 
the heavens, then dashed toward his dented, crudely repaired 
Landspeeder (an auto-like transport that travels a few feet 
above the ground on a magnetic-field). He motions for the 
tiny robot to follow him.

					  LUKE
		  Hurry up! Come with me! What are you 
		  waiting for?! Get in gear!

The robot scoots around in a tight circle, stops short, and 
smoke begins to pour out of every joint. Luke throws his 
arms up in disgust. Exasperated, the young farm boy jumps 
into his Landspeeder leaving the smoldering robot to hum 
madly.

INT. REBEL BLOCKADE RUNNER - MAIN HALLWAY

The awesome, seven-foot-tall Dark Lord of the Sith makes his 
way into the blinding light of the main passageway. This is 
Darth Vader, right hand of the Emperor. His face is obscured 
by his flowing black robes and grotesque breath mask, which 
stands out next to the fascist white armored suits of the 
Imperial stormtroopers. Everyone instinctively backs away 
from the imposing warrior and a deathly quiet sweeps through 
the Rebel troops. Several of the Rebel troops break and run 
in a frenzied panic.

INT. REBEL BLOCKADE RUNNER

A woman's hand puts a card into an opening in Artoo's dome.  
Artoo makes beeping sounds.

INT. REBEL BLOCKADE RUNNER

Threepio stands in a hallway, somewhat bewildered. Artoo is 
nowhere in sight. The pitiful screams of the doomed Rebel 
soldiers can be heard in the distance.

					  THREEPIO
		  Artoo! Artoo-Detoo, where are you?

A familiar clanking sound attacks Threepio's attention and 
he spots little Artoo at the end of the hallway in a smoke-
filled alcove. A beautiful young girl (about sixteen years 
old) stands in front of Artoo. Surreal and out of place, 
dreamlike and half hidden in the smoke, she finishes adjusting 
something on Artoo's computer face, then watches as the little 
robot joins his companion.

					  THREEPIO
		  At last! Where have you been?

Stormtroopers can be heard battling in the distance.

					  THREEPIO
		  They're heading in this direction. 
		  What are we going to do? We'll be 
		  sent to the spice mine of Kessel or 
		  smashed into who knows what!

Artoo scoots past his bronze friend and races down the 
subhallway. Threepio chases after him.

					  THREEPIO
		  Wait a minute, where are you going?

Artoo responds with electronic beeps.

INT. REBEL BLOCKADE RUNNER - CORRIDOR

The evil Darth Vader stands amid the broken and twisted bodies 
of his foes. He grabs a wounded Rebel Officer by the neck as 
an Imperial Officer rushes up to the Dark Lord.

					  IMPERIAL OFFICER
		  The Death Star plans are not in the 
		  main computer.

Vader squeezes the neck of the Rebel Officer, who struggles 
in vain.

					  VADER
		  Where are those transmissions you 
		  intercepted?

Vader lifts the Rebel off his feet by his throat.

					  VADER
		  What have you done with those plans?</p>
		</>
	);
};

export default FAQ;
