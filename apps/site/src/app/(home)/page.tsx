export const revalidate = 60;

import Landing from "./sections/Landing";
import GetInvolved from "./sections/GetInvolved";
import Sponsors from "./sections/Sponsors";
import FAQ from "./sections/FAQ";
import Clubs from "./sections/Clubs/Clubs";

import styles from "./page.module.scss";

const Home = () => {
	return (
		<div className={styles.home}>
			<Landing />
			<GetInvolved />
			<Sponsors />
			<Clubs />
			<FAQ />
		</div>
	);
};

export default Home;
